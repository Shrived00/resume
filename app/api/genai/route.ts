import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(request: Request,) {
    try {
        // Check if req.body exists and contains the expected data structure


        const requestData = await request.json();
        console.log(requestData.data);

        const prompt = "how are " + requestData.data;
        console.log(prompt)

        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            throw new Error('Google API key is not provided.');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();
        console.log({ generatedText });

        return NextResponse.json({ generatedText }); // Send the generated text as JSON
    } catch (error) {
        console.error('Error handling request:', error);
        // Set a valid HTTP status code, such as 500 for internal server error
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
