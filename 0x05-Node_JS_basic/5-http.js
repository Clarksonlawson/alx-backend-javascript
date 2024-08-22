const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        countStudents(process.argv[2])
            .then(() => {
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 200;
                res.end();
            })
            .catch((err) => {
                res.statusCode = 500;
                res.end(err.message);
            });
    }
});

app.listen(1245);

module.exports = app;
