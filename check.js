import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

  const models = await genAI.models;
  console.log(models);
}

main().catch(console.error);
