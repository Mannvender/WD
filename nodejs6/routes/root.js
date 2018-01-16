const route = require('express').Router();
const Users = require('../db').Users;
const passport = require('../passport');

route.get('/login', (req, res) => {
    res.render('login')
});

route.get('/signup', (req, res) => {
    res.render('signup')
});

route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
}));

route.post('/signup', (req, res) => {
    let userInfo = Users.findOne({
        where: {
            username: req.body.username
        }
    });
    if (userInfo.username === req.body.username) {
        res.send("user already exist")
    }
    Users.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createdUser) => {
        res.redirect('/login')
    })
});


exports = module.exports = route;