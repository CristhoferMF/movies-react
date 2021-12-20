import { useContext } from "react";
import { MovieSelected } from "../context/MovieSelected";
import MovieBackground from "./MovieBackground";

function MovieHeroBanner(props) {

    const [store] = useContext(MovieSelected);

    const date = new Date(store.movieSelected.release_date);

    return(
        <div className="pb-5">
           <MovieBackground image={store.movieSelected.backdrop_path}/>
            <h1 className="w-1/2 text-4xl font-bold text-white uppercase xl:text-7xl md:text-6xl">
                {store.movieSelected.title}
            </h1>
            <p className="my-1 text-white md:text-lg" ><span className="pr-3 text-green-500">Votes {store.movieSelected.vote_average}</span> {date.getFullYear()}</p>
            <button className="px-12 py-2 tracking-tight text-white uppercase duration-150 bg-indigo-700 md:py-3 md:px-16 hover:bg-indigo-600 rounded-xl">
                WATCH
            </button>
        </div>
    )
}

export default MovieHeroBanner;