import React, { useState } from 'react';
import './auth.css'; // Подключаем ваш CSS
import { loginUser } from '../../api';
import { useNavigate } from 'react-router-dom'; // Импортируем хук для навигации


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Создаём объект для перенаправления

    const handleLogin = (e) => {
        e.preventDefault();

        loginUser({ username, password })
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('jwt', token); // Сохраняем токен в localStorage
                setMessage('Вход успешен!');
                setTimeout(() => navigate('/'), 2000); // Перенаправляем на главную страницу через 2 секунды
            })
            .catch(error => {
                console.error('Ошибка входа:', error);
                setMessage('Неверные данные. Попробуйте снова.');
            });
    };

    return (
        <div className="signin-container">
            <h1>Вход</h1>
            <div className="log-container">
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Войти</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Login;