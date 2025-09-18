import NewEvent from "../models/eventregistration.model.js";
import { cloudinary } from "../config/cloudinary.js";

// Lists all events (Public)
export const eventsList = async (req, res) => {
  try {
    const newEventsList = await NewEvent.find();
    if (newEventsList) res.status(200).json(newEventsList);
    else res.status(400).json({ message: "No Events Listed !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Posts a new event (Protected - Club Member)
export const eventsPost = async (req, res) => {
  try {
    const { eventName, eventDate, eventVenue, eventDescription, eventFormUrl } =
      req.body;
    const { _id } = req.user; // Get user ID from the protected middleware

    let imageUrl = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const newEvent = await NewEvent.create({
      eventName,
      eventDate,
      eventVenue,
      eventDescription,
      eventFormUrl,
      eventImage: imageUrl,
      createdBy: _id, // Link to the creator
    });

    if (newEvent) res.status(200).json(newEvent);
    else res.status(400).json({ message: "Didn't Post !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletes an event (Protected - Club Member)
export const eventDeletion = async (req, res) => {
  try {
    const event = await NewEvent.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the logged-in user is the creator
    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ message: "Not authorized to delete this event" });
    }

    await event.deleteOne();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get events created by the logged-in user (Protected - Club Member)
export const myEvents = async (req, res) => {
  try {
    const events = await NewEvent.find({ createdBy: req.user._id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edits an event (Protected - Club Member)
export const eventEdit = async (req, res) => {
  try {
    const event = await NewEvent.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the logged-in user is the creator
    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ message: "Not authorized to edit this event" });
    }

    const editDetails = await NewEvent.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!editDetails) return res.status(400).json({ message: "Edit Failed!" });
    res.status(200).json(editDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
