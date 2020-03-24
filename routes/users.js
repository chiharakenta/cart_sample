const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../models/index').users;

router.get('/signup', function(req, res) {
  res.render('users/signup');
});

router.post('/signup', function(req, res) {
  const param = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    admin_flg: 0
  };
  users.create(param).then((user) => {
    req.login(user, function(err) {
    if (err) { return next(err); }
      return res.redirect('/products');
    });
  });
});

router.get('/signin', function(req, res, next) {
  res.render('users/signin');
});

router.post('/signin', passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/users/signin'
  }));

router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
