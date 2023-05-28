const path = require("path");
const express = require("express");
const ping = require('ping');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const IpAddresses = ['107.108.209.204', '107.108.209.205', '107.108.209.206'];

// const host = 'keltatech.in';

// ping.sys.probe(host, (isAlive) => {
//   const status = isAlive ? 'alive' : 'dead';
//   console.log(`${host} is ${status}`);
// });

app.get("/getStatuses", (req, res) => {
    var obj = {};
    IpAddresses.forEach(ip => {
        
    });
});

app.listen(PORT, "localhost", () => {
    console.log(`Server Listening on ${PORT}`);
});