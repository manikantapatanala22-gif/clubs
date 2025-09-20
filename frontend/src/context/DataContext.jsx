// src/context/DataContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { apiService } from "../services/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [eventsRes, openingsRes] = await Promise.all([
        apiService.events.getAll(),
        apiService.openings.getAll(),
      ]);
      setEvents(eventsRes.data);
      setOpenings(openingsRes.data);
    } catch (err) {
      setError("Failed to fetch data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // The value that will be provided to all components
  const value = { events, openings, loading, error, fetchAllData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
