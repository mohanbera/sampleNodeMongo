const express = require('express');
const app = express();
const dbController = require('../PostgreSQL/controllers/controllers');


app.get('/students/:id', async (req, res) => {
    /*const result = await dbController.getStudent(+req.params.id);
    console.log(req.params.id);
    res.status(200).json(result);*/

    console.log(req.params.id);
    const id = parseInt(req.params.id);
    const result = await dbController.getStudent(id);

    res.send(result);
});

app.get('/students', async (req, res) => {
    const result = await dbController.getStudents();
    console.log(JSON.stringify(result));
    res.status(200).json(result);
});

app.listen(3000, () => {
    console.log('app running on port 3000');
});