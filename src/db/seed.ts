import mongoose from "mongoose";
import AuctionItem from "./models/auctionItem";
import seedData from "./data/seedData.json";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

export const seedDataIntoDB = async () => {
  try {
    await mongoose.connect(uri as string);
    console.log("Connected to MongoDB");

    await AuctionItem.deleteMany({});
    console.log("Cleared existing auction data");

    await AuctionItem.insertMany(seedData);
    console.log("Seed auction data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

export const deleteAllDataFromDB = async () => {
  try {
    await mongoose.connect(uri as string);
    console.log("Connected to MongoDB");

    await AuctionItem.deleteMany({});
    console.log("All auction data deleted from db");
  } catch (error) {
    console.error("Error deleting data:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};
