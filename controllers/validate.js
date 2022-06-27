module.exports = (req, res, next) => {
    if(req.files == null || req.body.title == '' || req.body.body == '') { // if the user did not upload an image or if the title or body is empty
        res.redirect('/posts/new');
    }
    next();
}