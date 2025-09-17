// src/pages/DashBoard.jsx
import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import PostForm from '../components/PostForm';
import EventCard from '../components/EventCard';
import OpeningCard from '../components/OpeningCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [events, setEvents] = useState([]);
    const [openings, setOpenings] = useState([]);
    const { fetchAllData } = useContext(DataContext);
    const navigate = useNavigate();

    // Retrieve the token and admin status from localStorage
    const authToken = localStorage.getItem("userToken");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    // Redirect to login if no token exists
    useEffect(() => {
        if (!authToken) {
            navigate("/for-clubs");
        }
    }, [authToken, navigate]);

    // Fetch events and openings created by the logged-in club user
    useEffect(() => {
        if (!isAdmin && authToken) {
            const fetchMyData = async () => {
                try {
                    const eventsResponse = await fetch('/api/events/my', {
                        headers: { Authorization: `Bearer ${authToken}` },
                    });
                    const eventsData = await eventsResponse.json();
                    setEvents(eventsData);

                    const openingsResponse = await fetch('/api/openings/my', {
                        headers: { Authorization: `Bearer ${authToken}` },
                    });
                    const openingsData = await openingsResponse.json();
                    setOpenings(openingsData);
                } catch (error) {
                    console.error("Error fetching club data:", error);
                }
            };
            fetchMyData();
        }
    }, [authToken, isAdmin]);

    const handleFormSubmission = async () => {
        await fetchAllData();
        setSelectedOption(null);
        // Refresh the events and openings after create/update/delete
        if (!isAdmin && authToken) {
            try {
                const eventsResponse = await fetch('/api/events/my', {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                const eventsData = await eventsResponse.json();
                setEvents(eventsData);

                const openingsResponse = await fetch('/api/openings/my', {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                const openingsData = await openingsResponse.json();
                setOpenings(openingsData);
            } catch (error) {
                console.error("Error refreshing club data:", error);
            }
        }
    };

    if (selectedOption) {
        return (
            <div className="container mx-auto p-8">
                <button
                    onClick={() => setSelectedOption(null)}
                    className="mb-4 text-brand-accent hover:underline"
                >
                    &larr; Back to Dashboard
                </button>
                <PostForm
                    type={selectedOption.type || selectedOption}
                    authToken={authToken}
                    onSuccess={handleFormSubmission}
                    item={selectedOption.item}
                />
            </div>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("isAdmin");
        navigate("/for-clubs");
    };

    return (
        <div className="container mx-auto p-8 text-center">
            <div className="flex justify-end mb-4">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
            <h1 className="text-4xl font-bold text-brand-primary mb-8">
                Club Dashboard
            </h1>
            <p className="text-brand-secondary text-lg mb-8">
                Welcome to the dashboard. From here, you can manage your events and job openings.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {/* Event Management Card for Club Members */}
                <div
                    onClick={() => setSelectedOption('event')}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
                >
                    <svg className="h-16 w-16 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-2xl font-semibold text-brand-primary">Manage Events</h3>
                </div>

                {/* Job Opening Management Card for Club Members */}
                <div
                    onClick={() => setSelectedOption('opening')}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
                >
                    <svg className="h-16 w-16 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15.714C8.454 15.714 5.184 14.73 2.5 13.255m18.5 0v1.442a3.75 3.75 0 01-3.75 3.75H6.25a3.75 3.75 0 01-3.75-3.75v-1.442m18.5 0A8.25 8.25 0 0012 5.25a8.25 8.25 0 00-9 8v.75m18 0a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75" />
                    </svg>
                    <h3 className="text-2xl font-semibold text-brand-primary">Manage Openings</h3>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-semibold mb-6 text-brand-primary">Your Events</h2>
                {events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {events.map(event => (
                            <EventCard
                                key={event._id}
                                event={event}
                                refresh={handleFormSubmission}
                                onEdit={() => setSelectedOption({ type: 'event', item: event })}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-brand-secondary">No events created yet.</p>
                )}

                <h2 className="text-3xl font-semibold mt-12 mb-6 text-brand-primary">Your Job Openings</h2>
                {openings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {openings.map(opening => (
                            <OpeningCard
                                key={opening._id}
                                opening={opening}
                                refresh={handleFormSubmission}
                                onEdit={() => setSelectedOption({ type: 'opening', item: opening })}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-brand-secondary">No job openings created yet.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;