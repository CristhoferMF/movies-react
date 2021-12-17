function MovieBackground({image, alt}){
    return (
        <div className="absolute inset-0 -z-10">
            <div className="absolute bg-black w-full h-full opacity-10"></div>
            <div className="absolute w-full h-full">
                <div className="bg-gradient-to-b from-transparent to-black h-5/6"></div>
                <div className="h-1/6 bg-black"></div>
            </div>
            <img src={image} className="object-cover w-full h-full bg-gray-800" alt={alt} />
        </div>
    )
}

MovieBackground.defaultProps = {
    alt: "Movie Background",
    image: "https://image.tmdb.org/t/p/original/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
}

export default MovieBackground;