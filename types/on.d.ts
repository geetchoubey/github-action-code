export type Events = 'branch_protection_rule' |
    'check_run' |
    'check_suite' |
    'create' |
    'delete' |
    'deployment' |
    'deployment_status' |
    'discussion' |
    'discussion_comment' |
    'fork' |
    'gollum' |
    'issue_comment' |
    'issues' |
    'label' |
    'member' |
    'milestone' |
    'page_build' |
    'project' |
    'project_card' |
    'project_column' |
    'public' |
    'pull_request' |
    'pull_request_review' |
    'pull_request_review_comment' |
    'pull_request_target' |
    'push' |
    'registry_package' |
    'release' |
    'status' |
    'watch' |
    'workflow_call' |
    'workflow_dispatch' |
    'workflow_run' |
    'repository_dispatch';

export type BranchProtectionRule = {
    branch_protection_rule: 'created' | 'edited' | 'deleted';
}
export type CheckRun = {
    check_run: 'created' | 'rerequested' | 'completed' | 'requested_action';
}

export type CheckSuite = {
    check_suite: 'completed' | 'requested' | 'rerequested';
}

export type Create = {
    create: {};
}

export type Delete = {
    delete: {};
}

export type Deployment = {
    deployment: {};
}

export type DeploymentStatus = {
    deployment_status: {};
}

export type Discussion = {
    discussion:
        | 'created'
        | 'edited'
        | 'deleted'
        | 'transferred'
        | 'pinned'
        | 'unpinned'
        | 'labeled'
        | 'unlabeled'
        | 'locked'
        | 'unlocked'
        | 'category_changed'
        | 'answered'
        | 'unanswered';
}

export type DiscussionComment = {
    discussion_comment: 'created' | 'edited' | 'deleted';
}

export type Fork = {
    fork: {};
}

export type Gollum = {
    gollum: {};
}

export type IssueComment = {
    issue_comment: 'created' | 'edited' | 'deleted';
}

export type Issues = {
    issues:
        | 'opened'
        | 'edited'
        | 'deleted'
        | 'transferred'
        | 'pinned'
        | 'unpinned'
        | 'closed'
        | 'reopened'
        | 'assigned'
        | 'unassigned'
        | 'labeled'
        | 'unlabeled'
        | 'locked'
        | 'unlocked'
        | 'milestoned'
        | 'demilestoned';
}

export type Label = {
    label: 'created' | 'edited' | 'deleted';
}

export type Member = {
    member: 'added' | 'edited' | 'deleted';
}

export type MergeGroup = {
    merge_group: 'checks_requested';
}

export type Milestone = {
    milestone: 'created' | 'closed' | 'opened' | 'edited' | 'deleted';
}

// export type PageBuild = {
//     page_build: never; // Event has no activity types
// }

export type Project = {
    project:
        | 'created'
        | 'updated'
        | 'closed'
        | 'reopened'
        | 'edited'
        | 'deleted';
}

export type ProjectCard = {
    project_card:
        | 'created'
        | 'moved'
        | 'converted'
        | 'edited'
        | 'deleted';
}

export type ProjectColumn = {
    project_column:
        | 'created'
        | 'updated'
        | 'moved'
        | 'deleted';
}

// export type Public = {
//     public: never; // Event has no activity types
// }

export type PullRequest = {
    pull_request:
        | 'assigned'
        | 'unassigned'
        | 'labeled'
        | 'unlabeled'
        | 'opened'
        | 'edited'
        | 'closed'
        | 'reopened'
        | 'synchronize'
        | 'converted_to_draft'
        | 'ready_for_review'
        | 'locked'
        | 'unlocked'
        | 'review_requested'
        | 'review_request_removed'
        | 'auto_merge_enabled'
        | 'auto_merge_disabled'
        | {
        branches: string[]
    } | {
        'branches-ignore': string[];
    } | {
        paths: string[]
    } | {
        'paths-ignore': string[];
    };
}

export type PullRequestReview = {
    pull_request_review:
        | 'submitted'
        | 'edited'
        | 'dismissed';
}

export type PullRequestReviewComment = {
    pull_request_review_comment:
        | 'created'
        | 'edited'
        | 'deleted';
}

export type PullRequestTarget = {
    pull_request_target:
        | 'assigned'
        | 'unassigned'
        | 'labeled'
        | 'unlabeled'
        | 'opened'
        | 'edited'
        | 'closed'
        | 'reopened'
        | 'synchronize'
        | 'converted_to_draft'
        | 'ready_for_review'
        | 'locked'
        | 'unlocked'
        | 'review_requested'
        | 'review_request_removed'
        | 'auto_merge_enabled'
        | 'auto_merge_disabled'
        | {
        branches: string[]
    } | {
        'branches-ignore': string[];
    } | {
        paths: string[]
    } | {
        'paths-ignore': string[];
    };
}

export type Push = {
    push?: {
        branches?: string[];
        paths?: string[];
        tags?: string[];
        'branches-ignore'?: string[];
    }
}

export type RegistryPackage = {
    registry_package: 'published' | 'updated';
}

export type Release = {
    release:
        | 'published'
        | 'unpublished'
        | 'created'
        | 'edited'
        | 'deleted'
        | 'prereleased'
        | 'released';
}

// export type Status = {
//     status: never; // No specific types are defined
// }
//
// export type Watch = {
//     watch: never; // No specific types are defined
// }

export type WorkflowCall = {
    workflow_call?: {
        inputs?: {
            [inputId: string]: {
                description?: string;
                deprecationMessage?: string;
                required?: boolean;
                type: 'boolean' | 'number' | 'string';
                default?: boolean | number | string;
            }
        };
        secrets?: {
            [secretId: string]: {
                description?: string;
                required: boolean;
            }
        }
    }
}

export type WorkflowDispatch = {
    workflow_dispatch: {
        inputs: {
            [inputId: string]: {
                description: string;
                deprecationMessage?: string;
                required: boolean;
                type: 'string' | 'choice' | 'boolean' | 'number' | 'environment';
                default?: string | boolean | number;
                options?: string[];
            }
        }
    }
}

export type WorkflowRun = {
    workflow_run: {
        workflows: string[];
        types?: ('requested' | 'completed')[];
    }
}

// export type RepositoryDispatch = {
//     repository_dispatch: {}
// }

export type Schedule = {
    schedule: {
        cron: string;
    }[]
}

export type On =
    | Events | Events[]
    | BranchProtectionRule
    | CheckRun
    | CheckSuite
    | Create
    | Delete
    | Deployment
    | DeploymentStatus
    | Discussion
    | DiscussionComment
    | Fork
    | Gollum
    | IssueComment
    | Issues
    | Label
    | Member
    | MergeGroup
    | Milestone
    // | PageBuild
    | Project
    | ProjectCard
    | ProjectColumn
    // | Public
    | PullRequest
    | PullRequestReview
    | PullRequestReviewComment
    | PullRequestTarget
    | Push
    | RegistryPackage
    | Release
    // | Status
    // | Watch
    | WorkflowCall
    | WorkflowDispatch
    | WorkflowRun
    // | RepositoryDispatch
    | Schedule;