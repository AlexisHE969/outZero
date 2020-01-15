'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'alexish',
    password : '030192Esteban',
    database : 'consultorio'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;