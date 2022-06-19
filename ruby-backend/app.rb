require 'sinatra'
require 'sinatra/json'
require 'sinatra/reloader'

require './ehr_service'

set :port, 3000

before do
	response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
	response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
	response.headers["Access-Control-Allow-Origin"] = "*"
end

get '/' do
	'Hello world'
end

get '/patients' do
	json EhrService.get_patients
end

get '/visits' do
	json EhrService.get_visits
end

get '/patients/:id/vitals' do
	patient_id = params["id"].to_i
	patient = EhrService.get_patients.detect {|patient| patient['id'] == patient_id}
	visits_for_patient = EhrService.get_visits.select { |visits| visits['patientId'] == patient_id}

	return halt 404, "Patient not found" if patient == nil

	patient['vitals'] = visits_for_patient
	json patient
end
