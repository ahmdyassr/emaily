const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user.models')

passport.use(
	new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: '/auth/google/callback'
	}, async (accessToken, refreshToken, profile, done) => {

		// Check if user exists
		const user = await User.findOne({
			googleId: profile.id
		})

		if (user) {
			done(null, user)
		} else {
			const newUser = await User.create({
				googleId: profile.id
			})

			done(null, newUser)
		}
	})
)

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id)
	done(null, user)
})
