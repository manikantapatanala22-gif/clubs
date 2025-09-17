import Club from '../models/club.model.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { cloudinary } from '../config/cloudinary.js';



// Get all club user accounts (Admin-only)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false }).select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new club user account (Admin-only)
export const createUser = async (req, res) => {
  try {
    const { username, email, password, name } = req.body;

    if (!username || !email || !password || !name) {
      return res.status(400).json({ message: "Please enter all required fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const newUser = await User.create({ username, email, password, name, isAdmin: false });

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      name: newUser.name,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a club user account (Admin-only)
export const updateUser = async (req, res) => {
  try {
    const { username, email, name } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, name },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a club user account (Admin-only)
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
