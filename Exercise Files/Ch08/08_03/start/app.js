var express = require("express");
var cors = require('cors');
var app = express();

var hikeTerms = [
	{
		term: 'Rip',
		defined: 'To move at a high rate of speed'
	},
	{
		term: 'Huck',
		defined: 'To throw your body off of something, usually a nature feature like a cliff'
	},
	{
		term: 'Repell',
		defined: 'To go downwards, usually from a mountain or a cliff'
	}
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get('/dictionary-api', function(req, res){
	res.json(hikeTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;