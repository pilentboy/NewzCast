import './style/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Authenticate from './pages/Authenticate';
import Login from './pages/login'
import Register from './pages/register'
import LoginProvider from './context/LoginContext';

function App() {

	return (
		<>
			<BrowserRouter>
			
				<LoginProvider>
					<Routes>

						<Route path='/' element={<Landing />} />
						<Route path='authenticate' element={<Authenticate />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						
					</Routes>
				</LoginProvider>

			</BrowserRouter >
		</>

	);
}

export default App;
