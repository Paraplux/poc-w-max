import { Link } from 'react-router-dom';
import { Actions, NavigationWrapper } from './Navigation.style';
import { Menu, MenuButton, MenuList, MenuItem, Button, useColorMode, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navigation() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<NavigationWrapper>
			<Link to="/">Logo</Link>
			<Actions>
				<IconButton
					onClick={toggleColorMode}
					icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					aria-label="Button to switch theme theme"
				/>
				<Menu>
					<MenuButton colorScheme={'primary'} as={Button} rightIcon={<ChevronDownIcon />}>
						Actions
					</MenuButton>
					<MenuList>
						<Link to="/login">
							<MenuItem>Se connecter</MenuItem>
						</Link>
						<Link to="/about">
							<MenuItem>A propos</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Actions>
		</NavigationWrapper>
	);
}

export default Navigation;
