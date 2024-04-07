import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Test: React.FC = () => {
    const [text, setText] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const mytext = "tarins in india";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.post('/api/genai', { data: mytext }); // 
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
            {loading ? "Loading..." : (text ? text : "No data")}
        </div>
    );
};

export default Test;
