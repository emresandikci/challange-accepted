const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let mimeTypes = {
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css"
};
const PORT = 5000;
http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    let filename;
    if (pathname === "/") {
        filename = "question-3.html";
    }
    else
        filename = path.join(process.cwd(), pathname);

    try {
        fs.accessSync(filename, fs.F_OK);
        let fileStream = fs.createReadStream(filename);
        let mimeType = mimeTypes[path.extname(filename).split(".")[1]];
        response.writeHead(200, { 'Content-Type': mimeType });
        fileStream.pipe(response);
    }
    catch (e) {
        console.log('File not exists: ' + filename);
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Not Found\n');
        response.end();
        return;
    }

    return;
}).listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));