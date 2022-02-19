import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { theme as customTheme } from './theme';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const styles = {
	global: (props: { colorMode: string }) => ({
		'html, body': {
			color: props.colorMode === 'dark' ? 'neutral.light' : 'neutral.dark',
			backgroundColor: props.colorMode === 'dark' ? 'neutral.dark' : 'neutral.light',
		},
	}),
};

const colors = customTheme.palette;

const theme = extendTheme({ config, styles, colors });

export default theme;
