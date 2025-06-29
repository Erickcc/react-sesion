const FavoriteMovie = ({ name, img, alt, releaseDate }) => {
	return (
		<li>
			<img src={img} alt={alt}></img>
			<h4>{name}</h4>
			<h6>{releaseDate}</h6>
		</li>
	);
};

export default FavoriteMovie;
