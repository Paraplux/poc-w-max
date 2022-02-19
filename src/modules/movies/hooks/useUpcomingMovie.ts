import axios from 'axios';
import React from 'react';
import { Movie } from '../types/movie.type';

function useUpcomingMovie() {
	const [data, setData] = React.useState<Movie>();
	const [isLoading, setIsLoading] = React.useState(false);

	const fetchData = async function () {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				'https://api.themoviedb.org/3/movie/upcoming?api_key=040dff99eeba55116f8145fd1862aa4d&language=fr&page=1',
			);
			setData(data.results[0]);
		} catch (e) {
			throw new Error('Cannot fetch data : ' + (e as Error).message);
		} finally {
			setIsLoading(false);
		}
	};
	React.useEffect(function () {
		fetchData();
	}, []);
	return { data, isLoading };
}

export default useUpcomingMovie;
