import { getAuctionItems } from "@/services/auctionServices";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const useAI = searchParams.get("useAI") === "true";

  try {
    const auctionItems = await getAuctionItems(query, useAI);
    return NextResponse.status(200).json({
      success: true,
      data: auctionItems,
      message: useAI ? "Search results using AI" : "Search results without AI",
    });
  } catch (error) {
    console.error("Error fetching auction items:", error);
    return NextResponse.status(500).json({
      success: false,
      message: "Server error occurred",
      ...(process.env.NODE_ENV === "development" && {
        error: error instanceof Error ? error.message : "Unknown error",
      }),
    });
  }
}
