const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

// Final route handler
app.get("/", (req, res) => {
    res.send("Final Response");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
