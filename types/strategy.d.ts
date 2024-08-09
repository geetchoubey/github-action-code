export type IncludeExclude = {
    include?: Object[];
    exclude?: Object[];
}

export type Strategy = {
    matrix: Record<string, string | number | string[] | number[]> & IncludeExclude;
    'fail-fast'?: boolean;
    'max-parallel'?: number;
}