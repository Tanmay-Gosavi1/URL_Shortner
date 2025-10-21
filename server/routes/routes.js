const express = require('express');
const { Shortner, getUrl } = require('../controllers/urlShortner.js');
const router = express.Router()

router.post('/shorten', Shortner)
router.get('/:shortCode', getUrl)

module.exports = router;