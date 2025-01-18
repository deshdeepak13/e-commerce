import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();


// Initialize OpenAI with API Key from environment variables
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });


// Function to get ChatGPT response
export const getChatGPTResponse = async (message) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Ensure the model name is correct
      messages: [{ role: 'user', content: message }],
    });

    return response.choices[0].message.content; // Extract and return the response content
  } catch (error) {
    console.error('Error in ChatGPT API:', error.message);
    throw error; // Throw the error for further handling
  }
};
