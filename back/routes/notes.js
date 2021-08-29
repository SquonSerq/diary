var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('start.db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', (req, res) => {
	let note = req.body.note
	db.run('INSERT INTO notes VALUES(?, ?)', [Date.now(), note]);
	res.send("added");
})

module.exports = router;
