import React, { useEffect, useState } from 'react';
import { getTeams, getTeamById } from '../api';

const Teams = () => {
    const [teams, setTeams] = useState([]);               // Хранение списка команд
    const [selectedTeam, setSelectedTeam] = useState(null);  // Выбранная команда для подробного просмотра

    // Загружаем список команд при загрузке компонента
    useEffect(() => {
        getTeams()
            .then(response => setTeams(response.data))
            .catch(error => console.error('Ошибка при загрузке команд:', error));
    }, []);

    // Функция для выбора команды и получения её подробной информации
    const selectTeam = (teamId) => {
        getTeamById(teamId)
            .then(response => setSelectedTeam(response.data))
            .catch(error => console.error('Ошибка при загрузке информации о команде:', error));
    };

    return (
        <div>
            <h1>Список команд</h1>
            <ul>
                {teams.map(team => (
                    <li key={team._id} onClick={() => selectTeam(team._id)}>
                        {team.team_name} ({team.league})
                    </li>
                ))}
            </ul>

            {selectedTeam && (
                <div>
                    <h2>Информация о команде: {selectedTeam.team_name}</h2>
                    <p><strong>Лига:</strong> {selectedTeam.league}</p>
                    <p><strong>Стадион:</strong> {selectedTeam.stadium}</p>
                    <p><strong>Тренер:</strong> {selectedTeam.coach}</p>

                    <h3>Состав:</h3>
                    <ul>
                        {selectedTeam.players.map((player, index) => (
                            <li key={index}>
                                {player.name} - {player.position}, {player.age} лет
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Teams;

