"use client"
import React from 'react';
import pdfToText from 'react-pdftotext';

const Comp = () => {

    const [text, setText] = React.useState<string | null>(null);

    const extractText = async (event: any) => {
        try {
            const file = event.target.files[0];
            if (!file) {
                console.error("No file selected");
                return;
            }

            const text = await pdfToText(file);
            console.log(text);
            setText(text);
        } catch (error) {
            console.error("Failed to extract text from PDF", error);
        }
    };

    return (

        <div>
            <input type="file" accept="application/pdf" onChange={extractText} />
            <div>{text}</div>
        </div>
    );
};

export default Comp;
