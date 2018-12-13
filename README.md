# Prerequisites

1. install node.js

Go to https://nodejs.org/en/ and get the current version

2. Download and Install Visual Studio Code

# Running automated tests

1. Clone "ProductAPI---FS".

2. open "ProductAPI---FS" project using Visual Studio Code.

3. open terminal & navigate to "ProductAPI---FS" folder and execute below command to install mpm modules.

"npm install"

3. To Run automation script --

## Locally

* Assuming the selenium standalone server is already up and running.

The local build is placed in the root, `runTest.sh` and run:

```bash
./runTest.sh
```
-- This executes test cases based tags mentioned in the "runTest.sh"

The folder structure is as follows,

- config
    - default.json - Contains the static reusable inputs in json file
- features
    - step_definitions
           - productAPI_steps.js - Contains the step definition for teh corresponding featuere file
    - checkout.feature - Contains the cucumber test scenario in gerkins
- libs
    - handlers
           - productAPITest.js - Contains API test functions/methods.
- reports
    - report.js - Contains script to generate cucumber reports after test execution
- runTest.sh - Contains script to execute test scenarios based on @ tag name


