import { Link } from 'react-router-dom';
import { Actions, NavigationWrapper } from './Navigation.style';
import { Button, useColorMode, IconButton, useToast, Tooltip } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navigation() {
	const toast = useToast();
	const { colorMode, toggleColorMode } = useColorMode();
	const themeLabel = colorMode === 'light' ? 'sombre' : 'lumineux';

	return (
		<NavigationWrapper>
			<Link to="/">
				<HamburgerIcon boxSize={8} />
			</Link>
			<Actions>
				<Tooltip label={`Activer le thème ${themeLabel}`}>
					<IconButton
						size="lg"
						variant={'ghost'}
						onClick={() => {
							toggleColorMode();
							toast({
								title: `Thème ${themeLabel} chargé`,
								duration: 1000,
								isClosable: true,
							});
						}}
						icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						aria-label="Button to switch theme theme"
					/>
				</Tooltip>
				<Link to="/login">
					<Button variant={colorMode === 'light' ? 'ghost' : 'outline'}>Se connecter</Button>
				</Link>
			</Actions>
		</NavigationWrapper>
	);
}

export default Navigation;
