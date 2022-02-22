import { Heading } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Login from 'modules/authentication/screens/Login/Login';
import TestAPI from 'modules/authentication/screens/TestAPI';

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Heading>Home page</Heading>} />
				<Route path="login" element={<Login />} />
				<Route path="ping" element={<TestAPI />} />
			</Route>
		</Routes>
	);
}
export default Router;
