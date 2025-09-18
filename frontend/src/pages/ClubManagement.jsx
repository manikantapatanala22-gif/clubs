// src/pages/ClubManagement.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ClubManagement() {
  const [clubs, setClubs] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    imageUrl: null,
    eventImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingClubId, setEditingClubId] = useState(null);

  const authToken = localStorage.getItem("userToken");

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const response = await axios.get("/api/clubs");
      setClubs(response.data);
    } catch (err) {
      setError("Failed to fetch clubs");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "imageUrl") {
      setFormData({ ...formData, imageUrl: e.target.files[0] });
    } else if (e.target.name === "eventImage") {
      setFormData({ ...formData, eventImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("tagline", formData.tagline);
      formDataToSend.append("description", formData.description);
      if (formData.imageUrl)
        formDataToSend.append("imageUrl", formData.imageUrl);
      if (formData.eventImage)
        formDataToSend.append("eventImage", formData.eventImage);

      if (editingClubId) {
        await axios.put(`/api/admin/clubs/${editingClubId}`, formDataToSend, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axios.post("/api/admin/clubs", formDataToSend, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
      }

      setFormData({
        name: "",
        tagline: "",
        description: "",
        imageUrl: null,
      });
      setEditingClubId(null);
      fetchClubs();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save club");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (club) => {
    setFormData({
      name: club.name,
      tagline: club.tagline,
      description: club.description,
      imageUrl: null,
    });
    setEditingClubId(club._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this club?")) return;

    try {
      await axios.delete(`/api/admin/clubs/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      fetchClubs();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete club");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-brand-primary mb-6">
        Manage Clubs
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Tagline</label>
          <input
            type="text"
            name="tagline"
            required
            value={formData.tagline}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Image</label>
          <input
            type="file"
            name="imageUrl"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-primary text-white py-3 px-6 rounded-md hover:bg-brand-secondary"
        >
          {loading
            ? editingClubId
              ? "Updating..."
              : "Creating..."
            : editingClubId
            ? "Update Club"
            : "Create Club"}
        </button>
        {editingClubId && (
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: "",
                tagline: "",
                description: "",
                imageUrl: null,
              });
              setEditingClubId(null);
              setError(null);
            }}
            className="ml-4 bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="space-y-4">
        {clubs.map((club) => (
          <div
            key={club._id}
            className="p-4 border rounded-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{club.name}</h2>
              <p className="text-sm text-gray-600">{club.tagline}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(club)}
                className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(club._id)}
                className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
