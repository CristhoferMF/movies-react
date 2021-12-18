function MovieCard({image, alt, onClick, isSelected}) {
    return (
        <img src={image} draggable="false"  alt={alt}  onClick={onClick}
            className={"border-2 cursor-pointer select-none bg-gray-700 h-60 w-40 object-cover transition-transform duration-150 rounded-md shadow-md "+ (isSelected?"scale-110":"")} />
    )
}

MovieCard.defaultProps = {
    alt: 'Movie card'
}

export default MovieCard;