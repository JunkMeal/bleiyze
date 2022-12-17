"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAndCopyUntil = (fstring, find) => {
    let found = 0;
    let copied = "";
    for (let i = 0; i < fstring.length; i++) {
        const char = fstring[i];
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
const findUntil = (find, searchString) => {
    let found = 0;
    for (let i = 0; i < searchString.length; i++) {
        const char = searchString[i];
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
const findOne = (html, identificator, selectors) => {
    let excess = identificator ? findUntil(identificator, html) : html;
    let result = [];
    for (let i = 0; result.length !== selectors.length && excess; i++) {
        const afterFirst = findUntil(selectors[i][0], excess);
        const content = findAndCopyUntil(afterFirst, selectors[i][1]);
        excess = content.excess;
        result.push(content.result);
    }
    return {
        result,
        excess
    };
};
const findAll = (html, identificator, selectors) => {
    let search = [];
    let lhtml = html;
    for (let i = 0; true; i++) {
        const { result, excess: ehtml } = findOne(lhtml, identificator, selectors);
        if (result.length == 0)
            return search;
        search.push(result);
        lhtml = ehtml;
    }
};
exports.default = { findOne, findAll, findUntil, findAndCopyUntil };
