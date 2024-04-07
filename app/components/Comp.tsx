"use client"
import { useUserStore } from '@/hooks/getUser';
import React from 'react';
import pdfToText from 'react-pdftotext';

const Comp = () => {


    const { user, setUser, text, setText } = useUserStore();
    const extractText = async (event: any) => {
        try {
            const file = event.target.files[0];
            if (!file) {
                console.error("No file selected");
                return;
            }

            const text = await pdfToText(file);
            const res = text + "rate my resume and give score out of 10 donot rewrite the resume only score and output of 5 line";
            console.log(res);
            setText(res);
            setUser(true);
        } catch (error) {
            console.error("Failed to extract text from PDF", error);
        }
    };

    return (

        <div className='flex justify-center items-center border h-full w-full'>
            <input type="file" accept="application/pdf" onChange={extractText} />
        </div>
    );
};

export default Comp;
