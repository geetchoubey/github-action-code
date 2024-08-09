import type {Container, Defaults, Environment, Permissions, Secrets, Step, Strategy} from "./";

export type JobType = SingleJob | ReusableJob;

export interface IJob {
    concurrency?: {
        group: string;
        'cancel-in-progress'?: boolean;
    };
    if?: string;
    name?: string;
    needs?: string;
    permissions?: Permissions;
    strategy?: Strategy;
}

export interface SingleJob extends IJob {
    container?: Container;
    'continue-on-error'?: boolean | string;
    defaults?: Defaults;
    env?: Record<string, string | number | boolean>;
    environment?: Environment;
    outputs?: Record<string, string>;
    'runs-on': string | string[] | {
        group?: string;
        labels?: string;
    };
    services?: Record<string, Container>;
    steps?: Step[];
}

export interface ReusableJob extends IJob {
    uses: string;
    with?: Record<string, string | number | boolean>
    secrets?: Secrets;
}