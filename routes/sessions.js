var express = require('express');
var router = express.Router();
const passport = require('passport');
const sessionController = require('../controllers/sessions');
const isLoggedIn = require('../config/auth');


router.get('/sessions/:id/edit', sessionController.edit);
router.post('/campaigns/:id/sessions', sessionController.create);
router.put('/sessions/:id', sessionController.update);
router.delete('/sessions/:id', sessionController.delete);

module.exports = router;