
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
    text: string;
};

const Markdownone = ({ text }: Props) => {
    return (
        <div className="px-10 md:px-[10rem] ">
            <div className=' border-t-4 border-b-4 py-3 mt-3'>
                <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
            </div>
        </div>
    )
}

export default Markdownone
