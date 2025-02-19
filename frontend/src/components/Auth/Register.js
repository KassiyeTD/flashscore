import React, { useState } from 'react';
import './auth.css'; // Подключаем ваш CSS (можно переименовать в общий стиль)
import { registerUser } from '../../api';
import { useNavigate } from 'react-router-dom'; // Импортируем хук для навигации


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Создаём объект для перенаправления

    const handleRegister = (e) => {
        e.preventDefault();

        registerUser({ username, password })
            .then(() => {
                setMessage('Регистрация успешна!');
                setTimeout(() => navigate('/login'), 2000); // Перенаправляем на страницу входа через 2 секунды
            })
            .catch(error => {
                console.error('Ошибка регистрации:', error);
                setMessage('Ошибка при регистрации. Попробуйте снова.');
            });
    };

    return (
        <div className="signin-container">
            <h1>Регистрация</h1>
            <div className="log-container">
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Зарегистрироваться</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Register;