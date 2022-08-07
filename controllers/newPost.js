module.exports = (req, res) => {
    if(req.session.user){
        res.render('create', {
            createPost: true,
        });
    }
    else{
        res.redirect('/auth/login');
    }
}