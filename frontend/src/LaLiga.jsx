import React, { useState } from "react";
import "./APL.css"; // Подключение общего CSS

const LaLiga = () => {
    const [view, setView] = useState("matches");

    return (
        <div className="app">
            <header className="header">
                <h1>La Liga Statistics</h1>
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
                                <td>2025-02-20</td>
                                <td>Real Madrid</td>
                                <td>Atletico Madrid</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-20</td>
                                <td>Barcelona</td>
                                <td>Sevilla</td>
                            </tr>
                            <tr>
                                <td>2025-02-20</td>
                                <td>Real Sociedad</td>
                                <td>Athletic Bilbao</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-20</td>
                                <td>Villarreal</td>
                                <td>Valencia</td>
                            </tr>
                            <tr>
                                <td>2025-02-20</td>
                                <td>Real Betis</td>
                                <td>Rayo Vallecano</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-20</td>
                                <td>Getafe</td>
                                <td>Almeria</td>
                            </tr>
                            <tr>
                                <td>2025-02-20</td>
                                <td>Granada</td>
                                <td>Osasuna</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-20</td>
                                <td>Celta Vigo</td>
                                <td>Cadiz</td>
                            </tr>
                            <tr>
                                <td>2025-02-20</td>
                                <td>Las Palmas</td>
                                <td>Mallorca</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-02-20</td>
                                <td>Elche</td>
                                <td>Espanyol</td>
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
                                <td>Jude Bellingham</td>
                                <td>Real Madrid</td>
                                <td>14</td>
                                <td>7</td>
                                <td>21</td>
                            </tr>
                            <tr className="row-even">
                                <td>2</td>
                                <td>Robert Lewandowski</td>
                                <td>Barcelona</td>
                                <td>13</td>
                                <td>5</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Antoine Griezmann</td>
                                <td>Atletico Madrid</td>
                                <td>11</td>
                                <td>6</td>
                                <td>17</td>
                            </tr>
                            <tr className="row-even">
                                <td>4</td>
                                <td>João Felix</td>
                                <td>Barcelona</td>
                                <td>9</td>
                                <td>8</td>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Vinicius Jr</td>
                                <td>Real Madrid</td>
                                <td>8</td>
                                <td>8</td>
                                <td>16</td>
                            </tr>
                            <tr className="row-even">
                                <td>6</td>
                                <td>Alvaro Morata</td>
                                <td>Atletico Madrid</td>
                                <td>10</td>
                                <td>4</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Takefusa Kubo</td>
                                <td>Real Sociedad</td>
                                <td>9</td>
                                <td>5</td>
                                <td>14</td>
                            </tr>
                            <tr className="row-even">
                                <td>8</td>
                                <td>Borja Iglesias</td>
                                <td>Real Betis</td>
                                <td>8</td>
                                <td>5</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Alexander Sørloth</td>
                                <td>Villarreal</td>
                                <td>7</td>
                                <td>6</td>
                                <td>13</td>
                            </tr>
                            <tr className="row-even">
                                <td>10</td>
                                <td>Iago Aspas</td>
                                <td>Celta Vigo</td>
                                <td>7</td>
                                <td>5</td>
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
                                <td>Real Madrid</td>
                                <td>21</td>
                                <td>15</td>
                                <td>4</td>
                                <td>2</td>
                                <td>49</td>
                            </tr>
                            <tr className="row-even">
                                <td>Barcelona</td>
                                <td>21</td>
                                <td>14</td>
                                <td>5</td>
                                <td>2</td>
                                <td>47</td>
                            </tr>
                            <tr>
                                <td>Atletico Madrid</td>
                                <td>21</td>
                                <td>13</td>
                                <td>4</td>
                                <td>4</td>
                                <td>43</td>
                            </tr>
                            <tr className="row-even">
                                <td>Real Sociedad</td>
                                <td>21</td>
                                <td>12</td>
                                <td>5</td>
                                <td>4</td>
                                <td>41</td>
                            </tr>
                            <tr>
                                <td>Villarreal</td>
                                <td>21</td>
                                <td>11</td>
                                <td>4</td>
                                <td>6</td>
                                <td>37</td>
                            </tr>
                            <tr className="row-even">
                                <td>Real Betis</td>
                                <td>21</td>
                                <td>10</td>
                                <td>6</td>
                                <td>5</td>
                                <td>36</td>
                            </tr>
                            <tr>
                                <td>Sevilla</td>
                                <td>21</td>
                                <td>9</td>
                                <td>6</td>
                                <td>6</td>
                                <td>33</td>
                            </tr>
                            <tr className="row-even">
                                <td>Athletic Bilbao</td>
                                <td>21</td>
                                <td>8</td>
                                <td>7</td>
                                <td>6</td>
                                <td>31</td>
                            </tr>
                            <tr>
                                <td>Rayo Vallecano</td>
                                <td>21</td>
                                <td>7</td>
                                <td>8</td>
                                <td>6</td>
                                <td>29</td>
                            </tr>
                            <tr className="row-even">
                                <td>Valencia</td>
                                <td>21</td>
                                <td>7</td>
                                <td>6</td>
                                <td>8</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>Osasuna</td>
                                <td>21</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>25</td>
                            </tr>
                            <tr className="row-even">
                                <td>Getafe</td>
                                <td>21</td>
                                <td>6</td>
                                <td>6</td>
                                <td>9</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Granada</td>
                                <td>21</td>
                                <td>5</td>
                                <td>7</td>
                                <td>9</td>
                                <td>22</td>
                            </tr>
                            <tr className="row-even">
                                <td>Celta Vigo</td>
                                <td>21</td>
                                <td>5</td>
                                <td>6</td>
                                <td>10</td>
                                <td>21</td>
                            </tr>
                            <tr>
                                <td>Cadiz</td>
                                <td>21</td>
                                <td>4</td>
                                <td>7</td>
                                <td>10</td>
                                <td>19</td>
                            </tr>
                            <tr className="row-even">
                                <td>Almeria</td>
                                <td>21</td>
                                <td>4</td>
                                <td>6</td>
                                <td>11</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>Mallorca</td>
                                <td>21</td>
                                <td>3</td>
                                <td>8</td>
                                <td>10</td>
                                <td>17</td>
                            </tr>
                            <tr className="row-even">
                                <td>Las Palmas</td>
                                <td>21</td>
                                <td>3</td>
                                <td>6</td>
                                <td>12</td>
                                <td>15</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default LaLiga;