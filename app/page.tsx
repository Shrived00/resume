"use client"
import { useUserStore } from "@/hooks/getUser";
import DragDrop from "./components/DragDrop";
import { Button } from "@/components/ui/button";
import Loading from './components/Loading'
import useLoginModal from "@/hooks/useLoginModal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Unlock the Potential of Your Resume with AI-Powered Feedbacks.
`

export default function Home() {

  const { isLoading } = useUserStore();
  const loginModal = useLoginModal();
  const onClickHandler = async () => {
    loginModal.onOpen()
  }


  return (
    <>
      {isLoading ? <Loading /> : (
        <main className=" flex flex-col px-10 md:px-[10rem]  mt-[60px] ">

          <div className="text-white/80 text-sm ">Score my resume</div>

          <div className="xs:flex-col  md:flex mb-10 my-3">
            <div className="basis-1/2">
              <div className="">
                <TextGenerateEffect words={words} />
              </div>
            </div>

            <div className="basis-1/2">
              <div className="text-white/80 text-xl">Unlock the power of AI to enhance your resume with Resume Score. Our platform merges AI technology with resume crafting expertise to optimize your resume for success.

              </div>

              <Button className="inline-block my-4 px-3 text-center   py-2 rounded-full bg-[#1398aa] hover:bg-[#138493] hover:scale-105 " onClick={onClickHandler}>Start for free</Button>


            </div>
          </div>
          <div className="  flex justify-center   w-[100%] h-[20rem] mb-[6rem]  mt-10"> <DragDrop /></div>



        </main>

      )
      }

    </>
  );



}


