const mongoose = require("mongoose");

// MongoDB connection URL
const mongoUrl =
  "mongodb+srv://MERN:MERN%40123@gofood.mdutezk.mongodb.net/?retryWrites=true&w=majority&appName=GOFOOD";
// Function to connect to MongoDB
const MongoDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Export the function to be used elsewhere
module.exports = MongoDB;
