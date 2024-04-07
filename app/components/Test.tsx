import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Markdown from './Markdown';
import { useUserStore } from '@/hooks/getUser';

const Test: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { text, setText } = useUserStore();
    console.log(text);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.post('/api/genai', { data: text });
                setText(response.data.generatedText);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? "Loading..." : <Markdown text={text} />}
        </div>
    );
};

export default Test;
