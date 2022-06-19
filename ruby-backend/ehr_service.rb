require 'json'

class EhrService
	def self.get_patients
		JSON.parse(File.read('../routes/ehrDataService/patients.json'))
	end

	def self.get_visits
		JSON.parse(File.read('../routes/ehrDataService/visits.json'))
	end
end
