import OpenAI from "openai";

const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// The message input is the messages array that contains objects with role and content properties ex: [{role: "user", content: "Hello, how are you?"}]
const chatCompletion = async (messages) => {
  const response = await openaiClient.chat.completions({
    model: "gpt-4-turbo-preview",
    messages: messages,
  })
  return response.data;
};

export { chatCompletion };
