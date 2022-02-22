import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navigation from 'modules/navigation/Navigation';
import HeaderMessage from 'modules/shared/components/feedback/HeaderMessage/HeaderMessage';

function Layout() {
	return (
		<>
			<HeaderMessage />
			<Navigation />
			<Container maxW="container.xl">
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;
