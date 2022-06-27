const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogPostSchema = new Schema({
    author: String,
    title: String,
    body: String,
    createdAt: {
        type: Date,
        default: new Date()  //previously I was just putting Date infront of createdAt, but I didnt know that I had to use, curly braces to make and define it's type and then add new Date()
    },
    image: String
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;