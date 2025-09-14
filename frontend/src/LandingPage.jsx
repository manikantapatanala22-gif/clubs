// src/pages/LandingPage.jsx
// Landing page based on your Figma screenshot

import React, { useRef } from "react";
import {ReactRouter} from 'react';
import Navbar from "./components/Navbar"
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

export default function LandingPage() {
  const ongoingScrollRef = useRef(null);
  const upcomingScrollRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const ongoingEvents = [
    { id: 1, title: "Club Event 1", description: "Ongoing Club Event 1", image: "/assets/event1.jpg" },
    { id: 2, title: "Club Event 2", description: "Ongoing Club Event 2", image: "/assets/event2.jpg" },
    { id: 3, title: "Club Event 3", description: "Ongoing Club Event 3", image: "/assets/event2.jpg" },
    { id: 4, title: "Club Event 4", description: "Ongoing Club Event 4", image: "/assets/event2.jpg" },
    { id: 5, title: "Club Event 5", description: "Ongoing Club Event 5", image: "/assets/event1.jpg" },
    { id: 6, title: "Club Event 6", description: "Ongoing Club Event 6", image: "/assets/event2.jpg" },
    { id: 7, title: "Club Event 7", description: "Ongoing Club Event 7", image: "/assets/event2.jpg" },
    { id: 8, title: "Club Event 8", description: "Ongoing Club Event 8", image: "/assets/event2.jpg" },
  ];

  const upcomingEvents = [
    { id: 9, title: "Club Event 9", description: "Ongoing Club Event 9", image: "/assets/event3.jpg" },
    { id: 10, title: "Club Event 10", description: "Ongoing Club Event 10", image: "/assets/event4.jpg" },
    { id: 11, title: "Club Event 11", description: "Ongoing Club Event 11", image: "/assets/event2.jpg" },
    { id: 12, title: "Club Event 12", description: "Ongoing Club Event 12", image: "/assets/event2.jpg" },
    { id: 13, title: "Club Event 13", description: "Ongoing Club Event 13", image: "/assets/event3.jpg" },
    { id: 14, title: "Club Event 14", description: "Ongoing Club Event 14", image: "/assets/event4.jpg" },
    { id: 15, title: "Club Event 15", description: "Ongoing Club Event 15", image: "/assets/event2.jpg" },
    { id: 16, title: "Club Event 16", description: "Ongoing Club Event 16", image: "/assets/event2.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Navbar />
      <main className="flex-1 max-w-screen px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-white">
            Register now with our hassle free website! Just a click and you’re directed to your desired club event!
          </p>
        </div>

        {/* Ongoing Events */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Ongoing Events</h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(ongoingScrollRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
              aria-label="Scroll left ongoing events"
            >
              &#8592;
            </button>
            <div
              ref={ongoingScrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {ongoingEvents.map(event => (
                <div key={event.id} className="flex-shrink-0 w-80">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollRight(ongoingScrollRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
              aria-label="Scroll right ongoing events"
            >
              &#8594;
            </button>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(upcomingScrollRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
              aria-label="Scroll left upcoming events"
            >
              &#8592;
            </button>
            <div
              ref={upcomingScrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex-shrink-0 w-80">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollRight(upcomingScrollRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
              aria-label="Scroll right upcoming events"
            >
              &#8594;
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}