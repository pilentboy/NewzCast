import './assets/css/index.css'
import 'animate.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/landing';
import Authenticate from './pages/authenticate'
import Login from './pages/login';
import Register from './pages/register';
import LoginProvider from './context/LoginContext';
import NewzNav from './pages/NewzNav';
import Trending from './pages/Trending';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile';
import Favorites from './pages/favorites'
import Settings from './pages/Settings';
import Home from './pages/Home';


function App() {
	return (
		<BrowserRouter>
			<LoginProvider>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/authenticate" element={<Authenticate />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				
					<Route path="/newzcast" element={<NewzNav />}>
						<Route index element={<Trending />} />
						<Route path="home" element={<Home />} />
						<Route path="profile/:email" element={<Profile />} />
						<Route path="settings" element={
							<PrivateRoute /> 
						}>
							<Route path="" element={<Settings />} />
						</Route>
						<Route path="favorites" element={
							<PrivateRoute /> 
						}>
							<Route path="" element={<Favorites />} />
						</Route>
					</Route>
					<Route path="*" element={<Navigate to="/newzcast" />} />


				</Routes>
			</LoginProvider>
		</BrowserRouter>
	);
}

export default App;
