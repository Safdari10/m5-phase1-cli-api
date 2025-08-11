import { command } from "commander";
import { seedDataIntoDB, deleteAllDataFromDB } from "@/db/seed";

const program = new command();

program
  .name("Auction CLI")
  .description("A command line interface for managing auctions in mongdoDB")
  .version("1.0.0");

program
  .command("seed")
  .description("Seed the database with initial data")
  .action(async () => {
    try {
      await seedDataIntoDB();
      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Error seeding database:", error);
      process.exit(1);
    }
  });

program
  .command("delete")
  .description("Delete all data from the database")
  .action(async () => {
    try {
      await deleteAllDataFromDB();
      console.log("All data deleted successfully");
    } catch (error) {
      console.error("Error deleting data:", error);
      process.exit(1);
    }
  });
