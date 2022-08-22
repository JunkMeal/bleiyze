var findAndCopyUntil = function (fstring, find) {
    var found = 0;
    var copied = "";
    for (var i = 0; i < fstring.length; i++) {
        var char = fstring[i];
        if (char == find[found]) {
            found++;
            if (found == find.length) {
                return {
                    excess: fstring.substring(++i),
                    result: copied
                };
            }
        }
        else {
            found = 0;
            copied += char;
        }
    }
    return {
        excess: fstring,
        result: ""
    };
};
var findUntil = function (find, searchString) {
    var found = 0;
    for (var i = 0; i < searchString.length; i++) {
        var char = searchString[i];
        if (char == find[found]) {
            found++;
            if (found == find.length)
                return searchString.substring(++i);
        }
        else
            found = 0;
    }
    return "";
};
var findOne = function (html, identificator, selectors) {
    var excess = identificator ? findUntil(identificator, html) : html;
    var result = [];
    for (var i = 0; result.length !== selectors.length && excess; i++) {
        var afterFirst = findUntil(selectors[i][0], excess);
        var content = findAndCopyUntil(afterFirst, selectors[i][1]);
        excess = content.excess;
        result.push(content.result);
    }
    return {
        result: result,
        excess: excess
    };
};
var findAll = function (html, identificator, selectors) {
    var search = [];
    var lhtml = html;
    for (var i = 0; true; i++) {
        var _a = findOne(lhtml, identificator, selectors), result = _a.result, ehtml = _a.excess;
        if (result.length == 0)
            return search;
        search.push(result);
        lhtml = ehtml;
    }
};
export default { findOne: findOne, findAll: findAll, findUntil: findUntil, findAndCopyUntil: findAndCopyUntil };
