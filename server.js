const http = require('http');
require("dotenv").config();
const app = require("./app/app")
const connect = require("./db/db")

connect();

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});