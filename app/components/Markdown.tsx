import React from "react";
import markdownit from "markdown-it";
import DOMPurify from 'dompurify';
import { motion } from "framer-motion"

type Props = {
    text: string;
};

const md = markdownit({
});

const Markdown = ({ text }: Props) => {
    const htmlcontent = md.render(text);
    const sanitized = DOMPurify.sanitize(htmlcontent);
    return <div

        className="border p-10 m-4 rounded-lg overflow-hidden text-white" dangerouslySetInnerHTML={{ __html: sanitized }}></div>;
};

export default Markdown;