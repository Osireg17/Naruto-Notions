module.exports = (req, res, next) => {
    if(req.session.user){
        return res.redirect('/');
    }
    next();
}

//an was coming up in the terminal because I hade module.export instead of module.exports