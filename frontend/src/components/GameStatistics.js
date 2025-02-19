import React, { useEffect, useState } from 'react';
import { getGameStatistics } from '../api';

const GameStatistics = ({ gameId }) => {
    const [statistics, setStatistics] = useState(null);

    useEffect(() => {
        getGameStatistics(gameId)
            .then(response => setStatistics(response.data))
            .catch(error => console.error('Ошибка при загрузке статистики:', error));
    }, [gameId]);

    if (!statistics) return <p>Загрузка статистики...</p>;

    return (
        <div>
            <h2>Статистика игры</h2>
            <p><strong>Владение мячом:</strong> {statistics.possession.Liverpool} - {statistics.possession.ManchesterCity}</p>
            <p><strong>Удары по воротам:</strong> {statistics.shots.Liverpool} - {statistics.shots.ManchesterCity}</p>
            <p><strong>Фолы:</strong> {statistics.fouls.Liverpool} - {statistics.fouls.ManchesterCity}</p>
        </div>
    );
};

export default GameStatistics;
