"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
var _1 = require("./");
var yaml_1 = require("yaml");
var Workflow = /** @class */ (function () {
    function Workflow() {
    }
    Workflow.createWorkflow = function () {
        return new _1.WorkflowBuilder();
    };
    Workflow.saveWorkflow = function (workflow, fileName, cb) {
        var dirPath = ['.github', 'workflows'];
        if (!(0, fs_1.existsSync)(path_1.resolve.apply(void 0, dirPath))) {
            (0, fs_1.mkdirSync)(path_1.resolve.apply(void 0, dirPath), { recursive: true });
        }
        var data = (0, yaml_1.stringify)(workflow);
        var path = path_1.resolve.apply(void 0, __spreadArray(__spreadArray([], dirPath, false), ["".concat(fileName, ".yml")], false));
        if (cb) {
            (0, fs_1.writeFile)(path, data, cb);
        }
        else {
            (0, fs_1.writeFileSync)(path, data);
        }
    };
    return Workflow;
}());
exports.Workflow = Workflow;
