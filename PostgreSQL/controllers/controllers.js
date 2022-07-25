

const pool = require('../db/db');
const queries = require('../queries/queries');

function getStudents() {
    return new Promise((resolve, reject) => {
        pool.query(queries.getAllInfo, (error, result) => {
            if(error) reject(error);
            return resolve(result.rows);
        });
    });
}

function getStudent(id) {
    return new Promise((resolve, reject) => {
        pool.query(queries.getStudent,[id], (error, result) => {
            if(error) reject(error);
            resolve(result.rows);
        });
    });
}

module.exports = {
    getStudents,
    getStudent
}