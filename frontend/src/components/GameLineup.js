import React, { useEffect, useState } from 'react';
import { getGameLineup } from '../api';

const GameLineup = ({ gameId }) => {
    const [lineup, setLineup] = useState(null);

    useEffect(() => {
        getGameLineup(gameId)
            .then(response => setLineup(response.data))
            .catch(error => console.error('Ошибка при загрузке состава:', error));
    }, [gameId]);

    if (!lineup) return <p>Загрузка состава...</p>;

    return (
        <div>
            <h2>Состав команд</h2>
            <h3>Liverpool</h3>
            <ul>
                {lineup.Liverpool.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Manchester City</h3>
            <ul>
                {lineup.ManchesterCity.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default GameLineup;
