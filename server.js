const express = require('express');
const {connectToDb, getDb} = require('./db');  

const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
    if(!err) {
        app.listen(PORT, (err) => {
        err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
    } else {
        console.log(`DB connection error: ${err}`)
    }
});

console.log(db)

app.get('/testPDR', (req, res) => {
    const foo = [];

    db
        .collection('testsPDR')
        .find() 
        .forEach((testPDR) => foo.push(testPDR))
        .then(() => {
            res.status(200)
            .json(foo)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
});