import React, { useEffect, useState } from 'react';
import { getPopularGames } from '../api';

const PopularGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getPopularGames()
            .then(response => setGames(response.data))
            .catch(error => console.error('Ошибка при загрузке популярных игр:', error));
    }, []);

    return (
        <div>
            <h1>Популярные игры</h1>
            <ul>
                {games.map(game => (
                    <li key={game._id}>
                        {game.home_team} vs {game.away_team} — Лайки: {game.likes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularGames;
