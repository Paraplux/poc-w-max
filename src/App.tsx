import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './config/theme/themeProvider';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
