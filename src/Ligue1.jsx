import React from "react";
import "./Ligue1.css"; // Подключение CSS-файла с вашими стилями

const Ligue1 = () => {
    return (
        <div className="ligue1">
            {/* Шапка страницы */}
            <header className="header">
                <h1>Ligue 1 Statistics</h1>
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
                            <td>Paris Saint-Germain</td>
                            <td>Marseille</td>
                            <td>3-0</td>
                        </tr>
                        <tr>
                            <td>2025-01-12</td>
                            <td>Lyon</td>
                            <td>Monaco</td>
                            <td>1-2</td>
                        </tr>
                        <tr>
                            <td>2025-01-14</td>
                            <td>Lille</td>
                            <td>Nantes</td>
                            <td>0-0</td>
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
                            <td>Kylian Mbappé</td>
                            <td>22</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Neymar Jr</td>
                            <td>13</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Alexandre Lacazette</td>
                            <td>14</td>
                            <td>5</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Ligue1;