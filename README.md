# Setup
1. We're set up to use node lts/erbium (12), though most versions should be fine.
1. Install [`npm`](https://www.npmjs.com/get-npm) if not already installed.
1. From this directory, run `npm install`

# Usage
1. Ruby - Sinatra
  1. go into `cd ruby-backend`
  1. Make sure you are running ruby version `2.6.5`
  1. In case it isn't installed, `gem install bundler:2.1.4`
  1. run `bundle install`
  1. run `bundle exec rerun app.rb`
1. Now you can hit these routes
  1. [`localhost:3000/patients`](http://localhost:3000/patients)
  1. [`localhost:3000/visits`](http://localhost:3000/visits)
  1. [`localhost:3000/patients/193/vitals`](http://localhost:3000/patients/193/vitals)

1. Vue app, run `npm run-script serve` to start Vue app.

# Examples
* Get all patients: `curl localhost:3000/patients`
* Get all patient visits: `curl localhost:3000/visits`
* Get a single patient's visits: `curl localhost:3000/visits/[patient_id]`
* Get all patient vitals `curl localhost:3000/vitals`
* Get all patient's vitals `curl localhost:3000/patients/:id/vitals`

# The Client
## Background
Our client is requesting a design for an Electronic Health Record (EHR) plugin. Samples of the data from the EHR can be found at the [endpoints above](#examples). Hemoglobin A1c (ha1c in the sample API) is a particularly important indicator for diabetes that the physicians want to track.

## Task
The big picture goal is to write browser-executed JavaScript in the framework of your choice (though we have provided a nice starting point in Vue for you that you are encouraged to use) that uses the API endpoints above.  It should, based on what you've learned by discussing the problem, display information for a particular patient that might be useful for a provider to see.

The first thing you should do is to get the backend working. The data is entirely from the EHR Service. Your goal is to write the necessary improvements to the backend to get the data to the front end. Bonus: present the data in the front-end in a useful format.

## Hint

There are multiple patients available. The EHR service has the vitals attached to the visits for each of these patients. For this exercise, every visit has a set of vital measurements. You can consider "visits" and "vitals" synonymous.

Patient 193 is one of our favorites.

## Hint the Second

Feel free to look at the Vue app to see what it expects.

## Hint the Third

Google is a thing. We all use it. All good. Ask us questions. This is an open book exam.

# Credit

This is forked from https://github.com/coshx/opportunities.  Thank you!
