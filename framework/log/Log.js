/** @typedef {typeof import('log4js')} Log4jS */
const log4js = require("log4js");
const {FC} = require("../Index");

class Log {

    /**
     *
     * @type {Log4jS}
     */
    log4js = null;

    constructor() {
        this.log4js = log4js;
        this.log4js.level = "debug";
    }

    /**
     *
     * @param options {Object}
     * @constructor
     */
    SetConfig(options) {
         this.log4js.configure({...FC.Config.Get("log"), ...options});
    }

    /**
     *
     * @param category {category?: string}
     * @return {Logger}
     * @constructor
     */
    GetLogger(category) {
        try {
            return this.log4js.getLogger(category||"default")
        }catch (e) {
            console.log(e);
            return this.log4js.getLogger("default")
        }

    }

    /**
     *
     * @param callback {cb?: (error?: Error) => void}
     * @constructor
     */
    Shudown(callback) {
        return this.log4js.shutdown(callback)
    }

    /**
     *
     * @param type
     * @param fn (a: any) => (logEvent: LoggingEvent) => any): void;
     * @returns {*}
     * @constructor
     */
    AddLayout(type, fn) {
        return this.log4js.addLayout(type, fn)
    }

    /**
     *
     * @param message {any}
     * @param category {string}
     * @constructor
     */
    Trace(message, category) {
        this.GetLogger(category ).trace(message || "");
    }

    /**
     *
     * @param message {string}
     * @param category? {string}
     * @constructor
     */
    Debug(message, category) {
        this.GetLogger(category).debug(message || "");
    }

    /**
     *
     * @param message {string}
     * @param category? {string}
     * @constructor
     */
    Info(message, category) {
        this.GetLogger(category).info(message || "");
    }

    /**
     *
     * @param message {string}
     * @param category? {string}
     * @constructor
     */
    Warn(message, category) {
        this.GetLogger(category ).warn(message || "");
    }

    /**
     *
     * @param message {string}
     * @param category? {string}
     * @constructor
     */
    Error(message, category) {
        console.log(":::",message)
        this.GetLogger(category || "").error(message || "");
    }

    /**
     *
     * @param message {string}
     * @param category? {string}
     * @constructor
     */
    Fatal(message, category) {
        this.GetLogger(category || "").fatal(message || "");
    }

    /**
     *
     * @param message {string}
     * @constructor
     */
    TraceHttp(message) {
        this.GetLogger("http" ).trace(message || "");
    }

    /**
     *
     * @param message {string}
     * @constructor
     */
    DebugHttp(message) {
        this.GetLogger("http").debug(message || "");
    }

    /**
     *
     * @param message {string}
     * @constructor
     */
    InfoHttp(message) {
        this.GetLogger("http").info(message || "");
    }

    /**
     *
     * @param message {string}
     * @constructor
     */
    WarnHttp(message) {
        this.GetLogger( "http" ).warn(message || "");
    }

    /**
     *
     * @param message {string}
     * @constructor
     */
    ErrorHttp(message) {
        this.GetLogger( "http").error(message || "");
    }

    /**
     *
     * @param message {string}
     * @constructor
     */
    FatalHttp(message) {
        this.GetLogger( "http").fatal(message || "");
    }
}

module.exports = Log;
