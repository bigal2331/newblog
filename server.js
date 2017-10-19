var express = require('express');
var app = express();
import { StaticRouter as Router } from 'react-router-dom';
import React from 'react';
import { renderToString } from 'react-dom/server';

app.use(express.static(__dirname + "/dist")); //serves the index.html



app.listen(3000,function(){
    console.log('listening at port',3000)
});