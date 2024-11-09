const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mut23001:<db_password>@cluster0.xu725.mongodb.net/Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

const sampleData = {
  professionalName: "John Doe",
  base64Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA", // Sample base64 image
  primaryDescription: "This is a brief professional summary.",
  workDescription1: "Experience in software engineering.",
  workDescription2: "Specialized in backend and frontend technologies.",
  linkTitleText: "Learn more about John",
  linkedInLink: {
    text: "LinkedIn Profile",
    link: "https://linkedin.com/in/johndoe",
  },
  githubLink: {
    text: "GitHub Profile",
    link: "https://github.com/johndoe",
  },
  nameLink: {
    firstName: "John",
    url: "https://example.com",
  },
};

async function seedDatabase() {
  await Professional.deleteMany({});  // Clears existing data
  await Professional.create(sampleData);  // Adds sample data
  console.log("Sample data inserted into MongoDB");
  mongoose.connection.close();
}

seedDatabase().catch(err => console.error("Data insertion error:", err));
