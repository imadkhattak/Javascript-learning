/*

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

*/

/*

const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Part 1\n');
    res.write('Part 2\n');
    res.end('Done!');

});

server.listen(3000, () => {
    console.log('Server is running on localhost: http://localhost:3000');
});

*/

