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

// Get all clubs (Admin-only)
export const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new club (Admin-only)
export const createClub = async (req, res) => {
  try {
    const { name, tagline, description } = req.body;

    let imageUrl = null;
    let eventImage = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const newClub = await Club.create({
      name,
      tagline,
      description,
      imageUrl,
      eventImage,
    });

    res.status(201).json(newClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a club (Admin-only)
export const updateClub = async (req, res) => {
  try {
    const { name, tagline, description } = req.body;

    let imageUrl = undefined;
    let eventImage = undefined;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const updatedClub = await Club.findByIdAndUpdate(
      req.params.id,
      { name, tagline, description, imageUrl, eventImage },
      { new: true, runValidators: true }
    );

    if (!updatedClub) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.status(200).json(updatedClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a club (Admin-only)
export const deleteClub = async (req, res) => {
  try {
    const deletedClub = await Club.findByIdAndDelete(req.params.id);

    if (!deletedClub) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
