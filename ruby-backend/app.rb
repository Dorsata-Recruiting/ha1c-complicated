require 'sinatra'
require 'sinatra/json'
require 'sinatra/reloader'

require './ehr_service'

set :port, 3000

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
	"write my logic #{params.id}"
end
