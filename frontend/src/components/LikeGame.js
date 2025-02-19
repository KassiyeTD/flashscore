import React from 'react';
import { likeGame } from '../api';

const LikeGame = ({ gameId }) => {
    const handleLike = () => {
        likeGame(gameId)
            .then(() => alert('Игра лайкнута!'))
            .catch(error => console.error('Ошибка при лайке игры:', error));
    };

    return (
        <button onClick={handleLike}>Лайкнуть игру</button>
    );
};

export default LikeGame;
