const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.tixpa.mongodb.net/BlogApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const schema = mongoose.Schema;

const LoginSchema = new schema({
    userid: String,
    password: String
});

var Logindata = mongoose.model('Logindata',LoginSchema);

module.exports = Logindata;