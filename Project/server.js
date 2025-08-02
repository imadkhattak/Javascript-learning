const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 

const users = [];



app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, password });
    return res.status(200).json({ message: 'Signup successful!' });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
