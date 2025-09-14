import User from "../models/user.model.js";

const getAdmins = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByUsername = async (req, res) => {
  try {
    const usersbyname = await User.findOne({ username: req.params.username });
    res.status(201).json(usersbyname);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editByUsername = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) res.status(401).json({ message: "No User Found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteByUsername = async (req, res) => {
  try {
    await User.findOneAndDelete({
      username: req.params.username,
    });
    res.status(201).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewAdmin = async (req, res) => {
  try {
    const adminData = req.body;
    const newUser = await User.create(adminData);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getAdmins,
  getByUsername,
  editByUsername,
  deleteByUsername,
  createNewAdmin,
};
