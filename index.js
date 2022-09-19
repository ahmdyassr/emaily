const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const authRouter = require('./routes/auth.routes')
const app = express()

mongoose.connect(process.env.MONGO_URI, () => {
	console.log('🔑 Connected to Database')
})

app.use(
	session({
		secret: process.env.COOKIE_SECRET,
		cookie: {
			maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
		},
		resave: false,
		saveUninitialized: true
	})
)

app.use(passport.session())

app.use('/auth', authRouter)

app.get('/api/logout', (req, res) => {
	req.logout((e) => {
		if (e) {
			return next(e)
		}

		res.send(req.user)
	})
})

app.get('/api/current_user', (req, res) => {
	res.send(req.session)
})

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`)
})