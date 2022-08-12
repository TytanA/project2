const router = require('express').Router();
const passport = require('passport');
const campaignController = require('../controllers/campaigns');
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, campaignController.new)