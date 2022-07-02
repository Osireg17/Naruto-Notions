module.exports = (req, res) => {
    if(req.session.user){
        res.render('create');
    }
    else{
        res.redirect('/auth/login');
    }
}