const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<html>
        <head>
          <title>Stream & Buffer</title>
        </head>
        <body>
          <form method="post" action="/process">
            <input name="messsage" />
          </form>
        </body>
      </html>
      `);
        res.end();
    } else if (req.url === '/contact') {
        res.write('This is contact directory');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);

            const parsedData = Buffer.concat(body).toString();
            console.log(parsedData);
            res.write('Thanks for submitting this large text bro!');
            res.end();
        });
        req.on('end', () => {
            console.log('Stream finished.');
        });
    } else {
        res.write('Not Found');
        res.end();
    }
});

server.listen(PORT);

console.log(`server running on port ${PORT} `);
