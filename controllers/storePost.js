const BlogPost = require('../models/blogposts');
const path = require('path');

module.exports = async (req, res) => { // req.body is the data that is sent from the form
    //console.log(req.body); // this is the data that is sent from the form
    let image = req.files.image; // this is the image that is sent from the form, added the file property to the req object
    image.mv(path.resolve(__dirname,'..', 'public/img',image.name), async (err) => {  //image.mv moves the image to the public/images folder, there was a slight error in my code i added an extra backslash, so the image wasnt showing up
        await BlogPost.create({
            ...req.body,
            image:  '/img/' + image.name
            }); // this is the data that is sent from the form
        });
    res.redirect('/');
    }



// "bcrypt": "^5.0.1",