import express from 'express';
// import router from 'router';

import getPrivateRoute from '../controllers/private.js';
import protect from '../middleware/auth.js';

// const express = require('express');
var router = express.Router();
// const { getPrivateRoute } = require('../controllers/private');
// const { protect } = require('../middleware/auth');

router.route('/').get(protect, getPrivateRoute);

export default router;
