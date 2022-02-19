import { Spinner } from '@chakra-ui/react';
import useUpcomingMovie from '../hooks/useUpcomingMovie';

function Movie() {
	const { data: movie, isLoading } = useUpcomingMovie();
	if (!movie || isLoading) {
		return <Spinner />;
	}
	return <div>{movie.title}</div>;
}

export default Movie;
