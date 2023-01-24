const express = require('express');
const mongoose = require('mongoose')
const testPDR = require('./models/testPDR');
const testPdrRoutes = require('./routes/testPDR-routes');

const PORT = 3000;
const URL = 'mongodb://0.0.0.0:27017/testPDRbox';

const app = express();
app.use(express.json());
app.use(testPdrRoutes);

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

