import AuctionItem from "@/db/models/auctionItem";
import { refineSearch } from "./geminiService";

export const getAuctionItems = async (query: String, useAI: Boolean) => {
  try {
    if (!query || query.length === 0 || typeof query !== "string") {
      throw new Error("Invalid query");
    }
    let refinedQuery = query;
    if (useAI) {
      const result = await refineSearch(query);
      if (!result || result.length === 0) {
        refinedQuery = query;
      }
      refinedQuery = result.replace(/[\[\]']+/g, "").replace(/[\*\[\]\(\)\{\}]/g, "");
    }
    const regex = new RegExp(refinedQuery, "i");
    const auctionItems = await AuctionItem.find({
      $or: [{ title: regex }, { description: regex }],
    });
    return auctionItems;
  } catch (error) {
    console.error("Error fetching auction items:", error);
    throw error;
  }
};
