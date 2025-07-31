const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        return res.end();    
    } else if (req.url === '/about') {
        res.write('About');
        return res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
