const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const authRouter = require('./routes/auth.routes')
const billingRouter = require('./routes/billing.routes')
const app = express()

mongoose.connect(process.env.MONGO_URI, () => {
	console.log('🔑 Connected to Database')
})

app.use(bodyParser.json())
app.use(
	cookieSession({
		keys: [process.env.COOKIE_SECRET],
		maxAge: 30 * 24 * 60 * 60 * 1000
	})
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter)
app.use('/api/stripe', billingRouter)

app.get('/api/logout', (req, res) => {
	req.logout((e) => {
		if (e) {
			return next(e)
		}

		res.redirect('/')
	})
})

app.get('/api/current_user', (req, res) => {
	res.send(req.user)
})

if (process.env.NODE_ENV === 'production') {

	app.use(express.static(path.resolve(__dirname, './client/dist')))
	// Express to serve production assets


	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './client/dist/index.html'))
	})
}

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`)
})