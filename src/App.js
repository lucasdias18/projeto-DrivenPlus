import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaEntrada from './TelaEntrada/TelaEntrada';
import TelaCadastro from './TelaCadastro/TelaCadastro';
// import TelaHabitos from './TelaHabitos/TelaHabitos';

export default function App() {

  return (
		<BrowserRouter>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<TelaEntrada />} />
				<Route path="/cadastro" element={<TelaCadastro />}/>
				{/* <Route path="/subscriptions" element={<TelaHabitos />} /> */}
				{/* <Route path="/sucesso" element={<Sucesso sucesso={sucesso} />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

