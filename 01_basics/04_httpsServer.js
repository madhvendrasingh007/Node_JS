const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`;

    // Parse the URL from the incoming request
    const myUrl = url.parse(req.url);

    console.log(myUrl)

    // Write the log entry to the file asynchronously
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }

        // Switch based on the URL path
        switch (req.url) {
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Homepage');
                break;
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('About Us');
                break;
            case '/contact':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Contact Us');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Page Not Found');
        }
    });
});

myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});
