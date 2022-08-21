const findAndCopyUntil = (fstring: string, find: string) => {
    let found = 0
    let copied = ""
    for (let i = 0; i < fstring.length; i++) {
        const char = fstring[i];
        if (char == find[found]) {
            found++
            if (found == find.length){
                return {
                    excessHTML: fstring.substring(++i),
                    result: copied
                }
            }
        } else {
            found = 0
            copied += char
        }
    }
    return {
        excessHTML: fstring,
        result: ""
    }
}
const findUntil = (find: string, searchString: string): string => {
    let found = 0
    for (let i = 0; i < searchString.length; i++) {
        const char = searchString[i];
        if (char == find[found]) {
            found++
            if (found == find.length) return searchString.substring(++i)
        } else found = 0
    }
    return "";
}


const findOne = (html: string, identificator: string, selectors: Array<[string, string]>) => {
    const afterIdentificator = findUntil(identificator, html)
    let excess = afterIdentificator
    let result = []
    for (let i = 0; result.length !== selectors.length && excess; i++) {
        const afterFirst = findUntil(selectors[i][0], excess)
        const content = findAndCopyUntil(afterFirst, selectors[i][1])
        excess = content.excessHTML
        result.push(content.result)
    }

    return {
        result,
        excessHTML: excess
    };
}

const findAll = (html: string, identificator: string, selectors: Array<[string, string]>) => {
    let search = []
    let lhtml = html
    for (let i = 0; true; i++) {
        const { result, excessHTML: ehtml } = findOne(lhtml, identificator, selectors)
        if (result.length == 0) return search;
            search.push(result)
            lhtml = ehtml
    }

}

export default {findOne, findAll, findUntil, findAndCopyUntil};