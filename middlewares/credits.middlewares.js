const credits = (req, res, next) => {
	if (req.user.credits < 1) {
		return res.status(403).json({ error: 'You don\'t have enough credits' })
	}

	next()
}

module.exports = credits

