import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error("Failed to fetch event:", error);
      }
    };

      fetchEvent();
    }, [id]);

  if (!event) {
      return loading ? <div>Loading...</div> : <div>Event not found</div>;
  }

  return (
      <div className="max-w-4xl mx-auto p-6">

              {loading && <div>Loading event details...</div>}
              {event && (

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={event.eventImage} alt={event.eventName} className="w-1/2 object-cover" />
                    <div className="p-4">
                      <h1 className="text-2xl font-semibold text-brand-primary mb-2">{event.eventName}</h1>
                      <p className="text-gray-600 text-sm mb-1">{event.eventDate}</p>
                      <p className="text-gray-500 text-sm mb-2">{event.eventVenue}</p>

                      <a href={event.eventFormUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-primary text-white py-2 px-4 rounded-md hover:bg-brand-secondary mt-4">
                        Register For This Event
                      </a>

                      <p className="text-gray-700">{event.eventDescription}</p>
                    </div>
                  </div>
              )}

          </div>
      );
};
export default EventDetail;