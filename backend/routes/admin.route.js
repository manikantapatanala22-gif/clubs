import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/admin.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminAuth } from '../middleware/adminAuth.middleware.js';
import upload from '../middleware/multer.js';

const router = express.Router();

// These routes require both login and admin status
router.get('/users', protect, adminAuth, getUsers);
router.post('/users', protect, adminAuth, createUser);
router.put('/users/:id', protect, adminAuth, updateUser);
router.delete('/users/:id', protect, adminAuth, deleteUser);

export default router;
