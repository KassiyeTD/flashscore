import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import APL from "./APL";
import Bundesliga from "./Bundesliga";
import LaLiga from "./LaLiga";
import Ligue1 from "./Ligue1";
import KPL from "./KPL";
import LigaChamp from "./LigaChamp";
import LigaA from "./LigaA";
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/apl" element={<APL />} />
				<Route path="/bundesliga" element={<Bundesliga />} />
				<Route path="/laliga" element={<LaLiga />} />
				<Route path="/ligue1" element={<Ligue1 />} />
				<Route path="/kpl" element={<KPL />} />
				<Route path="/seriea" element={<LigaA />} />
				<Route path="/liga" element={<LigaChamp />} />
				<Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;