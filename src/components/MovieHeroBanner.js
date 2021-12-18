import { useContext } from "react";
import { MovieSelected } from "../context/MovieSelected";
import MovieBackground from "./MovieBackground";

function MovieHeroBanner(props) {

    const [store] = useContext(MovieSelected);

    const date = new Date(store.movieSelected.release_date);

    return(
        <div className="pb-5">
           <MovieBackground image={store.movieSelected.backdrop_path}/>
            <h1 className="text-white text-7xl uppercase font-bold w-1/2">
                {store.movieSelected.title}
            </h1>
            <p className="text-white text-lg my-1" ><span className="text-green-500 pr-3">Votes {store.movieSelected.vote_average}</span> {date.getFullYear()}</p>
            <button className="px-16 bg-indigo-600 tracking-tight hover:bg-indigo-700 duration-150 text-white uppercase py-3 rounded-xl">
                Play
            </button>
        </div>
    )
}

export default MovieHeroBanner;