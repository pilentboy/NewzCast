import './style/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Authenticate from './pages/authenticate';
function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<Landing />} />
					<Route path='authenticate' element={<Authenticate />} />

				</Routes>
			</BrowserRouter >
		</>

	);
}

export default App;
