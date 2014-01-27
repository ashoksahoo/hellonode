var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hellonode');
var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    // yay!
});

var postSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});
var Post = mongoose.model('Post', postSchema);

exports.newPost = function (req,res) {
    res.render ('newpost');
};

exports.editPost = function (req,res) {
    res.render ('editpost',{post : req.params.Title});
};



exports.showPosts = function (req, res){

    /*db.collection('posts', function (err, collection) {
        collection.find().toArray(function (err, names) {
            res.header("Content-Type:", "application/json");
            res.send(JSON.stringify(names));
        });
    });*/
    return Post.find(function (err, posts) {
        if (!err) {
            res.render('posts');
            exports.postsContoller = posts;
        } else {
            return console.log(err);
        }
    });
};

exports.showPostsAPI = function (req, res){
    return Post.find(function (err, posts) {
        if (!err) {
            return res.send(posts);
        } else {
            return console.log(err);
        }
    });
};


exports.readPost = function (req, res) {
//    var PName = req.params.name;
//    db.collection('products', function (err, collection) {
//        collection.find({ "PName": PName }).toArray(function (err, names) {
//            res.header("Content-Type:", "application/json");
//            res.send(JSON.stringify(names));
//        }); // End Collection.find()
//    }); //End db.collection()
    res.header("Content-Type", "text");
    res.send("hello " + req.param.Title);
};



exports.createPost = function (req, res) {
        new Post({
            title   : req.param("title"),
            body   : req.param("body"),
            author   : req.param("author"),
            date : Date.now()
        }).save( function( err, post, count ){
                res.redirect( '/posts',301 );
            });

};
exports.updatePost = function (req, res) {
    res.header("Content-Type", "text");
    res.send("read functon");
};
exports.deletePost = function (req, res) {
    res.header("Content-Type", "text");
    res.send("read functon");
};

