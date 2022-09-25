const http = require("http");
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server");
}
const server = http.createServer(requestListener);
server.listen(8080, "localhost", () => {
    console.log(`Server is running on http://localhost:8080`);
});