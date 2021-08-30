var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/start.db');

db.serialize(function() {
  // db.run("CREATE TABLE IF NOT EXISTS notes (date TEXT, note_text TEXT)");

	db.run('INSERT INTO notes VALUES(?, ?)', [Date.now(), '2'], (err) => {
		if(err) {
			console.log(err);
		}
	});

	// db.run("DROP TABLE notes")

});

db.close();