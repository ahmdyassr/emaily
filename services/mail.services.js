const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 587,
	auth: {
		user: "075f55bf5099ca",
		pass: "880f2bbb7d4f67"
	}
});

const sendMail = async ({ fromName, fromEmail, toEmails, subject, text }) => {
	try {
		const info = await transporter.sendMail({
			from: `${fromName} <${fromEmail}>`,
			to: toEmails,
			subject,
			text
		})

		console.log(`🪁 \n ${info}`)
	} catch (e) {
		console.log(e)
	}
}

module.exports = sendMail