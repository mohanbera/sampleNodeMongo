const pool = require('../db/db');
const queries = require('../queries/queries');

async function getStudents() {
    const result = await pool.query(queries.getAllInfo);
    return result.rows;
}

async function getStudent(id) {
    const result = await pool.query(queries.getStudent, [id]);
    return result.rows;
}

module.exports = {
    getStudents,
    getStudent
}