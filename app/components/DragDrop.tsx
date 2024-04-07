import { useUserStore } from "@/hooks/getUser";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import pdfToText from 'react-pdftotext';


const fileTypes = ["PDF"];

function DragDrop() {
    const { user, setUser, text, setText } = useUserStore();
    const [file, setFile] = useState(null);
    const handleChange = async (file) => {
        setFile(file);
        const text = await pdfToText(file);
        const res = text + "rate my resume and give score out of 10 donot rewrite the resume only score and output of 5 line and in points like bullet points";
        setText(res);
        setUser(true);

    };
    return (
        <div className=" flex justify-center items-center">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        </div>
    );
}

export default DragDrop;