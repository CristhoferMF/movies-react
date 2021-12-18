import MovieCardList from "../components/MovieCardList";
import MovieHeroBanner from "../components/MovieHeroBanner";
import { MovieSelectedProvider } from "../context/MovieSelected";

function MoviesPage() {
    return (
        <>
        <main className="h-screen overflow-y-auto">
        <div className="container mx-auto grid grid-rows-2 h-full">
        <MovieSelectedProvider>
            <section className="flex flex-col justify-end">
            <MovieHeroBanner/>
            </section>
            <section className="flex flex-col justify-center">
            <MovieCardList/>
            </section>
        </MovieSelectedProvider>
        </div>
        </main>
        </>
    )
}

export default MoviesPage;