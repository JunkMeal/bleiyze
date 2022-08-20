var findAndCopyUntil = function (fstring, find) {
    var found = 0;
    var copied = "";
    for (var i = 0; i < fstring.length; i++) {
        var char = fstring[i];
        if (char == find[found]) {
            found++;
            if (found == find.length) {
                return {
                    excessHTML: fstring.substring(++i),
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
        excessHTML: fstring,
        result: ""
    };
};
var findUntil = function (find, fstring) {
    var found = 0;
    for (var i = 0; i < fstring.length; i++) {
        var char = fstring[i];
        if (char == find[found]) {
            found++;
            if (found == find.length)
                return fstring.substring(++i);
        }
        else
            found = 0;
    }
    return "";
};
var findOne = function (html, identificator, firstSelector, secondSelector) {
    var fin = findUntil(identificator, html);
    var fso = findUntil(firstSelector, fin);
    var fst = findAndCopyUntil(fso, secondSelector);
    return {
        result: fst.result,
        excessHTML: fst.excessHTML
    };
};
var findAll = function (html, identificator, firstSelector, secondSelector) {
    var search = [];
    var lhtml = html;
    while (true) {
        var _a = findOne(lhtml, identificator, firstSelector, secondSelector), result = _a.result, ehtml = _a.excessHTML;
        if (result !== "") {
            search.push(result);
            lhtml = ehtml;
            continue;
        }
        else
            return search;
    }
};
export default { findOne: findOne, findAll: findAll, findUntil: findUntil, findAndCopyUntil: findAndCopyUntil };
