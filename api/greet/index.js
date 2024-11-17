import { greetings } from '../../greetings';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(greetings);
});

module.exports = router;