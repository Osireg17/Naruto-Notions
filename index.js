const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/blogposts');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const newPost = require('./controllers/newPost');
const session = require('express-session');

;


const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.set('view engine', 'ejs');
app.use(session({
    secret: 'BatMan Child',
    resave: false,
    saveUninitialized: true,
}));

mongoose.connect('mongodb://127.0.0.1/blogposts', {useNewUrlParser: true}).then(() => console.log('mongoose connected')).catch(err => console.log(err));


const home = require('./controllers/home');
const getPost = require('./controllers/getPost');
const storePost = require('./controllers/storePost');
const Validate = require('./controllers/validate');
const newUser = require('./controllers/newUser');
const storeUser = require('./controllers/storeUser');
const login = require('./controllers/login');
const loginUser = require('./controllers/loginUser');
const Middleware = require('./middleware/authMiddleware');
const RedirectLogin = require('./middleware/RedirectMiddleware');
const logout = require('./controllers/logout');


global.loggedIn = null;

app.use('*', (req, res, next) => {
    loggedIn = req.session.user;
    next();
})

app.get('/', home)
app.get('/post/:id', getPost)
app.post('/posts/store',Middleware, storePost)
app.get('/posts/new',Middleware,newPost)
app.use('/posts/store',Validate);
app.get('/auth/register', RedirectLogin,newUser)
app.post('/users/register',RedirectLogin ,storeUser)
app.get('/auth/login', RedirectLogin,login)
app.post('/users/login', RedirectLogin,loginUser)
app.get('/auth/logout', logout)

















app.listen(4000, () => {
    console.log('Server is running on port 4000');
})