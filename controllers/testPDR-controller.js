const testPDR = require('../models/testPDR');

const handleError = (res, error) => {
    res.status(500).json({error})
}

const getTestPdrs = (req, res) => {
  testPDR
    .find() 
    .then((testPDR) => {
      res.status(200).json(testPDR)
    })
    .catch (()=> ( handleError(res, 'Could not fetch the documents')))
};

const getTestPdr = (req, res) => {
  testPDR
    .findById(req.params.id) 
    .then((doc) => {
      res.status(200).json(doc)
    })
    .catch(() => (handleError(res, 'Could not fetch the documents')))
}

const deleteTestPdr = (req, res) => {
  testPDR 
    .findByIdAndDelete(req.params.id) 
    .then((doc) => {
      res.status(200).json(doc)
    })
  .catch(() => (handleError(res, 'Could not fetch the documents')))
}

const addTestPdr = (req, res) => {
  const _testPDR = new testPDR(req.body)
  
  _testPDR
    .save()
    .then((doc) => {
      res.status(201).json(doc)
    })
    .catch((err) => (handleError(res, err)))
}

const updateTestPdr = (req, res) => {
  testPDR 
    .findByIdAndUpdate(req.params.id, req.body) 
    .then((doc) => {
      res.status(200).json(doc)
    })
    .catch(() => (handleError(res, 'Could not fetch the documents')))
}

module.exports = {
  getTestPdrs,
  getTestPdr,
  deleteTestPdr,
  addTestPdr,
  updateTestPdr
}