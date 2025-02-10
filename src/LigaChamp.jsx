import React, { useState } from "react";
import "./LigaChamp.css";

const LigaChamp = () => {
    const [results, setResults] = useState({});
    const [teams] = useState([
        "Реал Мадрид",
        "Манчестер Сити",
        "Бавария",
        "Барселона",
        "Ливерпуль",
        "Челси",
        "Интер",
        "Милан",
        "ПСЖ",
        "Атлетико",
        "Ювентус",
        "Боруссия Дортмунд",
        "Тоттенхэм",
        "Лейпциг",
        "Наполи",
        "Бенфика",
    ]);
    const rounds = ["1/8 финала", "1/4 финала", "1/2 финала", "Финал"];

    // Функция для проведения матча
    const playMatch = (team1, team2) => {
        let score1 = Math.floor(Math.random() * 4);
        let score2 = Math.floor(Math.random() * 4);
        return {
            team1,
            score1,
            team2,
            score2,
            winner: score1 >= score2 ? team1 : team2,
        };
    };

    // Проведение раунда
    const playRound = (currentTeams, roundName) => {
        const nextRoundTeams = [];
        const roundResults = [];

        for (let i = 0; i < currentTeams.length; i += 2) {
            let match = playMatch(currentTeams[i], currentTeams[i + 1]);
            roundResults.push(match);
            nextRoundTeams.push(match.winner);
        }

        setResults((prevResults) => ({
            ...prevResults,
            [roundName]: roundResults,
        }));

        return nextRoundTeams;
    };

    // Проведение всего турнира
    const startTournament = () => {
        let currentTeams = [...teams];
        rounds.forEach((round) => {
            currentTeams = playRound(currentTeams, round);
        });
    };

    return (
        <div className="champions-league">
            <div className="header">
                <h1>Виртуальная Лига Чемпионов</h1>
                <button onClick={startTournament}>Начать турнир</button>
            </div>
            <div className="bracket">
                {Object.entries(results).map(([round, matches]) => (
                    <div className="round" key={round}>
                        <h2>{round}</h2>
                        {matches.map((match, index) => (
                            <div className="match" key={index}>
                                {match.team1} {match.score1} - {match.score2} {match.team2}{" "}
                                | Победитель: {match.winner}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="footer">© 2025 Виртуальная Лига Чемпионов. Все права защищены.</div>
        </div>
    );
};

export default LigaChamp;