function MovieCard({image, alt}) {
    return (
        <a className="cursor-pointer" href="/#">
        <img src={image} draggable="false"  alt={alt} className="border-2 select-none bg-gray-700 h-60 w-40 object-cover rounded-md shadow-md" />
        </a>
    )
}

MovieCard.defaultProps = {
    alt: 'Movie card'
}

export default MovieCard;