import { image as imageMovie } from "../services/movies";

function MovieBackground({image, alt}){
    return (
        <div className="absolute inset-0 min-h-screen -z-10">
            <div className="absolute w-full h-full bg-black opacity-10"></div>
            <div className="absolute w-full h-full">
                <div className="bg-gradient-to-b from-transparent to-black h-5/6"></div>
                <div className="bg-black h-1/6"></div>
            </div>
            {image ? <img src={imageMovie(image)} className="object-cover w-full h-full bg-gray-800" alt={alt} /> : <div className="w-full h-full bg-gray-800"></div>}
        </div>
    )
}

MovieBackground.defaultProps = {
    alt: "Movie Background",
}

export default MovieBackground;