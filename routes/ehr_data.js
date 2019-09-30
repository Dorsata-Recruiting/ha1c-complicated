module.exports = function(app) {
    let patients = [
        {
            "id": 293,
            "firstName": "Derek",
            "lastName": "Leonard",
            "dob": 19920317
        },
        {
            "id": 18,
            "firstName": "Candice",
            "lastName": "Reilly",
            "dob": 19830210
        },
        {
            "id": 375,
            "firstName": "Noreen",
            "lastName": "Dunbar",
            "dob": 19760802
        },
        {
            "id": 193,
            "firstName": "Cecil",
            "lastName": "Richards",
            "dob": 19561011
        }
    ];

    let visits = [
        {
            "id": 293,
            "date": 20001014,
            "height": 58,
            "weight": 122,
            "ha1c": 4.82,
            "bloodPressureSystolic": 128,
            "bloodPressureDiastolic": 60
        },
        {
            "id": 293,
            "date": 20010611,
            "height": 60,
            "weight": 128,
            "ha1c": 4.4,
            "bloodPressureSystolic": 129,
            "bloodPressureDiastolic": 55
        },
        {
            "id": 293,
            "date": 20020415,
            "height": 62,
            "weight": 135,
            "ha1c": 4.63,
            "bloodPressureSystolic": 122,
            "bloodPressureDiastolic": 50
        },
        {
            "id": 293,
            "date": 20041128,
            "height": 64,
            "weight": 140,
            "ha1c": 4.77,
            "bloodPressureSystolic": 124,
            "bloodPressureDiastolic": 58
        },
        {
            "id": 293,
            "date": 20051014,
            "height": 66,
            "weight": 144,
            "ha1c": 4.92,
            "bloodPressureSystolic": 110,
            "bloodPressureDiastolic": 55
        },
        {
            "id": 293,
            "date": 20061110,
            "height": 67.4,
            "weight": 146,
            "ha1c": 4.23,
            "bloodPressureSystolic": 115,
            "bloodPressureDiastolic": 62
        },
        {
            "id": 293,
            "date": 20080914,
            "height": 67,
            "weight": 148,
            "ha1c": 4.1,
            "bloodPressureSystolic": 120,
            "bloodPressureDiastolic": 63
        },
        {
            "id": 293,
            "date": 20100204,
            "height": 67.5,
            "weight": 152,
            "ha1c": 4.05,
            "bloodPressureSystolic": 124,
            "bloodPressureDiastolic": 66
        },
        {
            "id": 293,
            "date": 20110115,
            "height": 68,
            "weight": 149,
            "ha1c": 4.8,
            "bloodPressureSystolic": 128,
            "bloodPressureDiastolic": 62
        },
        {
            "id": 293,
            "date": 20120403,
            "height": 67,
            "weight": 148,
            "ha1c": 4.28,
            "bloodPressureSystolic": 135,
            "bloodPressureDiastolic": 60
        },
        {
            "id": 293,
            "date": 20121002,
            "height": 67.3,
            "weight": 149,
            "ha1c": 4.27,
            "bloodPressureSystolic": 125,
            "bloodPressureDiastolic": 63
        },
        {
            "id": 293,
            "date": 20140115,
            "height": 67,
            "weight": 150,
            "ha1c": 4.2,
            "bloodPressureSystolic": 119,
            "bloodPressureDiastolic": 67
        },
        {
            "id": 293,
            "date": 20150628,
            "height": 67,
            "weight": 151,
            "ha1c": 5,
            "bloodPressureSystolic": 128,
            "bloodPressureDiastolic": 68
        },
        {
            "id": 18,
            "date": 20141015,
            "height": 68,
            "weight": 176,
            "ha1c": 5.6,
            "bloodPressureSystolic": 132,
            "bloodPressureDiastolic": 67
        },
        {
            "id": 18,
            "date": 20150112,
            "height": 68.5,
            "weight": 172,
            "ha1c": 5.2,
            "bloodPressureSystolic": 137,
            "bloodPressureDiastolic": 65
        },
        {
            "id": 18,
            "date": 20151104,
            "height": 68.2,
            "weight": 177,
            "ha1c": 5.7,
            "bloodPressureSystolic": 138,
            "bloodPressureDiastolic": 67
        },
        {
            "id": 18,
            "date": 20161014,
            "height": 68.3,
            "weight": 174,
            "ha1c": 5.8,
            "bloodPressureSystolic": 140,
            "bloodPressureDiastolic": 65
        },
        {
            "id": 18,
            "date": 20170412,
            "height": 68.2,
            "weight": 175,
            "ha1c": 5.7,
            "bloodPressureSystolic": 133,
            "bloodPressureDiastolic": 62
        },
        {
            "id": 375,
            "date": 20161117,
            "height": 71,
            "weight": 158,
            "ha1c": 4.8,
            "bloodPressureSystolic": 120,
            "bloodPressureDiastolic": 58
        },
        {
            "id": 375,
            "date": 20171012,
            "height": "null",
            "weight": "null",
            "ha1c": "null",
            "bloodPressureSystolic": 119,
            "bloodPressureDiastolic": 57
        },
        {
            "id": 193,
            "date": 20121015,
            "height": 73,
            "weight": 214,
            "ha1c": 5.9,
            "bloodPressureSystolic": 139,
            "bloodPressureDiastolic": 66
        },
        {
            "id": 193,
            "date": 20130604,
            "height": 73.2,
            "weight": 210,
            "ha1c": 6.2,
            "bloodPressureSystolic": 142,
            "bloodPressureDiastolic": 68
        },
        {
            "id": 193,
            "date": 20140326,
            "height": 73,
            "weight": 211,
            "ha1c": 6.8,
            "bloodPressureSystolic": 145,
            "bloodPressureDiastolic": 69
        },
        {
            "id": 193,
            "date": 20150210,
            "height": 72.8,
            "weight": 214,
            "ha1c": 6.9,
            "bloodPressureSystolic": 144,
            "bloodPressureDiastolic": 70
        },
        {
            "id": 193,
            "date": 20151011,
            "height": 72,
            "weight": 210,
            "ha1c": 7,
            "bloodPressureSystolic": 152,
            "bloodPressureDiastolic": 66
        },
        {
            "id": 193,
            "date": 20161110,
            "height": 72,
            "weight": 218,
            "ha1c": 7.2,
            "bloodPressureSystolic": 136,
            "bloodPressureDiastolic": 62
        },
        {
            "id": 193,
            "date": 20170304,
            "height": 73,
            "weight": 219,
            "ha1c": 7.1,
            "bloodPressureSystolic": 134,
            "bloodPressureDiastolic": 63
        },
        {
            "id": 193,
            "date": 20170406,
            "height": 73,
            "weight": 219,
            "ha1c": 7.2,
            "bloodPressureSystolic": 135,
            "bloodPressureDiastolic": 60
        }
    ];

    //GET - Return all Patients
    getAllPatients = function(req, res) {
        res.send(JSON.stringify(patients));
    };

    //GET - Return all Visits
    getAllVisits = function(req, res) {
        res.send(JSON.stringify(visits));
    };

    //GET - Return a EHR with specified ID
    getVisitsById = function(req, res) {
        let visitsById = visits.map((v => v)).filter((v) => v.id == req.params.id);
        res.send(JSON.stringify(visitsById));
    };


    //Link routes and functions
    app.get('/patients', getAllPatients);
    app.get('/visits', getAllVisits);
    app.get('/visits/:id', getVisitsById);

};
