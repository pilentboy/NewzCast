import './style/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Authenticate from './pages/Authenticate';
import Login from './pages/login';
import Register from './pages/register';
import LoginProvider from './context/LoginContext';
import NewzNav from './pages/NewzNav';
import Trending from './pages/Trending';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Settings from './pages/Settings';

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
						<Route path="profile" element={<Profile />} />
						<Route path="settings" element={<Settings />} />
						<Route path="favorites" element={<Favorites />} />
						<Route path="search" element={<Search />} />
					</Route>
				</Routes>
			</LoginProvider>
		</BrowserRouter>
	);
}

export default App;
