function MovieCard({ image, alt, onClick, isSelected }) {
  return (
    <img
      src={image}
      draggable="false"
      alt={alt}
      onClick={onClick}
      className={
        "border border-gray-400 cursor-pointer select-none block bg-gray-700 md:h-60 h-52 w-40 object-cover transition-transform duration-75 rounded-md shadow-md " +
        (isSelected ? "scale-110" : "")
      }
    />
  );
}

MovieCard.defaultProps = {
  alt: "Movie card",
};

export default MovieCard;
