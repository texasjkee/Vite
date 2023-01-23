const { ObjectID, ObjectId } = require('bson');
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

const handleError = (res, error) => {
    res.status(500).json({error})
}

//route
app.get('/testPDR', (req, res) => {
    const foo = [];

    db
        .collection('testPDR')
        .find() 
        .forEach((testPDR) => foo.push(testPDR))
        .then(() => {
            res.status(200).json(foo)
        })
        .catch (()=> ( handleError(res, 'Could not fetch the documents')))
});

app.get('/testPDR/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
    db
        .collection('testPDR')
        .findOne({_id: ObjectId(req.params.id)}) 
        .then((doc) => {
            res.status(200).json(doc)
        })
        .catch(() => (handleError(res, 'Could not fetch the documents')))
    } else handleError(res, 'Wrong id')
});

app.delete('/testPDR/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
    db
        .collection('testPDR')
        .findOne({_id: ObjectId(req.params.id)}) 
        .forEach((testPDR) => foo.push(testPDR))
        .then(() => {
            res.status(200).json(foo)
        })
        .catch(() => (handleError(res, 'Could not fetch the documents')))
    } else handleError(res, 'Wrong id')
});