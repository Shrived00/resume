"use client"
import { useChat } from "ai/react"
import { Send } from "lucide-react";
import Comp from "./components/Comp";


export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/genai'
  });


  return (
    <main className="flex min-h-screen flex-col items-center  p-12">
      {RenderForm()}
      {RenderMessages()}
      {JSON.stringify(messages)}
    </main>
  );

  function RenderForm() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event, {
          data: {
            prompt: input
          }
        })
      }} className=" w-full flex flex-row items-center h-full gap-2">
        <input type="text" placeholder="ask somthing .."
          value={input}
          onChange={handleInputChange}
          className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0] placeholder:text-[#0842A099] text-right focus:placeholder-transparent "
        />
        <button className="rounded-full shadow-md border flex flex-row " type='submit' ><Send className="p-3 h-10 w-10 stroke-stone-500" /></button>
      </form>
    );
  }

  function RenderMessages() {

    return (
      <>
        hi
      </>
    )
  }


}


