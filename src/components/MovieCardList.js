import { image } from "../services/movies";
import MovieCard from "./MovieCard";

function MovieCardList() {
    return (
        <section>
            <h2 className="text-white uppercase font-bold tracking-wide text-lg my-5">Movie Card List</h2>
            <div className=""></div>
            <div className="snap-x flex overflow-x-auto gap-5 pr-5 pb-5 scrollbar-hide">
                {Array.from("___________").map(i => (
                    <div className="min-w-fit snap-end scroll-m-5">
                    <MovieCard image={image("2jVVDtDaeMxmcvrz2SNyhMcYtWc.jpg","w500")}/>
                    </div>
                ))}
            </div>  
        </section>
    )
}

export default MovieCardList;