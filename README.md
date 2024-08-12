# github-action-code

Creating Github Actions has never been easier. Here is a simple, strongly typed package to create your own `.github/workflows/<action>.yaml` file.

### Installation
```shell
npm install github-action-code
```
### Define a workflow
```js
import {Workflow} from 'github-action-code'; // TS
// const {Workflow} = require('github-action-code'); // JS

const wfBuilder = Workflow.createWorkflow();

wfBuilder
  .setName('my-service')
  .addOn({
    push: {
      brances: ['main']
    }
  })
  .addJob('build', {
    "runs-on": 'ubuntu-latest',
    steps: [{
      run: 'SOME_ENV=${{ secrets.MY_SECRET }} npm run build'
    }]
  });

// Build the workflow
const workflow = wfBuilder.build();

Workflow.saveWorkflow(workflow, 'my-workflow', /* callback */); // Do not add the extension .yml/.yaml
```
### Sample output from .github/actions/my-workflow.yml file
```yaml
jobs:
  build-job:
    runs-on: ubuntu-latest
    steps:
      - run: SOME_ENV=${{ secrets.MY_SECRET }} npm run build
on:
  push:
    branches:
      - main
```

