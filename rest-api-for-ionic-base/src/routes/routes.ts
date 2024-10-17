import express from 'express';
import UserValidation from '../middleware/validation/UserValidation';
import authController from '../controller/authController';
const router = express.Router();

router.post('/user/register', UserValidation.registerValidation, authController.register);
router.post('/user/login', authController.login);

export default router;
