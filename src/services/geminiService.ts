import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  throw new Error("Unable to retrieve environment variable GOOGLE_API_KEY");
}

const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const refineSearch = async (query: string) => {
  try {
    const prompt = `if required suggest a better search term for: ${query}, only adjust search term if the search term is not complete or it includes typos. if no suggestion required resend the ${query} as is.`;
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch (error) {
    console.error("Error refining search:", error);
    throw error;
  }
};
