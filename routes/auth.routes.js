const express = require('express')
const passport = require('passport')
require('../services/passport.services.js')
const router = express.Router()

router.get('/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}))

router.get(
	'/google/callback',
	passport.authenticate('google'),
	(req, res) => {
		res.redirect('/surveys')
	})

module.exports = router

