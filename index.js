const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/blogposts');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const newPost = require('./controllers/newPost');
const session = require('express-session');
const flash = require('connect-flash');

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

mongoose.connect('mongodb+srv://Osi:Obomighie@cluster0.xjzyyvo.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => console.log('mongoose connected')).catch(err => console.log(err));


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

app.use(flash());

app.get('/', home)
app.get('/post/:id', getPost)
app.post('/posts/store', storePost)
app.get('/posts/new',Middleware,newPost)
app.use('/posts/store',Validate);
app.get('/auth/register', RedirectLogin,newUser)
app.post('/users/register',RedirectLogin ,storeUser)
app.get('/auth/login', RedirectLogin,login)
app.post('/users/login', RedirectLogin,loginUser)
app.get('/auth/logout', logout)













let port = process.env.PORT || 3000;





app.listen(port, ()=>{
    console.log('App listening...')
    })
    