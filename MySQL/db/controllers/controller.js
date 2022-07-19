const database = require("../config/config");
const queries = require("../queries/queries");

function getData() {
    database.query(queries.getAllInfo, (error, result) => {
        console.log(result);
    });
}

function getCount() {
    database.query(queries.getTotalCount ,(error, result) => {
        console.log(result);
    });
}

module.exports = {
    getData,
    getCount
}
