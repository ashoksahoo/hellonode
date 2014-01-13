var UserSchema = new Schema({
    name: STRING,
    email: STRING,
    username: STRING,
    mobile : NUMBER,
    hashed_password: STRING
});

mongoose.model('Message', UserSchema);
var User = mongoose.model('Message');