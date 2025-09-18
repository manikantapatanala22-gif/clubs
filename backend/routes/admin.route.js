import express from 'express';
import { getUsers, createUser, updateUser, deleteUser, getClubs, createClub, updateClub, deleteClub } from '../controllers/admin.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminAuth } from '../middleware/adminAuth.middleware.js';
import upload from '../middleware/multer.js';

const router = express.Router();

// These routes require both login and admin status
router.get('/users', protect, adminAuth, getUsers);
router.post('/users', protect, adminAuth, createUser);
router.put('/users/:id', protect, adminAuth, updateUser);
router.delete('/users/:id', protect, adminAuth, deleteUser);

// Club management routes
router.get('/clubs', protect, adminAuth, getClubs);
router.post('/clubs', protect, adminAuth, upload.single('imageUrl'), createClub);
router.put('/clubs/:id', protect, adminAuth, upload.single('imageUrl'), updateClub);
router.delete('/clubs/:id', protect, adminAuth, deleteClub);

export default router;
