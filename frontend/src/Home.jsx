import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css"; // Подключение стилей
import { Link } from "react-router-dom";

const translations = {
	en: {
		title: "Flashscore",
		menu: ["Login", "Registration"],
		leagues: ["Premier League", "Bundesliga", "La Liga", "Serie A", "Ligue 1", "Kazakhstan Premier League"],
		championsLeague: "Champions League",
	},
	ru: {
		title: "Flashscore",
		menu: ["Войти", "Зарегистрироваться"],
		leagues: ["Премьер-Лига", "Бундеслига", "Ла Лига", "Серия А", "Лига 1", "Казахстанская Премьер-Лига"],
		championsLeague: "Лига Чемпионов",
	},
	kz: {
		title: "Flashscore",
		menu: ["Тіркелу", "Тіркеу"],
		leagues: ["Премьер Лига", "Бундеслига", "Ла Лига", "Серия А", "Лига 1", "Қазақстан Премьер-Лигасы"],
		championsLeague: "Чемпиондар Лигасы",
	},
};

const leagues = [
	{
		name: "Premier League",
		img: "https://storage.yandexcloud.net/s3-metaratings-storage/images/0e/26/0e263a187f6409251626b99a69c70a89.png",
		link: "/apl",
	},
	{
		name: "Bundesliga",
		img: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/a1/57/3ab5aae40ff62a09f7d4e87df36efade6648cdbdef5d5709431191.jpg",
		link: "/bundesliga",
	},
	{
		name: "La Liga",
		img: "https://ss.sport-express.net/userfiles/materials/201/2014479/volga.jpg",
		link: "/laliga",
	},
	{
		name: "Serie A",
		img: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/fe/bf/7685663ff9f3a82e3104f0705e275d7960ab6640ab6db729222132.jpg",
		link: "/seriea",
	},
	{
		name: "Ligue 1",
		img: "https://bcamp.pro/wp-content/uploads/2022/07/photo_2022-07-26_19-30-09.jpg",
		link: "/ligue1",
	},
	{
		name: "Kazakhstan Premier League",
		img: "https://storage.yandexcloud.net/s3-metaratings-storage/images/df/78/df781aab7fd6b4d4e471208ccd9e4b80.jpg",
		link: "/kpl",
	},
];

const championsLeague = {
	name: "Champions League",
	img: "https://rusbiathlon.ru/public/20/10187.jpg",
	link: "/liga",
};

const Home = () => {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		document.title = translations[language].title;
	}, [language]);

	return (
		<div className="home">
			{/* Шапка */}
			<header className="header">
				<h1>{translations[language].title}</h1>
				<nav className="menu">
					{translations[language].menu.map((item, index) => (
						<Link
							key={index}
							to={
								item === "Registration" ||
								item === "Зарегистрироваться" ||
								item === "Тіркеу"
									? "/Register"
									: item === "Login" ||
									item === "Войти" ||
									item === "Тіркелу"
										? "/Login"
										: "#"
							}
						>
							{item}
						</Link>
					))}
				</nav>
				{/* Селектор языков */}
				<div className="lang-selector">
					{Object.keys(translations).map((lang) => (
						<button
							key={lang}
							className={language === lang ? "active" : ""}
							onClick={() => setLanguage(lang)}
						>
							{lang.toUpperCase()}
						</button>
					))}
				</div>
			</header>
<div className="ligg">
	<h1>Лиги</h1>
</div>
			{/* Слайдер лиг */}
			<Swiper
				modules={[Navigation]}
				spaceBetween={90}
				slidesPerView={1}
				navigation
				loop={true}
				breakpoints={{
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
			>
				{leagues.map((league, index) => (
					<SwiperSlide key={index}>
						<div
							className="league"
							style={{
								backgroundImage: `url(${league.img})`,
							}}
						>
							<Link to={league.link}>
								{translations[language].leagues[index]}
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Лига Чемпионов отдельно */}
			<div className="champions-league">
				<div className="champion">
				<Link to={championsLeague.link}>
					<img src={championsLeague.img} alt={championsLeague.name} />
					<h2>{translations[language].championsLeague}</h2>
				</Link>
				</div>
			</div>

			{/* Подвал */}
			<div className="footer" id="footer">
				<div className="links">
					<a href="https://web.telegram.org/k/">Telegram</a>
					<a href="https://github.com/KassiyeTD/flashscore">GitHub</a>
					<a href="mailto:renameuser.1991@gmail.com">Email</a>
				</div>
				<div className="info">
					© 2025 Flashscore. All rights reserved.
				</div>
			</div>

		</div>
	);
};

export default Home;