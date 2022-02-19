import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Login from 'modules/authentication/screens/Login';
import Movie from '../modules/movies/screens/Movie';

const About = () => <div>About</div>;

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<h1>This is the home page</h1>} />
				<Route path="login" element={<Login />} />
				<Route path="about" element={<About />} />
				<Route path="upcoming" element={<Movie />} />
			</Route>
		</Routes>
	);
}
export default Router;
