require('express-async-errors');
const express = require('express');
const app = express();
const dbController = require('../PostgreSQL/controllers/controllers');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

function logErrors (err, req, res, next) {
    // we can log this error or save it in a file
    /*console.log('The error is');
    console.error(err.stack)*/
    res.status(500).send({error: 'Internal error'});
    // passing the error to the default error handler of express
    next(err);
}


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

app.use(logErrors);

app.listen(3000, () => {
    console.log('app running on port 3000');
});

