import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useUserStore } from '@/hooks/getUser';
import Loading from './Loading';
import { useRouter } from 'next/navigation';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const Test: React.FC = () => {
    const { user, text, setText, isLoading, setIsLoading } = useUserStore();
    const router = useRouter();
    useEffect(() => {
        if (!user) {
            router.push('/')
        }
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.post('/api/genai', { data: text });

                setText(response.data.generatedText);

                setIsLoading(false);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (


        <div className='px-10 md:px-[10rem] min-h-[60vh]'>

            {isLoading ? <Loading /> : <Markdown remarkPlugins={[remarkGfm]}>{text.toString()}</Markdown>}
        </div>
    );
};

export default Test;
