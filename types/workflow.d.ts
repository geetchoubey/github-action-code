import type {Defaults, JobType, On, Permissions} from './';

export interface IWorkflow {
    name?: string;
    'run-name'?: string;
    permissions?: Permissions
    env?: Record<string, string | number | boolean>;
    on?: On;
    jobs: Record<string, JobType>;
    defaults?: Defaults;
}