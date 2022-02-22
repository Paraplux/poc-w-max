import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Badge,
	Divider,
	Heading,
	Link,
	Spinner,
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

function TestAPI() {
	const [data, setData] = React.useState<Array<any>>();

	const fetchData = async () => {
		const { data } = await axios.get('https://rickandmortyapi.com/api/character');
		setData(data.results);
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	if (!data) {
		return <Spinner />;
	}

	return (
		<>
			<Heading>Pong!</Heading>
			<Divider marginBlock={16} />
			<Table variant="simple">
				<TableCaption>Personnages de Rick and Morty</TableCaption>
				<Thead>
					<Tr>
						<Th>Photo</Th>
						<Th>Nom</Th>
						<Th>Status</Th>
						<Th>Genre</Th>
						<Th>Lien</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((item: any) => (
						<Tr>
							<Td>
								<Avatar name={item.name} src={item.image} />
							</Td>
							<Td>{item.name}</Td>
							<Td>
								<Badge
									colorScheme={
										item.status === 'Alive' ? 'green' : item.status === 'Dead' ? 'red' : 'yellow'
									}
								>
									{item.status}
								</Badge>
							</Td>
							<Td>{item.gender}</Td>
							<Td>
								<Link href={item.url} isExternal>
									<ExternalLinkIcon mx="2px" />
								</Link>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</>
	);
}

export default TestAPI;
