import { greetings } from '../../greetings';
const express = require('express');
const router = express.Router();

router.get('/:timeOfDay', (req, res) => {
    const { timeOfDay } = req.params;
    if (greetings[timeOfDay]) {
        res.json({ message: greetings[timeOfDay] });
    } else {
        res.status(404).json({ error: "Greeting not found" });
    }
});

module.exports = router;