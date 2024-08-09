export type Shell = 'bash' | 'pwsh' | 'python' | 'sh' | 'cmd' | 'powershell';

export type Environment = string | {
    name: string;
    url?: string;
}

export type Container = {
    image: string;
    env?: Record<string, string | number | boolean>;
    ports?: number[]
    volumes?: string[];
    options?: string;
    credentials?: {
        username: string;
        password: string;
    }
}

export type Secrets = 'inherit' | Record<string, string>;