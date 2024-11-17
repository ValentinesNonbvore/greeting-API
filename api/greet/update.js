import { greetings } from '../../greetings';
const express = require('express');
const router = express.Router();

router.put('/:timeOfDay', (req, res) => {
    const { timeOfDay } = req.params;
    const { message } = req.body;

    if (greetings[timeOfDay]) {
        if (message) {
            greetings[timeOfDay] = message;
            res.json({ message: "Greeting updated successfully!" });
        } else {
            res.status(400).json({ error: "Message is required to update the greeting." });
        }
    } else {
        res.status(404).json({ error: "Greeting not found" });
    }
});

module.exports = router;
