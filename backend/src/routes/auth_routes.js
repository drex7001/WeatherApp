import express from 'express';

// Controllers
import userController from '../controllers/user_controller.js';

// const express = require('express');
const auth = express.Router();

auth.route('/register').post(userController.register);

auth.route('/login').post(userController.login);

// module.exports = auth;
export default auth;
