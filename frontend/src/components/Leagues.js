import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        fetchLeagues();
    }, []);

    // Функция для получения данных о лигах
    const fetchLeagues = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/leagues`);
            setLeagues(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке лиг:', error);
            setError('Не удалось загрузить данные о лигах.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Топ-5 футбольных лиг</h1>
            <ul>
                {leagues.map((league) => (
                    <li key={league._id || league.name}>
                        {league.name} ({league.country})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leagues;


