import type {Shell} from "./nested";

export type Step = RunStep | UsesStep;

export interface IStep {
    'continue-on-error'?: boolean;
    env?: Record<string, string | number | boolean>;
    id?: string;
    if?: string;
    name?: string;
    'timeout-minutes'?: number;
}

export interface RunStep extends IStep {
    run: string;
    shell?: Shell;
    'working-directory'?: string;
}

export interface UsesStep {
    uses: string;
    with?: Record<string, string | number | boolean> | {
        args: string;
        entrypoint: string;
    }
}