import React from "react";
import "./LigaA.css"; // Подключение CSS-файла

const LigaA = () => {
    return (
        <div className="seriea">
            {/* Шапка страницы */}
            <header className="header">
                <h1>Serie A Statistics</h1>
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
                            <td>Inter Milan</td>
                            <td>AC Milan</td>
                            <td>2-1</td>
                        </tr>
                        <tr>
                            <td>2025-01-12</td>
                            <td>Juventus</td>
                            <td>AS Roma</td>
                            <td>3-0</td>
                        </tr>
                        <tr>
                            <td>2025-01-14</td>
                            <td>Napoli</td>
                            <td>Fiorentina</td>
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
                            <td>Victor Osimhen</td>
                            <td>20</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Dusan Vlahovic</td>
                            <td>15</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Lautaro Martinez</td>
                            <td>12</td>
                            <td>7</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default LigaA;