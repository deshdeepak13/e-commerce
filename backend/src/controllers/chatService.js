import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "REMOVED", 
    engine:'gpt-3.5',// Use your OpenAI API Key from environment variables  REMOVED

});

// const openai = new OpenAIApi(configuration);

export const getChatGPTResponse = async (message) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Correct model name
            messages: [{ role: 'user', content: message }],
        });
        
      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error in ChatGPT API:', error.message);
      throw error;
    }
  };