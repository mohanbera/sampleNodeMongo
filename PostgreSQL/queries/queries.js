const getStudent = 'SELECT * FROM sample_table WHERE id = $1';
const getAllInfo = 'SELECT * FROM sample_table';

module.exports = {
    getAllInfo,
    getStudent
}