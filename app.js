var express  = require("express"),
    cors     = require("cors"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app);

app.configure(function () {
    app.use(cors());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.get('/', function(req, res) {
    res.send("It works!");
});

routes = require('./routes/ehr_data')(app);

server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
