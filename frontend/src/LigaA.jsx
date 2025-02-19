import React, { useState } from "react";
import "./APL.css"; // Подключение общего CSS

const LigaA = () => {
    const [view, setView] = useState("matches"); // Состояние для переключения между вкладками

    // Реальные названия команд
    const teams = [
        "Inter", "Milan", "Napoli", "Juventus", "Roma", "Lazio",
        "Fiorentina", "Bologna", "Atalanta", "Torino",
        "Udinese", "Spezia", "Empoli", "Verona", "Sampdoria",
        "Benevento", "Genoa", "Cremonese", "Cagliari", "Sassuolo"
    ];

    return (
        <div className="app">
            <header className="header">
                <h1>Serie A Statistics</h1>
            </header>
            <main className="content">

                {/* Кнопки для смены представления */}
                <div className="button-container">
                    <button onClick={() => setView("matches")}>Matches</button>
                    <button onClick={() => setView("players")}>Players</button>
                    <button onClick={() => setView("table")}>Table</button>
                </div>

                {/* Таблица с ближайшими матчами */}
                {view === "matches" && (
                    <div className="table-container">
                        <h2>Upcoming 10 Matches</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Home Team</th>
                                <th>Away Team</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2025-02-22</td>
                                <td>{teams[0]}</td>
                                <td>{teams[1]}</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-22</td>
                                <td>{teams[2]}</td>
                                <td>{teams[3]}</td>
                            </tr>
                            <tr>
                                <td>2025-02-23</td>
                                <td>{teams[4]}</td>
                                <td>{teams[5]}</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-23</td>
                                <td>{teams[6]}</td>
                                <td>{teams[7]}</td>
                            </tr>
                            <tr>
                                <td>2025-02-24</td>
                                <td>{teams[8]}</td>
                                <td>{teams[9]}</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-24</td>
                                <td>{teams[10]}</td>
                                <td>{teams[11]}</td>
                            </tr>
                            <tr>
                                <td>2025-02-25</td>
                                <td>{teams[12]}</td>
                                <td>{teams[13]}</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-25</td>
                                <td>{teams[14]}</td>
                                <td>{teams[15]}</td>
                            </tr>
                            <tr>
                                <td>2025-02-26</td>
                                <td>{teams[16]}</td>
                                <td>{teams[17]}</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-26</td>
                                <td>{teams[18]}</td>
                                <td>{teams[19]}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Таблица с топ-10 игроками */}
                {view === "players" && (
                    <div className="table-container">
                        <h2>Top 10 Players by Goals + Assists</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Team</th>
                                <th>Goals</th>
                                <th>Assists</th>
                                <th>Goals + Assists</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Victor Osimhen</td>
                                <td>{teams[2]}</td>
                                <td>18</td>
                                <td>5</td>
                                <td>23</td>
                            </tr>
                            <tr className="row-even">
                                <td>2</td>
                                <td>Lautaro Martínez</td>
                                <td>{teams[0]}</td>
                                <td>16</td>
                                <td>7</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ciro Immobile</td>
                                <td>{teams[5]}</td>
                                <td>14</td>
                                <td>6</td>
                                <td>20</td>
                            </tr>
                            <tr className="row-even">
                                <td>4</td>
                                <td>Dusan Vlahovic</td>
                                <td>{teams[3]}</td>
                                <td>13</td>
                                <td>5</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Rafael Leao</td>
                                <td>{teams[1]}</td>
                                <td>12</td>
                                <td>5</td>
                                <td>17</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Таблица команд */}
                {view === "table" && (
                    <div className="table-container">
                        <h2>Serie A Team Table</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Drawn</th>
                                <th>Lost</th>
                                <th>Points</th>
                            </tr>
                            </thead>
                            <tbody>
                            {teams.map((team, index) => (
                                <tr key={index} className={index % 2 === 0 ? "row-even" : ""}>
                                    <td>{index + 1}</td>
                                    <td>{team}</td>
                                    <td>{Math.floor(Math.random() * 38)}</td>
                                    <td>{Math.floor(Math.random() * 20)}</td>
                                    <td>{Math.floor(Math.random() * 10)}</td>
                                    <td>{Math.floor(Math.random() * 50)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default LigaA;