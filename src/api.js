module.exports = {
	getPatientVitals: (id) => {
		return fetch(`http://localhost:3000/patients/${id}/vitals`)
			.then(response => {
				if(response.status < 400) {
					return response.json()
				} else {
					return response.json().then((data) => Promise.reject(data))
				}
			})
	}
}
