const path = require("path")
const pathToRegexp = require("path-to-regexp")
const {FC} = require("../Index");

class Router {
    /**
     *
     * @type {{prefix: string, middleware: [string]}}
     */
    options = {
        prefix: "",
        middleware: []
    }

    /**
     *
     * @type {[string]}
     */
    methods = [];
    /**
     * input path value
     * @type {string}
     */
    vPath = "";
    /**
     * input redirect next page url value
     * @type {string}
     */
    redirectUrl = "";
    /**
     * _MakePath
     * @type {string}
     */
    path = "";
    /**
     *
     * @type {Class|Function}
     */
    controllerClass = null;
    /**
     *
     * @type {Function}
     */
    actionFunc = null;
    /**
     *
     * @type {string}
     */
    action = "Index";
    /**
     * RegExp
     * @type {MatchFunction<object>|Function}
     */
    match = null;

    name = "";

    /**
     *
     * @param options
     * @param args
     */
    constructor(options, ...args) {
        this._SetOptions(options)
    }

    /**
     * url
     * @return {string}
     * @protected
     */
    MakePath() {

        return path.join(this.options.prefix, this.vPath).replace(/\\/g, "/")
    }

    /**
     *
     * @return {MatchFunction<object>|Function}
     * @protected
     */
    MakeMath() {
        return pathToRegexp.match(this.path, {
            decode: decodeURIComponent,
        })
    }

    /**
     * options {{middleware: *[], prefix: string}}
     * @param options
     * @private
     */
    _SetOptions(options) {
        this.options = {...this.options, ...options}
    }

    /**
     * parse url
     * @param path
     * @return {{ path: string, index: number, params: {} }|boolean}
     */
    Parse(path) {
        return this.match(path)
    }

    /**
     * get url values
     * @param path
     * @param method
     * @return {{ path: string, index: number, params: {} }|boolean}
     */
    Is(path, method) {
        path = path.toLowerCase();
        method = method.toLowerCase();
        if (this.methods.includes(method)) {
            return this.Parse(path)
        }
    }


    /**
     * setName
     * @param name {string}
     * @return Router|undefined
     * @constructor
     */
    Name(name) {
        if (name) {
            this.name = name
        }
        return this

    }


}

module.exports = Router;
