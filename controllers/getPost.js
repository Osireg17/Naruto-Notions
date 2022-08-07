const BlogPost = require('../models/blogposts');
//add a comment section to the end of every post


module.exports = async (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    const blogPosts = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogPosts: blogPosts,
    })
}