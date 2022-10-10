var db=require("mysql");
var connection=db.createConnection({
	host:"127.0.0.1",
	user:"kapsas",
	password:"kapsas",
	database:"crypbook",
});
console.log(connection);
connection.end();
