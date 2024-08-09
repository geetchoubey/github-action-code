export type PermissionsActions = 'read' | 'write' | 'none';
export type PermissionsAttestations = 'read' | 'write' | 'none'
export type PermissionsChecks = 'read' | 'write' | 'none'
export type PermissionsContents = 'read' | 'write' | 'none'
export type PermissionsDeployments = 'read' | 'write' | 'none'
export type PermissionsIdToken = 'read' | 'write' | 'none'
export type PermissionsIssues = 'read' | 'write' | 'none'
export type PermissionsDiscussions = 'read' | 'write' | 'none'
export type PermissionsPackages = 'read' | 'write' | 'none'
export type PermissionsPages = 'read' | 'write' | 'none'
export type PermissionsPullRequests = 'read' | 'write' | 'none'
export type PermissionsRepositoryProjects = 'read' | 'write' | 'none'
export type PermissionsSecurityEvents = 'read' | 'write' | 'none'
export type PermissionsStatuses = 'read' | 'write' | 'none'


export type Permissions = 'read-all' | 'write-all' | {
    actions?: PermissionsActions;
    attestations?: PermissionsAttestations;
    checks?: PermissionsChecks;
    contents?: PermissionsContents;
    deployments?: PermissionsDeployments;
    'id-token'?: PermissionsIdToken;
    issues?: PermissionsIssues;
    discussions?: PermissionsDiscussions;
    packages?: PermissionsPackages;
    pages?: PermissionsPages;
    'pull-requests'?: PermissionsPullRequests;
    'repository-projects'?: PermissionsRepositoryProjects;
    'security-events'?: PermissionsSecurityEvents;
    statuses?: PermissionsStatuses;
}