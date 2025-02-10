import React from "react";
import "./KPL.css"; // Подключение CSS файла

const KPL = () => {
    return (
        <div className="kpl">
            {/* Шапка страницы */}
            <header className="header">
                <h1>Kazakhstan Premier League Statistics</h1>
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
                            <td>Astana</td>
                            <td>Kairat</td>
                            <td>3-0</td>
                        </tr>
                        <tr>
                            <td>2025-01-12</td>
                            <td>Ordabasy</td>
                            <td>Shakhter Karagandy</td>
                            <td>1-1</td>
                        </tr>
                        <tr>
                            <td>2025-01-14</td>
                            <td>Kyzylzhar</td>
                            <td>Tobol</td>
                            <td>0-2</td>
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
                            <td>Abat Aimbetov</td>
                            <td>15</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Agim Ibraimi</td>
                            <td>12</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Maksat Taykenov</td>
                            <td>8</td>
                            <td>7</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default KPL;