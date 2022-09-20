const auth = (req, res, next) => {
	if (!req.user) {
		return res.status(401).json({ error: 'You must login!' })
	}

	next()
}

module.exports = auth

