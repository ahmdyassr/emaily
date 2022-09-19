const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema({
	googleId: {
		type: String,
		unique: true
	},
})

const User = mongoose.model('user', userSchema)

module.exports = User