var express = require('express');
var router = express.Router();
const passport = require('passport');
const sessionController = require('../controllers/sessions');
const isLoggedIn = require('../config/auth');

router.post('/campaigns/:id/sessions', sessionController.create);

module.exports = router;