const express = require('express')
const auth = require('../middlewares/auth.middlewares')
const credits = require('../middlewares/credits.middlewares')
const Survey = require('../models/survery.models')
const sendMail = require('../services/mail.services')
const router = express.Router()

router
	.post('/', auth, credits, async (req, res) => {
		const { title, subject, body, recipients } = req.body

		try {
			const survey = await Survey.create({
				title,
				subject,
				body,
				recipients: recipients.split(',').map(email => ({ email })),
				_user: req.user.id,
				dateSent: Date.now()
			})

			// Send the email
			sendMail({
				fromName: 'Emaily',
				fromEmail: 'hello@emaily.com',
				toEmails: recipients,
				subject: title,
				text: body
			})

			req.user.credits -= 1
			const user = await req.user.save()

			res.status(201).json(user)
		} catch (e) {
			res.status(422).send(e)
		}
	})

module.exports = router

