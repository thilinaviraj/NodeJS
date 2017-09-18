//Copyrights reserved Thilinaviraj
//Import mysql libraries
var mysql = require('mysql');

//Create database connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "subscriptions" //Enter your database name
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Enter your table/Column names
  var sql = "INSERT INTO subscriptions (ID,APPLICATION_ID,SERVICE_ID,MSISDN,SUBSCRIPTIONCONFIGID,ENCRYPTED,STATUS,DATETIME) VALUES (293,3,'NULL',94773969953,1,0,'SUBSCRIBED','2017-04-10 07:56:18')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
