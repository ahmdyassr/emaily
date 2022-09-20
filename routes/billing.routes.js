const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET)
const User = require('../models/user.models')
const router = express.Router()

router
	.post('/', async (req, res) => {
		if (!req.user) {
			return res.status(401).json({ error: 'You must login!' })
		}

		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 for 5 credits',
			source: req.body.id // charge id
		})

		req.user.credits += 5
		const user = await req.user.save()

		res.json(user)
	})


module.exports = router 