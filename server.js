const express = require('express');
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const testPDR = require('./models/testPDR');
const { findByIdAndDelete } = require('./models/testPDR');
       
const PORT = 3000;
const URL = 'mongodb://0.0.0.0:27017/testPDRbox';

const app = express();
app.use(express.json());
mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

const handleError = (res, error) => {
    res.status(500).json({error})
}

//route
app.get('/testPDRs', (req, res) => {
    testPDR
        .find() 
        .then((testPDR) => {
            res.status(200).json(testPDR)
        })
        .catch (()=> ( handleError(res, 'Could not fetch the documents')))
});

app.get('/testPDRs/:id', (req, res) => {
    testPDR
        .findById(req.params.id) 
        .then((doc) => {
            res.status(200).json(doc)
        })
        .catch(() => (handleError(res, 'Could not fetch the documents')))
});

app.delete('/testPDRs/:id', (req, res) => {
        testPDR 
            .findByIdAndDelete(req.params.id) 
            .then((doc) => {
                res.status(200).json(doc)
            })
        .catch(() => (handleError(res, 'Could not fetch the documents')))
});

app.post('/testPDRs', (req, res) => {
        const _testPDR = new testPDR(req.body)
        
        _testPDR
            .save()
            .then((doc) => {
                res.status(201).json(doc)
            })
            .catch((err) => (handleError(res, err)))
})

app.patch('/testPDRs/:id', (req, res) => {
        testPDR 
        .findByIdAndUpdate(req.params.id, req.body) 
        .then((doc) => {
            res.status(200).json(doc)
        })
        .catch(() => (handleError(res, 'Could not fetch the documents')))
});