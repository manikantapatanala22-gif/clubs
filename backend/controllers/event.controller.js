import NewEvent from "../models/eventregistration.model.js";

const eventsPost = async (req, res) => {
  try {
    const EventsPost = await NewEvent.create(req.body);
    if (EventsPost) res.status(200).json(EventsPost);
    // for the team, the .status is not necessary it just shows the req is successful while api testing
    else res.status(400).json({ message: "Didn't Post !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const eventsList = async (req, res) => {
  try {
    const newEventsList = await NewEvent.find();
    if (newEventsList) res.status(200).json(newEventsList);
    else res.status(400).json({ message: "No Events Listed !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const eventDeletion = async (req, res) => {
  try {
    const EventDeletion = await NewEvent.findByIdAndDelete(req.params.id);
    if (EventDeletion) res.status(200).json({ message: "Deleted Event" });
    else res.status(400).json({ message: "No Events !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const eventEdit = async (req, res) => {
  try {

    const editDetails = await NewEvent.findByIdAndUpdate(req.params.id , req.body, {
      new: true,
      runValidators: true,
    });
    if (editDetails) res.status(200).json(editDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { eventsList, eventsPost, eventEdit, eventDeletion };
