const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/blogposts');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const newPost = require('./controllers/newPost');


const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1/blogposts', {useNewUrlParser: true}).then(() => console.log('mongoose connected')).catch(err => console.log(err));


const home = require('./controllers/home');
const getPost = require('./controllers/getPost');
const storePost = require('./controllers/storePost');
const Validate = require('./controllers/validate');
const newUser = require('./controllers/newUser');
const storeUser = require('./controllers/storeUser');

app.get('/', home)
app.get('/post/:id', getPost)
app.post('/posts/store', storePost)
app.post('/users/register',storeUser)
app.get('/posts/new',newPost)
app.use('/posts/store',Validate);
app.get('/auth/register', newUser)


















app.listen(4000, () => {
    console.log('Server is running on port 4000');
})