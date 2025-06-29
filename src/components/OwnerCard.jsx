import style from './styles/ownerCard-style.module.css';
import chillGuy from '../assets/chill-guy.jpg';
import { useState, useEffect } from 'react';
import FavoriteMovie from './FavoriteMovie';

const OwnerCard = () => {
	// useState is used because the instructions stated that it must be used, not because there is a need to use it
	const [movies, setMovies] = useState([]);

	const moviesData = [
		{
			name: 'Hereditary',
			img: './movies/hereditary.jpg',
			alt: 'Hereditary Poster Img',
			releaseDate: 2018,
			id: 0,
		},
		{
			name: 'Inglourious Basterds',
			img: './movies/inglourious-basterds.jpg',
			alt: 'Inglourious Basterds Poster Img',
			releaseDate: 2009,
			id: 1,
		},
		{
			name: 'Oppenheimer',
			img: './movies/oppenheimer.jpg',
			alt: 'Oppenheimer Poster Img',
			releaseDate: 2023,
			id: 2,
		},
		{
			name: 'The Matrix',
			img: './movies/The_Matrix.jpg',
			alt: 'The Matrix Poster Img',
			releaseDate: 1999,
			id: 3,
		},
		{
			name: 'Toy Story',
			img: './movies/Toy_Story.jpg',
			alt: 'Toy Story Poster Img',
			releaseDate: 1995,
			id: 4,
		},
		{
			name: 'A Silent Voice',
			img: './movies/a-silent-voice.jpg',
			alt: 'A Silent Voice Poster Img',
			releaseDate: 2016,
			id: 5,
		},
	];

	// useEffect is only used to avoid warning about creating setMovies and not using it, should not be implemented in this scenario
	useEffect(() => {
		setMovies(moviesData);
	}, []);

	return (
		<main className={`${style.ownerCard}`}>
			<img src={chillGuy}></img>
			<h1>Erick Contreras</h1>
			<p>
				I am a full-stack developer, I mainly work with React applications. I am
				currently learning how to use Remix along with PostCSS and Tailwind
				<br />
				Feel free to contact me through my e-mail:{' '}
				<a href="mailto:Erickcc06@gmail.com">Erickcc06@gmail.com</a>
			</p>

			<h2>Favorite Movies</h2>
			{movies.length > 0 ? (
				<ul>
					{movies.map(movie => (
						// name={movie.name} img={movie.img} alt={movie.alt} releaseDate={movie.releaseDate}
						<FavoriteMovie {...movie} key={movie.id} />
					))}
				</ul>
			) : (
				''
			)}
		</main>
	);
};

export default OwnerCard;
