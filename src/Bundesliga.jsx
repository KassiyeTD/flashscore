import React from "react";
import "./Bundesliga.css"; // Подключение CSS-стилей

const Bundesliga = () => {
    return (
        <div className="bundesliga">
            <header className="header">
                <h1>Bundesliga Statistics</h1>
            </header>

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
                            <td>Bayern Munich</td>
                            <td>Borussia Dortmund</td>
                            <td>3-2</td>
                        </tr>
                        <tr>
                            <td>2025-01-12</td>
                            <td>RB Leipzig</td>
                            <td>Eintracht Frankfurt</td>
                            <td>2-0</td>
                        </tr>
                        <tr>
                            <td>2025-01-14</td>
                            <td>SC Freiburg</td>
                            <td>Union Berlin</td>
                            <td>1-1</td>
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
                            <td>Robert Lewandowski</td>
                            <td>20</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Thomas Müller</td>
                            <td>8</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Christopher Nkunku</td>
                            <td>12</td>
                            <td>10</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Bundesliga;