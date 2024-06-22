const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const { send } = require('./starknet');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/starknet', async (req, res) => {
    const data = req.body;

    if (!data) {
      return res.status(400).send({ error: 'No data provided' });
    }

    try {
        const tx = await transfer(data);
        res.status(200).send({ tx });
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(3001);
