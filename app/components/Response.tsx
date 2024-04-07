"use client"
import { useUserStore } from '@/hooks/getUser';
import { useChat } from 'ai/react';
import { Bot, Send, User2 } from 'lucide-react';
import { useEffect } from 'react'; // Import useEffect hook
import Markdown from './Markdown';

export default function Response() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: 'api/genai'
    });

    const { text } = useUserStore();


    return (
        <div>
            {RenderForm()}
            {RenderMessages()}
            {text ? "YES" : "NO"}
        </div>
    );


    function RenderForm() {

        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event, {
                    data: {
                        prompt: text + input
                    }
                });
            }} className="w-full flex flex-row items-center h-full gap-2">
                <input type="text" placeholder="ask something.."
                    value={input}
                    onChange={handleInputChange}
                    className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0] placeholder:text-[#0842A099] text-right focus:placeholder-transparent"
                />
                <button className="rounded-full shadow-md border flex flex-row" type='submit'><Send className="p-3 h-10 w-10 stroke-stone-500" /></button>
            </form>
        );
    }

    function RenderMessages() {

        return (
            <>
                <div id="chatbox" className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
                    {messages.map((m, index) => {
                        return (
                            <div key={index}
                                className={`p-4 shadow-md rounded-md ml-10 relative ${m.role === "user" ? "bg-stone-300" : ""
                                    }`}
                            >
                                <Markdown text={m.content} />
                                {m.role === "user" ? (
                                    <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg" />
                                ) : (
                                    <Bot
                                        className={`absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-[#0842A0] ${isLoading && index === messages.length - 1
                                            ? "animate-bounce"
                                            : ""
                                            }`}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }



}



