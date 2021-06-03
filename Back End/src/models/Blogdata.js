const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.tixpa.mongodb.net/BlogApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const schema = mongoose.Schema;

const BlogSchema = new schema({
    //enter the data
});

var Blogdata = mongoose.model('Blogdata',BlogSchema);

module.exports = Blogdata;