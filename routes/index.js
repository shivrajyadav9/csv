import express from 'express';
const router = express.Router();

console.log('router added successfully')

import homeController from '../controllers/home_controller.js';

router.get('/', homeController.home);

router.get('/file/:id',homeController.file);
router.post('/upload',homeController.upload);

export default router;