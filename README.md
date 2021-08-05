# Setup
1. Install [`npm`](https://www.npmjs.com/get-npm)
1. From this directory, run `npm install`

# Usage
1. Ruby - Sinatra
  1. go into `cd ruby-backend`
  1. Make sure you are running ruby version `2.6.5`
  1. run `bundle install`
  1. run `bundle exec rerun app.rb`
1. Now you can hit these routes
  1. `localhost:3000/patients`
  1. `localhost:3000/visits`
  1. `localhost:3000/patients/193`
  1. `localhost:3000/patients/193/vitals`
1. Vue app, run `npm run-script serve` to start Vue app.

# Examples
* Get all patients: `curl localhost:3000/patients`
* Get all patient visits: `curl localhost:3000/visits`
* Get a single patient's visits: `curl localhost:3000/visits/[patient_id]`
* Get all patient vitals `curl localhost:3000/vitals`
* Get all patient's vitals `curl localhost:3000/patients/:id/vitals`

# The Client
## Background
Our client is requesting a design for an Electronic Health Record (EHR) plugin. Samples of their data can be found at the [endpoints above](#examples). Hemoglobin A1c (ha1c in the sample API) is a particularly important indicator for diabetes that the physicians want to track.

## Task
Write browser-executed JavaScript in the framework of your choice that uses the API endpoints above to, based on what you've learned by discussing the problem, display information for a particular patient that might be useful for a provider to see.


# Note on Branches

We use prerelease as our trunk branch.  Most code is PR-ed against prerelease.

At the end of every sprint, we merge prerelease to staging.  That is, in essence, the release candidate.  (Forgive the naming.)  Any corrections to the release candidate get PR-ed against staging.

For hotfixes, we create a branch and PR against master.  Master is what is in our production environment.

Immedidately after a release, staging and master are identical.  If there are a number of "warm" fixes that are going in after a release, we will PR them against staging, test them as a group, and then merge to master.

# Credit

This is forked from https://github.com/coshx/opportunities.  Thank you!
