const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;

// MongoDB connection
mongoose.connect('mongodb+srv://mut23001:<db_password>@cluster0.xu725.mongodb.net/Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define schema and model
const professionalSchema = new mongoose.Schema({
  professionalName: String,
  base64Image: String,
  primaryDescription: String,
  workDescription1: String,
  workDescription2: String,
  linkTitleText: String,
  linkedInLink: {
    text: String,
    link: String,
  },
  githubLink: {
    text: String,
    link: String,
  },
  nameLink: {
    firstName: String,
    url: String,
  },
});

const Professional = mongoose.model('Professional', professionalSchema);

// Endpoint to get professional data
app.get('/professional', async (req, res) => {
  try {
    const data = await Professional.findOne();  // Fetches one document
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching professional data");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
