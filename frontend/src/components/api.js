import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;  
 

// Лиги 
export const getLeagues = async () => {
    return axios.get(`${API_URL}/leagues`);
};

export const getLeagueMatches = async (leagueId) => {
    return axios.get(`${API_URL}/leagues/${leagueId}/matches`);
};

export const getLeagueTable = async (leagueId) => {
    return axios.get(`${API_URL}/leagues/${leagueId}/table`);
};

// Команды
export const getTeams = async () => {
    return axios.get(`${API_URL}/teams`);
};

export const getTeamById = async (teamId) => {
    return axios.get(`${API_URL}/teams/${teamId}`);
};


// Игры 

export const getGameStatistics = async (gameId) => {
    return axios.get(`${API_URL}/games/${gameId}/statistics`);
};

export const getGameLineup = async (gameId) => {
    return axios.get(`${API_URL}/games/${gameId}/lineup`);
};

export const likeGame = async (gameId) => {
    return axios.post(`${API_URL}/games/${gameId}/likes`);
};

export const getPopularGames = async () => {
    return axios.get(`${API_URL}/games/popular`);
};


// Аутентификация 
export const registerUser = async (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/login`, userData);
};


