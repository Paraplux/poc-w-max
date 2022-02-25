import { useNavigate } from 'react-router-dom';
import { Actions, NavigationWrapper } from './Navigation.style';
import { Button, useColorMode, IconButton, useToast, Tooltip } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navigation() {
	const navigate = useNavigate();
	const toast = useToast();
	const { colorMode, toggleColorMode } = useColorMode();
	const themeLabel = colorMode === 'light' ? 'sombre' : 'lumineux';

	return (
		<NavigationWrapper>
			<HamburgerIcon onClick={() => navigate('/')} boxSize={8} />
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
						aria-label={`Bouton pour afficher le thème ${themeLabel}`}
					/>
				</Tooltip>
				<Button onClick={() => navigate('/login')} variant={colorMode === 'light' ? 'ghost' : 'outline'}>
					Se connecter
				</Button>
			</Actions>
		</NavigationWrapper>
	);
}

export default Navigation;
