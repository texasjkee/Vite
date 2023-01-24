const express = require('express');
const router = express.Router(); 

const {
    getTestPdrs,
    getTestPdr,
    deleteTestPdr,
    addTestPdr,
    updateTestPdr
} = require('../controllers/testPDR-controller');

router.get('/testPDRs', getTestPdrs);
router.get('/testPDRs/:id', getTestPdr); 
router.delete('/testPDRs/:id', deleteTestPdr);
router.post('/testPDRs', addTestPdr);
router.patch('/testPDRs/:id', updateTestPdr); 

module.exports = router;