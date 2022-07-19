// establish the mysql connection
const mysql = require("mysql");

// this is configuration for mySql Database
const dbConfiguration = {
    user: 'root',
    password: 'pass',
    database: 'emails_db'
};

// creating the connection
const database = mysql.createConnection(dbConfiguration);

/* if we don't call this method then
  also it will explicitly connect if we do any query on the database
 */
database.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + database.threadId);
});

module.exports = database;