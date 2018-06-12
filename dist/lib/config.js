"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ROOT = 'http://localhost:5000';
exports.LOG_LEVEL = 'debug';
var DB_TYPE;
(function (DB_TYPE) {
    DB_TYPE["pg"] = "pg";
    DB_TYPE["mysql"] = "mysql";
})(DB_TYPE = exports.DB_TYPE || (exports.DB_TYPE = {}));
//# sourceMappingURL=config.js.map