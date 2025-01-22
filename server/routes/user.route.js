import express from 'express'
import { loginn, registerr } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/registerr').post(registerr)
router.route('/loginn').post(loginn)

export default router;