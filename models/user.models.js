const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema({
	googleId: {
		type: String,
		unique: true
	},
	credits: {
		type: Number,
		default: 0
	}
})

const User = mongoose.model('user', userSchema)

module.exports = User