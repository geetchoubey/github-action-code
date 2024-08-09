import {IWorkflow, JobType, On, Permissions} from '../types';

export class WorkflowBuilder {
    private workflow: IWorkflow;

    constructor() {
        this.workflow = {
            jobs: {},
        };
    }

    public setName(name: string) {
        this.workflow.name = name;
        return this;
    }

    public setRunName(runName: string) {
        this.workflow["run-name"] = runName;
        return this;
    }

    public setPermissions(permissions: Permissions) {
        this.workflow.permissions = permissions;
        return this;
    }

    public addEnv(key: string, value: string | number | boolean) {
        if (!this.workflow.env) {
            this.workflow.env = {};
        }
        this.workflow.env[key] = value;
        return this;
    }

    public addOn(on: On) {
        this.workflow.on = on;
        return this;
    }

    public addJob(name: string, job: JobType) {
        this.workflow.jobs[name] = job;
        return this;
    }

    public build() {
        if (Object.values(this.workflow.jobs).length === 0) throw new Error('At least one job is required');
        return this.workflow;
    }
}