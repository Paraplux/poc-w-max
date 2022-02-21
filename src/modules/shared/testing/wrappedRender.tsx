import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import theme from 'config/theme/themeProvider';
import React from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';

export function wrappedRender(
	children: React.ReactElement,
	{ routerProps, initialRoute }: { routerProps?: BrowserRouterProps; initialRoute?: string } = {},
) {
	window.history.replaceState({}, '', initialRoute);

	function Wrapper({ children }: { children: React.ReactElement }) {
		return (
			<ChakraProvider theme={theme}>
				<BrowserRouter {...routerProps}>{children}</BrowserRouter>
			</ChakraProvider>
		);
	}
	return render(children, { wrapper: Wrapper });
}
