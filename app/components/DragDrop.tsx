import { useUserStore } from "@/hooks/getUser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import pdfToText from 'react-pdftotext';

const fileTypes = ["application/pdf"];

const DragDrop: React.FC = () => {
    const { isLoading, setUser, setText, setIsLoading } = useUserStore();
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();

    const dropHandler = async (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
        try {
            const files = ev.dataTransfer.files;
            if (files.length > 0) {
                const droppedFile = files[0];
                if (droppedFile && fileTypes.includes(droppedFile.type)) {
                    setFile(droppedFile);
                    const text = await pdfToText(droppedFile);
                    const res = "rate out of 100,return area of improvemnt  only in markdown format" + text;
                    setUser(true);
                    setIsLoading(true);
                    router.push('/score');
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const selectedFile = event.target.files && event.target.files[0];
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setFile(selectedFile);
                const text = await pdfToText(selectedFile);
                const res = "rate out of 100,return area of improvemnt  only in markdown format " + text;
                setText(res);
                setUser(true);
                setIsLoading(true);

                router.push('/score');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const dragOverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
    };

    return (

        <div
            id="drop_zone"
            onDrop={(ev) => dropHandler(ev)}
            onDragOver={(ev) => dragOverHandler(ev)}
            onClick={() => document.getElementById('fileInput')?.click()}
            className="border border-dashed rounded-xl  hover:bg-white/30 hover:scale-110 transition-all ease-in-out duration-200 hover:text-black cursor-pointer
                
            w-[80%] h-[100%] flex justify-center items-center text-white/80 text-lg font-semibold"
        >
            <input
                id="fileInput"
                type="file"
                accept=".pdf"
                onChange={(event) => handleFileInputChange(event)}
                style={{ display: 'none' }}
            />
            <p>Drag or click to select a PDF file.</p>
        </div >

    );
};

export default DragDrop;
