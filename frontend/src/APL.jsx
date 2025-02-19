import React, { useState } from "react";
import "./APL.css"; // Подключение CSS файла

const APL = () => {
    const [view, setView] = useState("matches"); // Состояние для отображаемого раздела

    return (
        <div className="app">
            <header className="header">
                <h1>Premier League Statistics</h1>
            </header>
            <main className="content">
                {/* Кнопки управления */}
                <div className="button-container">
                    <button onClick={() => setView("matches")}>Matches</button>
                    <button onClick={() => setView("players")}>Players</button>
                    <button onClick={() => setView("table")}>Table</button>
                </div>

                {/* Таблица матчей */}
                {view === "matches" && (
                    <div className="table-container">
                        <h2>Upcoming Matches</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Home Team</th>
                                <th>Away Team</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2025-01-20</td>
                                <td>Arsenal</td>
                                <td>Chelsea</td>
                                <td>18:30</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-01-21</td>
                                <td>Liverpool</td>
                                <td>Manchester United</td>
                                <td>16:00</td>
                            </tr>
                            <tr>
                                <td>2025-01-22</td>
                                <td>Tottenham</td>
                                <td>Manchester City</td>
                                <td>20:00</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-01-23</td>
                                <td>Leeds United</td>
                                <td>Newcastle</td>
                                <td>17:30</td>
                            </tr>
                            <tr>
                                <td>2025-01-24</td>
                                <td>Brighton</td>
                                <td>Southampton</td>
                                <td>19:45</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-01-25</td>
                                <td>Crystal Palace</td>
                                <td>Aston Villa</td>
                                <td>15:00</td>
                            </tr>
                            <tr>
                                <td>2025-01-25</td>
                                <td>Leicester City</td>
                                <td>West Ham</td>
                                <td>17:30</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-01-26</td>
                                <td>Wolves</td>
                                <td>Fulham</td>
                                <td>14:00</td>
                            </tr>
                            <tr>
                                <td>2025-01-26</td>
                                <td>Everton</td>
                                <td>Bournemouth</td>
                                <td>16:30</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-01-27</td>
                                <td>Nottingham Forest</td>
                                <td>Brentford</td>
                                <td>20:00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Таблица игроков */}
                {view === "players" && (
                    <div className="table-container">
                        <h2>Top Players (Goals + Assists)</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Player</th>
                                <th>Team</th>
                                <th>Goals</th>
                                <th>Assists</th>
                                <th>Total (G+A)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Erling Haaland</td>
                                <td>Manchester City</td>
                                <td>25</td>
                                <td>6</td>
                                <td>31</td>
                            </tr>
                            <tr className="row-even">
                                <td>Mohammed Salah</td>
                                <td>Liverpool</td>
                                <td>20</td>
                                <td>12</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>Harry Kane</td>
                                <td>Tottenham</td>
                                <td>18</td>
                                <td>8</td>
                                <td>26</td>
                            </tr>
                            <tr className="row-even">
                                <td>Kevin De Bruyne</td>
                                <td>Manchester City</td>
                                <td>7</td>
                                <td>15</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>Marcus Rashford</td>
                                <td>Manchester United</td>
                                <td>14</td>
                                <td>7</td>
                                <td>21</td>
                            </tr>
                            <tr className="row-even">
                                <td>Martin Ødegaard</td>
                                <td>Arsenal</td>
                                <td>10</td>
                                <td>10</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Gabriel Jesus</td>
                                <td>Arsenal</td>
                                <td>12</td>
                                <td>6</td>
                                <td>18</td>
                            </tr>
                            <tr className="row-even">
                                <td>Bruno Fernandes</td>
                                <td>Manchester United</td>
                                <td>9</td>
                                <td>8</td>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td>Phil Foden</td>
                                <td>Manchester City</td>
                                <td>8</td>
                                <td>7</td>
                                <td>15</td>
                            </tr>
                            <tr className="row-even">
                                <td>Son Heung-Min</td>
                                <td>Tottenham</td>
                                <td>9</td>
                                <td>6</td>
                                <td>15</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Таблица команд */}
                {view === "table" && (
                    <div className="table-container">
                        <h2>League Table</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Drawn</th>
                                <th>Lost</th>
                                <th>Points</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr><td>1</td><td>Manchester City</td><td>22</td><td>17</td><td>3</td><td>2</td><td>54</td></tr>
                            <tr className="row-even"><td>2</td><td>Arsenal</td><td>22</td><td>16</td><td>4</td><td>2</td><td>52</td></tr>
                            <tr><td>3</td><td>Manchester United</td><td>22</td><td>14</td><td>5</td><td>3</td><td>47</td></tr>
                            <tr className="row-even"><td>4</td><td>Tottenham</td><td>22</td><td>13</td><td>3</td><td>6</td><td>42</td></tr>
                            <tr><td>5</td><td>Liverpool</td><td>22</td><td>12</td><td>5</td><td>5</td><td>41</td></tr>
                            <tr className="row-even"><td>6</td><td>Newcastle</td><td>22</td><td>11</td><td>6</td><td>5</td><td>39</td></tr>
                            <tr><td>7</td><td>Brighton</td><td>22</td><td>10</td><td>6</td><td>6</td><td>36</td></tr>
                            <tr className="row-even"><td>8</td><td>Brentford</td><td>22</td><td>9</td><td>9</td><td>4</td><td>36</td></tr>
                            <tr><td>9</td><td>Chelsea</td><td>22</td><td>8</td><td>7</td><td>7</td><td>31</td></tr>
                            <tr className="row-even"><td>10</td><td>Aston Villa</td><td>22</td><td>8</td><td>7</td><td>7</td><td>31</td></tr>
                            <tr><td>11</td><td>Crystal Palace</td><td>22</td><td>7</td><td>6</td><td>9</td><td>27</td></tr>
                            <tr className="row-even"><td>12</td><td>Fulham</td><td>22</td><td>7</td><td>5</td><td>10</td><td>26</td></tr>
                            <tr><td>13</td><td>Wolves</td><td>22</td><td>6</td><td>5</td><td>11</td><td>23</td></tr>
                            <tr className="row-even"><td>14</td><td>West Ham</td><td>22</td><td>5</td><td>6</td><td>11</td><td>21</td></tr>
                            <tr><td>15</td><td>Leicester City</td><td>22</td><td>5</td><td>4</td><td>13</td><td>19</td></tr>
                            <tr className="row-even"><td>16</td><td>Leeds United</td><td>22</td><td>4</td><td>6</td><td>12</td><td>18</td></tr>
                            <tr><td>17</td><td>Everton</td><td>22</td><td>4</td><td>5</td><td>13</td><td>17</td></tr>
                            <tr className="row-even"><td>18</td><td>Bournemouth</td><td>22</td><td>4</td><td>4</td><td>14</td><td>16</td></tr>
                            <tr><td>19</td><td>Southampton</td><td>22</td><td>3</td><td>4</td><td>15</td><td>13</td></tr>
                            <tr className="row-even"><td>20</td><td>Nottingham Forest</td><td>22</td><td>3</td><td>4</td><td>15</td><td>13</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default APL;