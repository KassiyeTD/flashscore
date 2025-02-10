import React from "react";
import "./LaLiga.css"; // Подключение CSS-файла

const LaLiga = () => {
    return (
        <div className="laliga">
            {/* Шапка страницы */}
            <header className="header">
                <h1>La Liga Statistics</h1>
            </header>

            {/* Основной контент */}
            <main className="content">
                {/* Таблица результатов матчей */}
                <div className="table-container">
                    <h2>Match Results</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2025-01-10</td>
                            <td>Real Madrid</td>
                            <td>Barcelona</td>
                            <td>2-1</td>
                        </tr>
                        <tr>
                            <td>2025-01-12</td>
                            <td>Atletico Madrid</td>
                            <td>Sevilla</td>
                            <td>1-0</td>
                        </tr>
                        <tr>
                            <td>2025-01-14</td>
                            <td>Valencia</td>
                            <td>Real Sociedad</td>
                            <td>2-2</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Таблица статистики игроков */}
                <div className="stats-table">
                    <h2>Player Statistics</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Goals</th>
                            <th>Assists</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Karim Benzema</td>
                            <td>18</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Robert Lewandowski</td>
                            <td>15</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Antoine Griezmann</td>
                            <td>10</td>
                            <td>9</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default LaLiga;