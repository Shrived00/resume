import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(request: Request,) {
    try {


        const requestData = await request.json();

        const prompt = " " + requestData.data;
        console.log(prompt);


        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            throw new Error('Google API key is not provided.');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();

        return NextResponse.json({ generatedText });
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
