import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react';
import { config } from 'config/config';
import React from 'react';

function HeaderMessage() {
	const [isHeaderMessageVisible, setIsHeaderMessageVisible] = React.useState(config.isHeaderMessageVisible);

	if (!isHeaderMessageVisible) {
		return <></>;
	}

	return (
		<Alert status="info">
			<AlertIcon />
			{config.headerMessage}
			<CloseButton
				onClick={() => setIsHeaderMessageVisible((prevState) => !prevState)}
				position="absolute"
				right="8px"
				top="8px"
			/>
		</Alert>
	);
}

export default HeaderMessage;
