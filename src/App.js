import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaEntrada from './TelaEntrada/TelaEntrada';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import { useState } from 'react';
import UserContext from "./context";
import TelaPlanos from './TelaPlanos/TelaPlanos';
import Plano from './Plano/Plano';
import TelaHome from './TelaHome.js/TelaHome';

export default function App() {
	const tokenOnLS = localStorage.getItem("token");
	const userOnLS = localStorage.getItem('user');
	const [token, setToken] = useState(tokenOnLS);
	const [user, setUser] = useState(JSON.parse(userOnLS));

	function guardarToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

	function guardarUser(user) {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	}

  return (
		<UserContext.Provider value={{token, setToken, guardarToken, user, setUser, guardarUser}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TelaEntrada />} />
					<Route path="/cadastro" element={<TelaCadastro />}/>
					<Route path="/subscriptions" element={<TelaPlanos />} />
					<Route path="/subscriptions/:idPlano" element={<Plano />} />
					<Route path='/home' element={<TelaHome />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}



