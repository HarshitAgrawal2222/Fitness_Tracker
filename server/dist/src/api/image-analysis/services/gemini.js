"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeImage = void 0;
const genai_1 = require("@google/genai");
const fs_1 = __importDefault(require("fs"));
const ai = new genai_1.GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const analyzeImage = async (filePath) => {
    try {
        const base64ImageFile = fs_1.default.readFileSync(filePath, "base64");
        const contents = [
            {
                inlineData: {
                    mimeType: "image/jpeg",
                    data: base64ImageFile,
                },
            },
            {
                text: "Extract the food name and estimated calories from this image in a JSON object.",
            },
        ];
        const config = {
            responseMimeType: "application/json",
            responseJsonSchema: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    calories: { type: "number" },
                },
                required: ["name", "calories"],
            },
        };
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents,
            config,
        });
        const text = response.text;
        if (!text) {
            throw new Error("Gemini returned an empty response.");
        }
        return JSON.parse(text);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
exports.analyzeImage = analyzeImage;
