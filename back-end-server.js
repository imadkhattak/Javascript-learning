const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Fixed this route - removed the misplaced parenthesis
app.get('/users', (req, res) => {
    res.json({
        name: 'imad',
        age: 23,
        city: 'cairo'
    });
});

app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.send('User created successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});