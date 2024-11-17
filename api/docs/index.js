export { apiDocumentation } from '../../apiDocumentation.js';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(apiDocumentation);
});

module.exports = router;
