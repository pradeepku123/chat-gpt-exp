// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [],
  temperature: 0.5,
  max_tokens: 256,
});
console.log(response);
