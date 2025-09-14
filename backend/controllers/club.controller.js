import Club from "../models/club.model.js";

const getAllClubs = async (req, res) => {
  try {
    let clubs = await Club.find();
    if (clubs.length === 0) {
      // Seed initial data if no clubs exist
      const initialClubs = [
        {
          name: 'Xpressionz Club',
          tagline: '“Where imagination meets the creativity on the stage”',
          description: `Xpressionz Club, the largest in our college, is a vibrant platform for creativity and talent. More than a club, it builds confidence, teamwork, and lasting memories.`,
          imageUrl: '/images/club1.png',
        },
        {
          name: 'VOICE',
          tagline: 'Inspiration to transformation– Lets continue the passion of making the difference',
          description: `VOICE, founded in 2001-02, nurtures student talent and entrepreneurial spirit. It hosts events like debates, case studies, JAM, and mock stock exchange.`,
          imageUrl: '/images/club2.png',
        },
        {
          name: 'Abhyas Club',
          tagline: '“A great platform to learn, lead and create innovative ideas.”',
          description: `The Abhyas Club, launched in November 2011, is a student-driven platform for showcasing talent and growth. True to its name, it helps students overcome inhibitions and learn through practice.`,
          imageUrl: '/images/club3.png',
        },
      ];
      clubs = await Club.insertMany(initialClubs);
    }
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllClubs };
