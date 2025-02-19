import React, { useState } from "react";
import Confetti from "react-confetti"; // Импорт анимации салюта
import "./LigaChamp.css"; // Подключение стилей

const LigaChamp = () => {
    const [results, setResults] = useState({});
    const [winner, setWinner] = useState(""); // Состояние для хранения победителя
    const [showConfetti, setShowConfetti] = useState(false); // Управление салютом
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

    // Функция проведения матча
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

    // Асинхронная функция для проведения раунда с задержкой
    const playRound = async (currentTeams, roundName) => {
        const nextRoundTeams = [];
        const roundResults = [];

        for (let i = 0; i < currentTeams.length; i += 2) {
            const match = playMatch(currentTeams[i], currentTeams[i + 1]);
            roundResults.push(match);
            nextRoundTeams.push(match.winner);

            // Добавляем результат матча с задержкой
            await new Promise((resolve) => {
                setTimeout(() => {
                    setResults((prevResults) => ({
                        ...prevResults,
                        [roundName]: [...(prevResults[roundName] || []), match],
                    }));
                    resolve();
                }, 2000); // Задержка 2 секунды
            });
        }

        // Если это финал, определяем победителя и запускаем салют
        if (roundName === "Финал") {
            setTimeout(() => {
                const finalWinner = nextRoundTeams[0]; // Победитель — единственная команда, оставшаяся после финала
                setWinner(finalWinner); // Устанавливаем победителя
                setShowConfetti(true); // Показываем салют
            }, 2000); // Салют запускаем после последнего матча
        }

        return nextRoundTeams;
    };

    // Асинхронная функция для проведения всего турнира
    const startTournament = async () => {
        setShowConfetti(false); // Скрываем салют
        setWinner(""); // Сбрасываем победителя
        let currentTeams = [...teams];
        for (const round of rounds) {
            currentTeams = await playRound(currentTeams, round);
        }
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
            {showConfetti && <Confetti />} {/* Салют */}
            {winner && ( // Отображение победителя после завершения турнира
                <div className="winner-overlay">
                    <h1>Победитель: {winner}</h1>
                </div>
            )}
            <div className="footer">© 2025 Виртуальная Лига Чемпионов. Все права защищены.</div>
        </div>
    );
};

export default LigaChamp;