import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaEntrada from './TelaEntrada/TelaEntrada';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import { useState } from 'react';
import UserContext from "./context";
import TelaPlanos from './TelaPlanos/TelaPlanos';
import Plano from './Plano/Plano';
// import TelaHabitos from './TelaHabitos/TelaHabitos';

export default function App() {
	const tokenOnLS = localStorage.getItem("token");
	const [token, setToken] = useState(tokenOnLS);

	function guardarToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

  return (
		<UserContext.Provider value={{token, setToken, guardarToken}}>
			<BrowserRouter>
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<TelaEntrada />} />
					<Route path="/cadastro" element={<TelaCadastro />}/>
					<Route path="/subscriptions" element={<TelaPlanos />} />
					<Route path="/subscriptions/:idPlano" element={<Plano />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}


// import UserContext from "./contexts/UserContext";


