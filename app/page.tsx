"use client"
import { useUserStore } from "@/hooks/getUser";
import DragDrop from "./components/DragDrop";
import Test from "./components/Test";

export default function Home() {


  const { user } = useUserStore();

  return (
    <main className="flex justify-center items-center  min-h-screen bg-black">
      {user ? <Test /> : <DragDrop />}
    </main>
  );



}


