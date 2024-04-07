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
            console.log(text);
            setText(text + "rate my resume");
            setUser(true);
        } catch (error) {
            console.error("Failed to extract text from PDF", error);
        }
    };

    return (

        <div>
            <input type="file" accept="application/pdf" onChange={extractText} />
        </div>
    );
};

export default Comp;
