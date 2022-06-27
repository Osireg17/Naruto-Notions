const BlogPost = require('../models/blogposts');

module.exports = async (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    const blogPosts = await BlogPost.find({})
    res.render('index', {
        blogPosts: blogPosts
    });
}