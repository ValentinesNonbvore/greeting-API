import { greetings } from '../../greetings';
const express = require('express');
const router = express.Router();

router.delete('/:timeOfDay', (req, res) => {
    const { timeOfDay } = req.params;

    if (greetings[timeOfDay]) {
        delete greetings[timeOfDay];
        res.json({ message: "Greeting deleted successfully!" });
    } else {
        res.status(404).json({ error: "Greeting not found" });
    }
});

module.exports = router;
