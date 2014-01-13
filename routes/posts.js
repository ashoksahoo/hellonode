exports.readTitle = function (req, res) {
//    var PName = req.params.name;
//    db.collection('products', function (err, collection) {
//        collection.find({ "PName": PName }).toArray(function (err, names) {
//            res.header("Content-Type:", "application/json");
//            res.send(JSON.stringify(names));
//        }); // End Collection.find()
//    }); //End db.collection()
    res.header("Content-Type", "text");
    res.send("hello " + req.params.Title);


};
exports.createPost = function (req, res) {
    res.header("Content-Type", "text");
    res.send("read functon");
};
exports.updatePost = function (req, res) {
    res.header("Content-Type", "text");
    res.send("read functon");
};
exports.deletePost = function (req, res) {
    res.header("Content-Type", "text");
    res.send("read functon");
};




