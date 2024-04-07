"use client"
import { useChat } from "ai/react"
import { Bot, Send, User2 } from "lucide-react";
import Comp from "./components/Comp";
import Markdown from "./components/Markdown";
import { use, useState } from "react";
import { useUserStore } from "@/hooks/getUser";
import Response from "./components/Response";
import Test from "./components/Test";

export default function Home() {


  const { user } = useUserStore();

  return (
    <main className="flex min-h-screen flex-col items-center  p-12">

      <Test />

      {/* {user ? <Response /> : <Comp />} */}

    </main>
  );



}


