const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received`;
    fs.appendFile('log.txt', log + '\n', (err, data) => {
        switch(req.url) {
            case '/': res.end('Homepage');
            break;
            case '/about': res.end('About Us');
            break;
            case '/contact': res.end('Contact Us');
            break;
            default: res.end('404 Page Not Found');
        }
    }
    );
    res.end('Hello from HTTPS Server');
});

myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});