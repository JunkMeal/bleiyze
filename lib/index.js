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
const findUntil = (find, fstring) => {
    let found = 0;
    for (let i = 0; i < fstring.length; i++) {
        const char = fstring[i];
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
const findOne = (html, identificator, firstSelector, secondSelector) => {
    const fin = findUntil(identificator, html);
    const fso = findUntil(firstSelector, fin);
    const fst = findAndCopyUntil(fso, secondSelector);
    return {
        result: fst.result,
        excessHTML: fst.excessHTML
    };
};
const findAll = (html, identificator, firstSelector, secondSelector) => {
    let search = [];
    let lhtml = html;
    while (true) {
        const { result, excessHTML: ehtml } = findOne(lhtml, identificator, firstSelector, secondSelector);
        if (result !== "") {
            search.push(result);
            lhtml = ehtml;
            continue;
        }
        else
            return search;
    }
};
exports.default = { findOne, findAll, findUntil, findAndCopyUntil };
