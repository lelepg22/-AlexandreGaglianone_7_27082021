const express = require('express');
const parser = require('body-parser');
const authCtrl = require('../controller/auth');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(authCtrl.headers);
router.post('/signup', authCtrl.signup);
router.post('/login',authCtrl.login);
router.use(authCtrl.error);

module.exports = router;