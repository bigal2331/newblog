var express = require('express');
var app = express();

console.log(__dirname + "/dist");
app.use(express.static(__dirname + "/dist")); //serves the index.html
app.listen(process.env.PORT); //listens on port 3000 -> http://localhost:3000/