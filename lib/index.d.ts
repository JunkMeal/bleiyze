declare const _default: {
    findOne: (html: string, identificator: string, selectors: [string, string][]) => {
        result: string[];
        excess: string;
    };
    findAll: (html: string, identificator: string, selectors: [string, string][]) => string[][];
    findUntil: (find: string, searchString: string) => string;
    findAndCopyUntil: (fstring: string, find: string) => {
        excess: string;
        result: string;
    };
};
export default _default;
