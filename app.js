const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import the routes
const greetRoutes = require('./api/greet');
const docsRoutes = require('./api/docs');

// Mount the routes
app.use('/greet', greetRoutes);
app.use('/', docsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
