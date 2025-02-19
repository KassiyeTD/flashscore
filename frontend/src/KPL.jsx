import React, { useState } from "react";
import "./APL.css"; // Подключение общего CSS

const KPL = () => {
    const [view, setView] = useState("matches");

    return (
        <div className="app">
            <header className="header">
                <h1>Kazakhstan Premier League Statistics</h1>
            </header>
            <main className="content">
                <div className="button-container">
                    <button onClick={() => setView("matches")}>Matches</button>
                    <button onClick={() => setView("players")}>Players</button>
                    <button onClick={() => setView("table")}>Table</button>
                </div>

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
                                <td>2025-02-25</td>
                                <td>Astana</td>
                                <td>Kairat</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-25</td>
                                <td>Aktobe</td>
                                <td>Ordabasy</td>
                            </tr>
                            <tr>
                                <td>2025-02-25</td>
                                <td>Shakhter Karagandy</td>
                                <td>Tobol</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-25</td>
                                <td>Taraz</td>
                                <td>Caspy</td>
                            </tr>
                            <tr>
                                <td>2025-02-25</td>
                                <td>Okzhetpes</td>
                                <td>Maktaaral</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-25</td>
                                <td>Kyzylzhar</td>
                                <td>Atyrau</td>
                            </tr>
                            <tr>
                                <td>2025-02-25</td>
                                <td>FC Zhetisu</td>
                                <td>Akzhayik</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

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
                                <td>Ablai Khan</td>
                                <td>Astana</td>
                                <td>13</td>
                                <td>8</td>
                                <td>21</td>
                            </tr>
                            <tr className="row-even">
                                <td>2</td>
                                <td>Andrey Arshavin</td>
                                <td>Kairat</td>
                                <td>12</td>
                                <td>7</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Junior Kabananga</td>
                                <td>Ordabasy</td>
                                <td>11</td>
                                <td>8</td>
                                <td>19</td>
                            </tr>
                            <tr className="row-even">
                                <td>4</td>
                                <td>Maksim Fedin</td>
                                <td>Aktobe</td>
                                <td>10</td>
                                <td>9</td>
                                <td>19</td>
                            </tr>
                            <tr>
                            <td>5</td>
                                <td>Bagdat Kaiyr</td>
                                <td>Tobol</td>
                                <td>10</td>
                                <td>6</td>
                                <td>16</td>
                            </tr>
                            <tr className="row-even">
                                <td>6</td>
                                <td>Vladislav Vassiliev</td>
                                <td>Kyzylzhar</td>
                                <td>9</td>
                                <td>5</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Islambek Kuat</td>
                                <td>Shakhter Karagandy</td>
                                <td>8</td>
                                <td>6</td>
                                <td>14</td>
                            </tr>
                            <tr className="row-even">
                                <td>8</td>
                                <td>Daniyar Mussayev</td>
                                <td>Taraz</td>
                                <td>7</td>
                                <td>7</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Bauyrzhan Islamkhan</td>
                                <td>Maktaaral</td>
                                <td>6</td>
                                <td>7</td>
                                <td>13</td>
                            </tr>
                            <tr className="row-even">
                                <td>10</td>
                                <td>Serik Zholchiev</td>
                                <td>Atyrau</td>
                                <td>6</td>
                                <td>6</td>
                                <td>12</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

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
                                <td>Astana</td>
                                <td>20</td>
                                <td>14</td>
                                <td>4</td>
                                <td>2</td>
                                <td>46</td>
                            </tr>
                            <tr className="row-even">
                                <td>Kairat</td>
                                <td>20</td>
                                <td>13</td>
                                <td>5</td>
                                <td>2</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>Aktobe</td>
                                <td>20</td>
                                <td>12</td>
                                <td>6</td>
                                <td>2</td>
                                <td>42</td>
                            </tr>
                            <tr className="row-even">
                                <td>Ordabasy</td>
                                <td>20</td>
                                <td>11</td>
                                <td>4</td>
                                <td>5</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>Tobol</td>
                                <td>20</td>
                                <td>10</td>
                                <td>5</td>
                                <td>5</td>
                                <td>35</td>
                            </tr>
                            <tr className="row-even">
                                <td>Shakhter Karagandy</td>
                                <td>20</td>
                                <td>9</td>
                                <td>6</td>
                                <td>5</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>Taraz</td>
                                <td>20</td>
                                <td>8</td>
                                <td>7</td>
                                <td>5</td>
                                <td>31</td>
                            </tr>
                            <tr className="row-even">
                                <td>Kyzylzhar</td>
                                <td>20</td>
                                <td>8</td>
                                <td>5</td>
                                <td>7</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>Atyrau</td>
                                <td>20</td>
                                <td>7</td>
                                <td>6</td>
                                <td>7</td>
                                <td>27</td>
                            </tr>
                            <tr className="row-even">
                                <td>Okzhetpes</td>
                                <td>20</td>
                                <td>6</td>
                                <td>5</td>
                                <td>9</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>Caspy</td>
                                <td>20</td>
                                <td>5</td>
                                <td>7</td>
                                <td>8</td>
                                <td>22</td>
                            </tr>
                            <tr className="row-even">
                                <td>Maktaaral</td>
                                <td>20</td>
                                <td>4</td>
                                <td>6</td>
                                <td>10</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>FC Zhetisu</td>
                                <td>20</td>
                                <td>3</td>
                                <td>5</td>
                                <td>12</td>
                                <td>14</td>
                            </tr>
                            <tr className="row-even">
                                <td>Akzhayik</td>
                                <td>20</td>
                                <td>3</td>
                                <td>4</td>
                                <td>13</td>
                                <td>13</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default KPL;