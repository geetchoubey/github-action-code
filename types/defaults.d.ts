import type {Shell} from './';

export type DefaultsRun = {
    shell: Shell;
    'working-directory'?: string;
}

export type Defaults = {
    run: DefaultsRun
}