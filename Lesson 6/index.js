const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');

    ourReadStream.pipe(res);
});

server.listen(PORT);

console.log(`server running on port ${PORT} `);
