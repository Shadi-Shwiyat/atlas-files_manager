// Setting up routes
import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import { FilesController } from '../controllers/FilesController.js';

const router = Router();

// Get Routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);

// Post Routes
router.post('/users', UsersController.postNew);
router.post('/files', FilesController.postUpload);

module.exports = router;
