import { FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { LoginForm, LoginWrapper } from './Login.style';

function Login() {
	return (
		<LoginWrapper>
			<Heading>Se connecter</Heading>
			<LoginForm>
				<FormControl>
					<FormLabel htmlFor="email">Adresse mail</FormLabel>
					<Input id="email" type="email" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="password">Mot de passe</FormLabel>
					<Input id="password" type="password" />
				</FormControl>
			</LoginForm>
		</LoginWrapper>
	);
}

export default Login;
