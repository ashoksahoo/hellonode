var UserSchema = new Schema({
    name: STRING,
    email: STRING,
    username: STRING,
    mobile : NUMBER,
    hashed_password: STRING
});

var User = mongoose.model('Message', UserSchema);