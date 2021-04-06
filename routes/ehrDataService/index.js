const patients = require('./patients')
const visits = require('./visits')

module.exports = {
	getPatients: () => patients,
	getVisits: () => visits
}
