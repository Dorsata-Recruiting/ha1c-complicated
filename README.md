# Setup
1. Install [`npm`](https://www.npmjs.com/get-npm)
1. From this directory, run `npm install`

# Usage
1. From this directory, run `node app.js` to start the server.
1. Now you can hit the two routes, `patients` and `visits`.

# Examples
* Get all patients: `curl localhost:3000/patients`
* Get all patient visits: `curl localhost:3000/visits`
* Get a single patient's visits: `curl localhost:3000/visits/[patient_id]`

# The Client
## Background
Our client is requesting a design for an Electronic Health Record (EHR) plugin. Samples of their data can be found at the [endpoints above](#examples). Hemoglobin A1c (ha1c in the sample API) is a particularly important indicator for diabetes that the physicians want to track.

## Task
Write browser-executed JavaScript in the framework of your choice that uses the API endpoints above to, based on what you've learned by discussing the problem, display information for a particular patient that might be useful for a provider to see.

# Credit

This is forked from https://github.com/coshx/opportunities.  Thank you!
