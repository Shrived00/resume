"use client"
import Comp from "./components/Comp";
import { useUserStore } from "@/hooks/getUser";
import Response from "./components/Response";
import Test from "./components/Test";

export default function Home() {


  const { user } = useUserStore();

  return (
    <main className=" p-12">


      {user ? <Test /> : <Comp />}

    </main>
  );



}


