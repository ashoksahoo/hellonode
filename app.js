
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var posts = require('./routes/posts');
var user = require('./routes/user');
var http = require('http');
var path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.index);
app.get('/posts', posts.showPosts);
app.get('/posts/new', posts.newPost);
app.get('posts/edit/:Title', posts.editPost);
app.get('/posts/:Title', posts.readPost);
app.post('/posts/:Title/:Author/:Body',posts.createPost);
app.put('/posts/:Title/:Author/:Body', posts.updatePost);
//app.delete('/posts/:Title', posts.deletePosts);
//app.get('/userlist', routes.userlist(db));



////mongodb
//db.connect('mongodb://localhost/hellonode');
//Schema = db.Schema;
//
//var Posts = new Schema({
//    title    : String,
//    author   : String,
//    body     : String,
//    updated_at : Date
//});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});