import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useUserStore } from '@/hooks/getUser';
import Loading from './Loading';
import Markdownone from './Markdown';
import { useRouter } from 'next/navigation';

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
                console.log(text)
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
        <div className='px-10 min-h-[60vh] '>

            {isLoading ? <Loading /> : <Markdownone text={text} />}
        </div>
    );
};

export default Test;
