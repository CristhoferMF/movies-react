import MovieCardList from "../components/MovieCardList";
import MovieHeroBanner from "../components/MovieHeroBanner";
import { MovieSelectedProvider } from "../context/MovieSelected";

function MoviesPage() {
    return (
        <MovieSelectedProvider>
        <main className="h-screen overflow-y-auto">
        <div className="container mx-auto grid grid-rows-2 h-full px-3 xl:px-0 ">
            <section className="flex flex-col justify-end">
            <MovieHeroBanner/>
            </section>
            <section className="flex flex-col justify-center overflow-hidden">
            <MovieCardList/>
            </section>
        </div>
        </main>
        </MovieSelectedProvider>
    )
}

export default MoviesPage;