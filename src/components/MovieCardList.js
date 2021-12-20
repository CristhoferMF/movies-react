import { useContext, useEffect, useRef } from "react";
import { MovieSelected } from "../context/MovieSelected";
import { getMovies, image } from "../services/movies";
import {actionTypes} from "../stores/StoreMovieSelected";
import MovieCard from "./MovieCard";

function MovieCardList() {

    const [store, dispatch] = useContext(MovieSelected);
    const scrollHorizontal = useRef(null);

    useEffect(() => {
        getMovies().then(data => {
            if (data.status === 200) {
                dispatch({
                    type: actionTypes.FETCH_MOVIES_SUCCESS,
                    payload: data.data.results
                })
                dispatch({
                    type: actionTypes.SELECT_MOVIE,
                    payload: data.data.results[0]
                })
            }
        });
    },[])

    useEffect(() => {
        const scrollWrapper = scrollHorizontal.current;
        scrollWrapper.addEventListener('wheel', function (event) {
            event.preventDefault();
            this.scroll({
                left: this.scrollLeft + (event.deltaY > 0 ? 500 : -500),
                behavior: 'smooth'
            })
        });
    }, [])
    
    return (
        <>
            <h2 className="my-0 text-xl font-bold tracking-wide text-white uppercase xl:text-lg md:my-5 ">Movies List</h2>
            <div className=""></div>
            <div ref={scrollHorizontal} className={"snap-x flex overflow-x-auto gap-5 pr-5 py-5 md:mb-0 mb-4 transition-all duration-75 scrollbar-hide"+(store.isFirstSelected ? ' pl-5 ' : '')}>
                {store.movies.map(movie => (
                    <div className="min-w-fit snap-end scroll-m-5" key={movie.id}>
                    <MovieCard image={image(movie.poster_path,"w500")} onClick={() => dispatch({
                        type: actionTypes.SELECT_MOVIE,
                        payload: movie
                    })} isSelected={movie.id === store.movieSelected.id} />
                    </div>
                ))}
            </div>  
        </>
    )
}

export default MovieCardList;