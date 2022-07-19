const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require("cors");

server.use(cors({
    origin: "http://localhost:4200"
}))
server.use(express.json());

async function connectMongo() {
    await mongoose.connect(
        process.env.MONGO_URL
    );
    console.log("Connected to mongodb");
}

const schema = mongoose.Schema({
    id: String,
    column_A: String,
    column_B: String,
    column_C: String,
    column_D: String,
    column_E: String,
    column_F: String,
});

const Sample = mongoose.model('sample', schema);



connectMongo();

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get('/data', async (req, res) => {
    const data = await Sample.find().limit(20);
    res.send(data);
});

server.post('/data', async (req, res) => {
    if(req.body.filters) {
        const filters = req.body.filters;
        const query = {};
        for (const column of Object.keys(filters)) {
            query[column] = {};
            const regex = new RegExp(filters[column], 'i'); // i for case insensitive
            query[column]['$regex'] = regex;
        }

        const data = await Sample.find(query
        ).limit(20);
        res.send(data);
    }
});

server.listen(process.env.PORT || 3000);

//