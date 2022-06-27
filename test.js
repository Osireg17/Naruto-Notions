const mongoose = require('mongoose');
const BlogPost = require('./models/blogposts');

mongoose.connect('mongodb://127.0.0.1/blogposts', {useNewUrlParser: true})

BlogPost.create({
    author: 'John Doe',
    title: 'My first post',
    body: 'This is my first post',
    createdAt: new Date().toDateString()
}, (err, blogPost) => {
    console.log(err, blogPost)
})

BlogPost.create({
    author: 'Osi Obomighie',
    title: 'One Piece Chapter 1053 Review',
    body: "One Piece Chapter 1053 Review \n\n" + "Last weeks one piece chapter was a rather interesting one and had a large amount of controversy on twitter, tiktok and reddit with many people complaining about the new bounties of Luffy, Kidd and Law. To be honest I do not see any issue with the bounties and they made some sense. One the bounties of Big Mom and Kaido together was about 9 billion berri (8,999,100,000 berri) so it was only right for luffy, kidd and law to have had bounties about the same as the combined bounty",
    createdAt: new Date().toDateString()
}, (err, blogPost) => {
    console.log(err, blogPost)
})