const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoDb = 'mongodb+srv://username:password@cluster0.znmhe6l.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDb,{useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"mongo connection error"));

const User = mongoose.model("User", new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
}));

const app = express();
app.set('views',__dirname);
app.set('view engine','ejs');

app.use(session({secret: "cats", resave: false, saveUninitialized: true}));
passport.use( new LocalStrategy(async(username,password,done)=>{
    try{
        const user = await User.findOne({
            username: username
        })
        if(!user){
            return done(null,false,{message: 'Incorrect username'})
            }
        const result = await bcrypt.compare(password,user.password);
        if(result) {    
            return done(null,user)
            }
        else{
            return done(null,false,{message: 'Incorrect password'})
            }        
    } catch(err){
        return done(err)
    }
}));
passport.serializeUser(function(user,done){
    done(null,user.id)
});
passport.deserializeUser(async function(id,done){
    try{
        const user = await User.findById(id);
        done(null,user);
    } catch(err){
        done(err)
    }
})
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended: false}));
app.get('/', (req,res) => {res.render('index',{user: req.user})});
app.listen(3000, () => console.log('listening on 3000'));

app.get('/sign-up',(req,res) => {res.render('sign-up')})
app.post('/sign-up', async (req,res,next)=>{
    try {
        const hashed = await bcrypt.hash(req.body.password,10)     
        const user = new User({
                    username: req.body.username,
                    password: hashed
                });
        const result = await user.save(); 
        res.redirect('/');

    }catch(err){
        return next(err)
    }
});
app.post('/log-in',  passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/'
}))
app.get('/logout', (req,res,next)=>{
    req.logout(function(err){
        if(err){
            return next(err)
        }
        res.redirect('/')
    });
});