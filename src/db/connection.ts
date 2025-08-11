import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (!URI) {
    throw new Error("Unable to retrieve environment variable MONGODB_URI");
  }
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export const disconnectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    console.log("No connection to MongoDB");
    return;
  }
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
    throw error;
  }
};
