import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

// Initialize the Google Gen AI client with the API Key from environment variables.
// If the key is not defined, the SDK will fall back to reading from process.env.GEMINI_API_KEY automatically.
export const ai = new GoogleGenAI({ apiKey });
