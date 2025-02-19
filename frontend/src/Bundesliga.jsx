import React, { useState } from "react";
import "./APL.css"; // Подключение CSS файла как в компоненте APL

const Bundesliga = () => {
    const [view, setView] = useState("matches"); // Состояние для отображаемого раздела

    return (
        <div className="app">
            <header className="header">
                <h1>Bundesliga Statistics</h1>
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
                        <h2>Match Results</h2>
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
                                <td>2025-02-18</td>
                                <td>Bayern Munich</td>
                                <td>RB Leipzig</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-18</td>
                                <td>Borussia Dortmund</td>
                                <td>SC Freiburg</td>
                            </tr>
                            <tr>
                                <td>2025-02-18</td>
                                <td>Union Berlin</td>
                                <td>Eintracht Frankfurt</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-18</td>
                                <td>Bayer Leverkusen</td>
                                <td>1. FSV Mainz 05</td>
                            </tr>
                            <tr>
                                <td>2025-02-18</td>
                                <td>TSG Hoffenheim</td>
                                <td>1. FC Köln</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-18</td>
                                <td>VfL Wolfsburg</td>
                                <td>FC Augsburg</td>
                            </tr>
                            <tr>
                                <td>2025-02-18</td>
                                <td>Werder Bremen</td>
                                <td>VfB Stuttgart</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-18</td>
                                <td>Hertha BSC</td>
                                <td>Bochum</td>
                            </tr>
                            <tr>
                                <td>2025-02-18</td>
                                <td>Borussia Mönchengladbach</td>
                                <td>Hamburger SV</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Таблица игроков */}
                {view === "players" && (
                    <div className="table-container">
                        <h2>Player Statistics</h2>
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
                                <td>Harry Kane</td>
                                <td>Bayern Munich</td>
                                <td>20</td>
                                <td>8</td>
                                <td>28</td>
                            </tr>
                            <tr className="row-even">
                                <td>2</td>
                                <td>Christopher Nkunku</td>
                                <td>RB Leipzig</td>
                                <td>17</td>
                                <td>9</td>
                                <td>26</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Jamala Musiala</td>
                                <td>Bayern Munich</td>
                                <td>14</td>
                                <td>11</td>
                                <td>25</td>
                            </tr>
                            <tr className="row-even">
                                <td>4</td>
                                <td>Niclas Füllkrug</td>
                                <td>Werder Bremen</td>
                                <td>15</td>
                                <td>6</td>
                                <td>21</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Marco Reus</td>
                                <td>Borussia Dortmund</td>
                                <td>11</td>
                                <td>10</td>
                                <td>21</td>
                            </tr>
                            <tr className="row-even">
                                <td>6</td>
                                <td>Randal Kolo Muani</td>
                                <td>Eintracht Frankfurt</td>
                                <td>13</td>
                                <td>7</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Leroy Sané</td>
                                <td>Bayern Munich</td>
                                <td>12</td>
                                <td>7</td>
                                <td>19</td>
                            </tr>
                            <tr className="row-even">
                                <td>8</td>
                                <td>Florian Wirtz</td>
                                <td>Bayer Leverkusen</td>
                                <td>9</td>
                                <td>10</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Serge Gnabry</td>
                                <td>Bayern Munich</td>
                                <td>10</td>
                                <td>8</td>
                                <td>18</td>
                            </tr>
                            <tr className="row-even">
                                <td>10</td>
                                <td>Jonas Hofmann</td>
                                <td>Bayer Leverkusen</td>
                                <td>8</td>
                                <td>9</td>
                                <td>17</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Таблица команд */}
                {view === "table" && (
                    <div className="table-container">
                        <h2>Team Table</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Team</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Drawn</th>
                                <th>Lost</th>
                                <th>Points</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Bayern Munich</td>
                                <td>17</td>
                                <td>13</td>
                                <td>3</td>
                                <td>1</td>
                                <td>42</td>
                            </tr>
                            <tr className="row-even">
                                <td>RB Leipzig</td>
                                <td>17</td>
                                <td>12</td>
                                <td>2</td>
                                <td>3</td>
                                <td>38</td>
                            </tr>
                            <tr>
                                <td>Borussia Dortmund</td>
                                <td>17</td>
                                <td>11</td>
                                <td>3</td>
                                <td>3</td>
                                <td>36</td>
                            </tr>
                            <tr className="row-even">
                                <td>SC Freiburg</td>
                                <td>17</td>
                                <td>10</td>
                                <td>5</td>
                                <td>2</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td>Union Berlin</td>
                                <td>17</td>
                                <td>9</td>
                                <td>6</td>
                                <td>2</td>
                                <td>33</td>
                            </tr>
                            <tr className="row-even">
                                <td>Bayer Leverkusen</td>
                                <td>17</td>
                                <td>8</td>
                                <td>5</td>
                                <td>4</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>Eintracht Frankfurt</td>
                                <td>17</td>
                                <td>8</td>
                                <td>4</td>
                                <td>5</td>
                                <td>28</td>
                            </tr>
                            <tr className="row-even">
                                <td>VfL Wolfsburg</td>
                                <td>17</td>
                                <td>7</td>
                                <td>5</td>
                                <td>5</td>
                                <td>26</td>
                            </tr>
                            <tr>
                                <td>Werder Bremen</td>
                                <td>17</td>
                                <td>6</td>
                                <td>6</td>
                                <td>5</td>
                                <td>24</td>
                            </tr>
                            <tr className="row-even">
                                <td>1. FC Köln</td>
                                <td>17</td>
                                <td>6</td>
                                <td>4</td>
                                <td>7</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>TSG Hoffenheim</td>
                                <td>17</td>
                                <td>5</td>
                                <td>5</td>
                                <td>7</td>
                                <td>20</td>
                            </tr>
                            <tr className="row-even">
                                <td>Borussia Mönchengladbach</td>
                                <td>17</td>
                                <td>5</td>
                                <td>4</td>
                                <td>8</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>VfB Stuttgart</td>
                                <td>17</td>
                                <td>4</td>
                                <td>5</td>
                                <td>8</td>
                                <td>17</td>
                            </tr>
                            <tr className="row-even">
                                <td>FC Augsburg</td>
                                <td>17</td>
                                <td>4</td>
                                <td>4</td>
                                <td>9</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>Hamburger SV</td>
                                <td>17</td>
                                <td>4</td>
                                <td>3</td>
                                <td>10</td>
                                <td>15</td>
                            </tr>
                            <tr className="row-even">
                                <td>Bochum</td>
                                <td>17</td>
                                <td>3</td>
                                <td>4</td>
                                <td>10</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>Hertha BSC</td>
                                <td>17</td>
                                <td>3</td>
                                <td>3</td>
                                <td>11</td>
                                <td>12</td>
                            </tr>
                            <tr className="row-even">
                                <td>1. FSV Mainz 05</td>
                                <td>17</td>
                                <td>2</td>
                                <td>5</td>
                                <td>10</td>
                                <td>11</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    )}
            </main>
        </div>
    );
};

export default Bundesliga;