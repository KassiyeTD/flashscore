import React, { useState } from "react";
import "./APL.css"; // Подключение общего CSS

const Ligue1 = () => {
    const [view, setView] = useState("matches");

    return (
        <div className="app">
            <header className="header">
                <h1>Ligue 1 Statistics</h1>
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
                                <td>2025-03-01</td>
                                <td>PSG</td>
                                <td>Marseille</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-03-01</td>
                                <td>Lyon</td>
                                <td>Monaco</td>
                            </tr>
                            <tr>
                                <td>2025-03-01</td>
                                <td>Lille</td>
                                <td>Rennes</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-03-01</td>
                                <td>Nice</td>
                                <td>Toulouse</td>
                            </tr>
                            <tr>
                                <td>2025-03-01</td>
                                <td>Lens</td>
                                <td>Strasbourg</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-03-01</td>
                                <td>Nantes</td>
                                <td>Angers</td>
                            </tr>
                            <tr>
                                <td>2025-03-01</td>
                                <td>Montpellier</td>
                                <td>Brest</td>
                            </tr>
                            <tr className="row-even">
                                <td>2025-03-01</td>
                                <td>Reims</td>
                                <td>Lorient</td>
                            </tr>
                            <tr>
                                <td>2025-03-01</td>
                                <td>Clermont</td>
                                <td>Metz</td>
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
                                <td>Kylian Mbappé</td>
                                <td>PSG</td>
                                <td>22</td>
                                <td>8</td>
                                <td>30</td>
                            </tr>
                            <tr className="row-even">
                                <td>2</td>
                                <td>Alexandre Lacazette</td>
                                <td>Lyon</td>
                                <td>18</td>
                                <td>7</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Jonathan David</td>
                                <td>Lille</td>
                                <td>17</td>
                                <td>6</td>
                                <td>23</td>
                            </tr>
                            <tr className="row-even">
                                <td>4</td>
                                <td>Rayan Cherki</td>
                                <td>Lyon</td>
                                <td>12</td>
                                <td>10</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Neymar Jr</td>
                                <td>PSG</td>
                                <td>10</td>
                                <td>11</td>
                                <td>21</td>
                            </tr>
                            <tr className="row-even">
                                <td>6</td>
                                <td>Mohamed Elyounoussi</td>
                                <td>Rennes</td>
                                <td>11</td>
                                <td>5</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tetê</td>
                                <td>Nice</td>
                                <td>10</td>
                                <td>6</td>
                                <td>16</td>
                            </tr>
                            <tr className="row-even">
                                <td>8</td>
                                <td>Wissam Ben Yedder</td>
                                <td>Monaco</td>
                                <td>9</td>
                                <td>6</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Martin Terrier</td>
                                <td>Rennes</td>
                                <td>8</td>
                                <td>6</td>
                                <td>14</td>
                            </tr>
                            <tr className="row-even">
                                <td>10</td>
                                <td>Achraf Hakimi</td>
                                <td>PSG</td>
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
                                <td>PSG</td>
                                <td>22</td>
                                <td>17</td>
                                <td>3</td>
                                <td>2</td>
                                <td>54</td>
                            </tr>
                            <tr className="row-even">
                                <td>Marseille</td>
                                <td>22</td>
                                <td>14</td>
                                <td>5</td>
                                <td>3</td>
                                <td>47</td>
                            </tr>
                            <tr>
                                <td>Monaco</td>
                                <td>22</td>
                                <td>13</td>
                                <td>4</td>
                                <td>5</td>
                                <td>43</td>
                            </tr>
                            <tr className="row-even">
                                <td>Lyon</td>
                                <td>22</td>
                                <td>12</td>
                                <td>5</td>
                                <td>5</td>
                                <td>41</td>
                            </tr>
                            <tr>
                                <td>Lille</td>
                                <td>22</td>
                                <td>11</td>
                                <td>6</td>
                                <td>5</td>
                                <td>39</td>
                            </tr>
                            <tr className="row-even">
                                <td>Rennes</td>
                                <td>22</td>
                                <td>10</td>
                                <td>7</td>
                                <td>5</td>
                                <td>37</td>
                            </tr>
                            <tr>
                                <td>Nice</td>
                                <td>22</td>
                                <td>9</td>
                                <td>7</td>
                                <td>6</td>
                                <td>34</td>
                            </tr>
                            <tr className="row-even">
                                <td>Lens</td>
                                <td>22</td>
                                <td>9</td>
                                <td>6</td>
                                <td>7</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>Montpellier</td>
                                <td>22</td>
                                <td>8</td>
                                <td>6</td>
                                <td>8</td>
                                <td>30</td>
                            </tr>
                            <tr className="row-even">
                                <td>Brest</td>
                                <td>22</td>
                                <td>7</td>
                                <td>6</td>
                                <td>9</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>Lorient</td>
                                <td>22</td>
                                <td>7</td>
                                <td>5</td>
                                <td>10</td>
                                <td>26</td>
                            </tr>
                            <tr className="row-even">
                                <td>Reims</td>
                                <td>22</td>
                                <td>6</td>
                                <td>6</td>
                                <td>10</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Toulouse</td>
                                <td>22</td>
                                <td>6</td>
                                <td>5</td>
                                <td>11</td>
                                <td>23</td>
                            </tr>
                            <tr className="row-even">
                                <td>Nantes</td>
                                <td>22</td>
                                <td>5</td>
                                <td>7</td>
                                <td>10</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>Clermont</td>
                                <td>22</td>
                                <td>5</td>
                                <td>6</td>
                                <td>11</td>
                                <td>21</td>
                            </tr>
                            <tr className="row-even">
                                <td>Strasbourg</td>
                                <td>22</td>
                                <td>5</td>
                                <td>5</td>
                                <td>12</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Angers</td>
                                <td>22</td>
                                <td>4</td>
                                <td>6</td>
                                <td>12</td>
                                <td>18</td>
                            </tr>
                            <tr className="row-even">
                                <td>Metz</td>
                                <td>22</td>
                                <td>3</td>
                                <td>5</td>
                                <td>14</td>
                                <td>14</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Ligue1;