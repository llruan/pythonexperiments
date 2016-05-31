var express = require('express');
var router = express.Router();
var spawn = require("child_process").spawn;
var simul;
var finallist;


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("before");
	simul = spawn('python',["testing.py"]);
	console.log("after");
	simul.stdout.on('data', function (data){
		console.log("HI PLEASE");
		console.log(data);
		res.render('index');
		});
});

module.exports = router;
