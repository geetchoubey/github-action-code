import {resolve} from 'path';
import {existsSync, mkdirSync, NoParamCallback, writeFile, writeFileSync} from 'fs';
import type {IWorkflow} from '../types';
import {WorkflowBuilder} from './'
import {stringify} from "yaml";

export class Workflow {
    static createWorkflow(): WorkflowBuilder {
        return new WorkflowBuilder();
    }

    static saveWorkflow(workflow: IWorkflow, fileName: string, cb?: NoParamCallback) {
        const dirPath = ['.github', 'workflows'];
        if (!existsSync(resolve(...dirPath))) {
            mkdirSync(resolve(...dirPath), {recursive: true});
        }
        const data = stringify(workflow);
        const path = resolve(...dirPath, `${fileName}.yml`);
        if (cb) {
            writeFile(path, data, cb);
        } else {
            writeFileSync(path, data);
        }
    }
}