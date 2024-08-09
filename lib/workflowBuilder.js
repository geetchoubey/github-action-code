"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowBuilder = void 0;
var WorkflowBuilder = /** @class */ (function () {
    function WorkflowBuilder() {
        this.workflow = {
            jobs: {},
        };
    }
    WorkflowBuilder.prototype.setName = function (name) {
        this.workflow.name = name;
        return this;
    };
    WorkflowBuilder.prototype.setRunName = function (runName) {
        this.workflow["run-name"] = runName;
        return this;
    };
    WorkflowBuilder.prototype.setPermissions = function (permissions) {
        this.workflow.permissions = permissions;
        return this;
    };
    WorkflowBuilder.prototype.addEnv = function (key, value) {
        if (!this.workflow.env) {
            this.workflow.env = {};
        }
        this.workflow.env[key] = value;
        return this;
    };
    WorkflowBuilder.prototype.addOn = function (on) {
        this.workflow.on = on;
        return this;
    };
    WorkflowBuilder.prototype.addJob = function (name, job) {
        this.workflow.jobs[name] = job;
        return this;
    };
    WorkflowBuilder.prototype.build = function () {
        if (Object.values(this.workflow.jobs).length === 0)
            throw new Error('At least one job is required');
        return this.workflow;
    };
    return WorkflowBuilder;
}());
exports.WorkflowBuilder = WorkflowBuilder;
