module.exports = (req, res, next) => {
    //make a logout function
    req.session.destroy(()=> {
        res.redirect('/');
    });
}