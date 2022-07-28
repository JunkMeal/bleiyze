declare const _default: {
    findOne: (html: string, identificator: string, firstSelector: string, secondSelector: string) => {
        result: string;
        excessHTML: string;
    };
    findAll: (html: string, identificator: string, firstSelector: string, secondSelector: string) => string[];
    findUntil: (find: string, fstring: string) => string;
    findAndCopyUntil: (fstring: string, find: string) => {
        excessHTML: string;
        result: string;
    };
};
export default _default;
