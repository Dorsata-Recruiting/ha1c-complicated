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
	"write my logic #{params[:id]}"
end
