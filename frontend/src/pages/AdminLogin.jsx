// src/pages/AdminLogin.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

export default function AdminLogin() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("userToken") &&
      localStorage.getItem("isAdmin") === "true"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userError, setUserError] = useState(null);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({
    username: "",
    email: "",
    name: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      fetchUsers();
    }
  }, [loggedIn]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/login", formData);

      if (response.data.isAdmin) {
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        setLoggedIn(true);
        fetchUsers();
      } else {
        setError("Access denied. This login is for admins only.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      setUsers(response.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setUserError(null);

    try {
      await axios.post("/api/admin/users", userFormData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alert("Club account created successfully!");
      setUserFormData({ username: "", email: "", password: "", name: "" });
      fetchUsers();
    } catch (err) {
      setUserError(
        err.response?.data?.message || "Failed to create club account."
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    setLoggedIn(false);
    setUsers([]);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setEditFormData({
      username: user.username,
      email: user.email,
      name: user.name,
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/users/${editingUser._id}`, editFormData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alert("User updated successfully!");
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      alert("Failed to update user.");
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`/api/admin/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        alert("User deleted successfully!");
        fetchUsers();
      } catch (err) {
        alert("Failed to delete user.");
      }
    }
  };

  if (loggedIn) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-8"
      >
        <h1 className="text-3xl font-bold text-brand-primary mb-6">
          Admin Dashboard
        </h1>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Create Club Account</h2>
            {userError && (
              <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-md">
                {userError}
              </div>
            )}
            <form onSubmit={handleUserSubmit} className="space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={userFormData.username}
                onChange={handleUserChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={userFormData.name}
                onChange={handleUserChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={userFormData.email}
                onChange={handleUserChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={userFormData.password}
                onChange={handleUserChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary"
                >
                  Create Club Account
                </button>
                <button
                  type="button"
                  onClick={() => setUserFormData({ username: "", email: "", password: "", name: "" })}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {editingUser && (
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Edit Club Account</h2>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  value={editFormData.username}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={editFormData.name}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={editFormData.email}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary"
                  >
                    Update Account
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingUser(null)}
                    className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold mb-4">Club Accounts</h2>
            {users.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {users.map(user => (
                  <div key={user._id} className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                    <p className="text-gray-600 mb-1">Username: {user.username}</p>
                    <p className="text-gray-600 mb-4">Email: {user.email}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No club accounts created yet.</p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
      className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-brand-primary">
        Admin Login
      </h2>
      <p className="text-center text-gray-500">
        Sign in to manage clubs and create club accounts.
      </p>

      {error && (
        <div className="text-center p-3 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 sr-only"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 sr-only"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
