import { greetings } from '../../greetings';
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { timeOfDay, message } = req.body;

    if (timeOfDay && message) {
        greetings[timeOfDay] = message;
        res.status(201).json({ message: "Greeting created successfully!" });
    } else {
        res.status(400).json({ error: "Invalid request. Time of day and message are required." });
    }
});

module.exports = router;
