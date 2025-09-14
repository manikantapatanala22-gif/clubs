// src/pages/LandingPage.jsx
// Landing page based on your Figma screenshot

import React from "react";
import {ReactRouter} from 'react';
import Navbar from "./components/Navbar"
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

export default function LandingPage() {
  const ongoingEvents = [
    { id: 1, title: "Club Event 1", description: "Body text for whatever you’d like to add more to the subheading.", image: "/assets/event1.jpg" },
    { id: 2, title: "Club Event 2", description: "Body text for whatever you’d like to expand on the main point.", image: "/assets/event2.jpg" },
  ];

  const upcomingEvents = [
    { id: 3, title: "Club Event 3", description: "Body text for whatever you’d like to add more to the subheading.", image: "/assets/event3.jpg" },
    { id: 4, title: "Club Event 4", description: "Body text for whatever you’d like to expand on the main point.", image: "/assets/event4.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-white">
            Register now with our hassle free website! Just a click and you’re directed to your desired club event!
          </p>
        </div>

        {/* Ongoing Events */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Ongoing Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingEvents.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}