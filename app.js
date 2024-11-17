const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const greetings = {
	morning: "Good morning!",
	afternoon: "Good afternoon!",
	evening: "Good evening!",
	night: "Good night!",
};

const apiDocumentation = {
	basePath: "/",
	steps: [
		{
			step: 1,
			method: "GET",
			path: "/",
			description: "See a welcome message and instructions on how to use the API.",
			usage: "Send a GET request to /"
		},
		{
			step: 2,
			method: "GET",
			path: "/greet",
			description: "Get a list of all greetings.",
			usage: "Send a GET request to /greet"
		},
		{
			step: 3,
			method: "GET",
			path: "/greet/:timeOfDay",
			description: "Get a specific greeting (e.g., 'morning', 'night').",
			usage: "Send a GET request to /greet/morning"
		},
		{
			step: 4,
			method: "POST",
			path: "/greet",
			description: "Create a new greeting.",
			usage: `Send a POST request to /greet with JSON body: { timeOfDay: afternoon, message: Good afternoon! }`
		},
		{
			step: 5,
			method: "PUT",
			path: "/greet/:timeOfDay",
			description: "Update an existing greeting.",
			usage: `Send a PUT request to /greet/morning with JSON body: { message: Updated Good morning! }`
		},
		{
			step: 6,
			method: "DELETE",
			path: "/greet/:timeOfDay",
			description: "Delete a specific greeting.",
			usage: "Send a DELETE request to /greet/night"
		}
	]
};

app.use(express.json());

app.get('/', (req, res) => {
	res.json(apiDocumentation);
});

app.get('/greet/:timeOfDay', (req, res) => {
	const { timeOfDay } = req.params;

	if (greetings[timeOfDay]) {
		res.json({ message: greetings[timeOfDay] });
	} else {
		res.status(404).json({ error: "Greeting not found" });
	}
});

app.get('/greet', (req, res) => {
	res.json(greetings);
});

app.post('/greet', (req, res) => {
	const { timeOfDay, message } = req.body;

	if (timeOfDay && message) {
		greetings[timeOfDay] = message;
		res.status(201).json({ message: "Greeting created successfully!" });
	} else {
		res.status(400).json({ error: "Invalid request. Time of day and message are required." });
	}
});

app.put('/greet/:timeOfDay', (req, res) => {
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

app.delete('/greet/:timeOfDay', (req, res) => {
	const { timeOfDay } = req.params;

	if (greetings[timeOfDay]) {
		delete greetings[timeOfDay];
		res.json({ message: "Greeting deleted successfully!" });
	} else {
		res.status(404).json({ error: "Greeting not found" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});