const express = require('express')
const authRouter = require('./routes/auth.routes')
const app = express()

app.use('/auth', authRouter)

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`)
})