'use strict'

const e = require('express')
const { getPatients, getVisits } = require('./ehrDataService')

module.exports = app => {
	// GET - Return all Patients
	const getAllPatients = (req, res) => {
		res.send(getPatients())
	}

	// GET - Return all Visits
	const getAllVisits = (req, res) => {
		res.send(getVisits())
	}

	// GET - Return a EHR with specified ID
	const getVisitsById = function(req, res) {
		const visitsById = getVisits().filter((v) => v.id == req.params.id)
		res.send(visitsById)
	};

	const getPatientVitals = function(req, res) {
		res.send('write me!')
	}

	//Link routes and functions
	app.get('/patients', getAllPatients)
	app.get('/patients/:id/vitals', getPatientVitals)
	app.get('/visits', getAllVisits)
	app.get('/visits/:id', getVisitsById)
}
