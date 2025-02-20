import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/APL.css"; 

const APL = () => {
    const [view, setView] = useState("matches");

    // Состояния для всех данных
    const [table, setTable] = useState([]);          // Турнирная таблица
    const [matches, setMatches] = useState([]);      // Матчи
    const [users, setUsers] = useState([]);          // Пользователи
    const [user, setUser] = useState(null);          // Один пользователь
    const [teams, setTeams] = useState([]);          // Команды
    const [team, setTeam] = useState(null);          // Одна команда
    const [events, setEvents] = useState([]);        // События
    const [gameStats, setGameStats] = useState([]);  // Статистика игр
    const [gameLineup, setGameLineup] = useState([]);// Состав команды
    const [popularGames, setPopularGames] = useState([]); // Популярные игры
    const [loading, setLoading] = useState(true);    // Состояние загрузки
    const [error, setError] = useState(null);        // Ошибки

    // ID Лиги для Premier League
    const league_id = 1;

    // Настройка Base URL для axios
    axios.defaults.baseURL = 'http://localhost:8080';

    // Загрузка данных с API
    useEffect(() => {
        const fetchData = async () => {
            try {
            
                // ===== ЛИГИ =====
                const leaguesResponse = await axios.get('/leagues');
                console.log("Leagues:", leaguesResponse.data);

                const tableResponse = await axios.get(`/leagues/${league_id}/table`);
                setTable(tableResponse.data);

                const matchesResponse = await axios.get(`/leagues/${league_id}/matches`);
                setMatches(matchesResponse.data);

                // ===== ПОЛЬЗОВАТЕЛИ =====
                const usersResponse = await axios.get('/users');
                setUsers(usersResponse.data);

                const userResponse = await axios.get('/users/1');
                setUser(userResponse.data);

                // ===== КОМАНДЫ =====
                const teamsResponse = await axios.get('/teams');
                setTeams(teamsResponse.data);

                const teamResponse = await axios.get('/teams/1');
                setTeam(teamResponse.data);

                // ===== СОБЫТИЯ =====
                const eventsResponse = await axios.get('/events');
                setEvents(eventsResponse.data);

                // ===== ИГРЫ =====
                const gameStatsResponse = await axios.get('/games/1/statistics');
                setGameStats(gameStatsResponse.data);

                const gameLineupResponse = await axios.get('/games/1/lineup');
                setGameLineup(gameLineupResponse.data);

                const popularGamesResponse = await axios.get('/games/popular');
                setPopularGames(popularGamesResponse.data);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="app">
            <header className="header">
                <h1>Premier League Statistics</h1>
            </header>
            <main className="content">
                <div className="button-container">
                    <button onClick={() => setView("matches")}>Matches</button>
                    <button onClick={() => setView("players")}>Players</button>
                    <button onClick={() => setView("standings")}>Table</button>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p>Error loading data.</p>}

                {view === "matches" && (
                    <div className="matches-container">
                        <h2 className="section-title">Upcoming Matches</h2>
                        <table className="matches-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Home Team</th>
                                    <th>Away Team</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matches.map(match => (
                                    <tr key={match.id}>
                                        <td>{new Date(match.date).toLocaleDateString()}</td>
                                        <td>{match.homeTeam.name}</td>
                                        <td>{match.awayTeam.name}</td>
                                        <td>{new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
}

export default APL;


