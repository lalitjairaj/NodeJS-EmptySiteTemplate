/**
 * Created by a598519 on 20-02-2017.
 */
var express = require('express');
var app= express();
var path= require('path');
 var routes = require('./api/routes');
var bodyParser=require('body-parser');
var port = process.env.PORT || 3010;
app.set('port',port);
//test
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
//todo: change this to login page
app.get('/', function(req, res){
    res.sendfile('base-page.html', { root: __dirname + "/public/views" } );
});

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
 app.use('/api',routes);

var server=app.listen(app.get('port'),function(){
    console.log("Node server running on port  " + app.get('port'));
});