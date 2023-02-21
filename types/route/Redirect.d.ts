export = Redirect;
declare class Redirect extends Router {
    /**
     *
     * @param options {{middlewares: *[], prefix: string}}
     * @param vPath {string}
     * @param redirectUrl {string}
     */
    constructor(options: {
        middlewares: any[];
        prefix: string;
    }, vPath: string, redirectUrl: string);
    /**
     * get url values
     * @param path
     * @return {{ path: string, index: number, params: {} }|boolean}
     */
    is(path: any, method: any): {
        path: string;
        index: number;
        params: {};
    } | boolean;
}
import Router = require("./Router");