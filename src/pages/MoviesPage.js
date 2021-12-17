import MovieBackground from "../components/MovieBackground";
import MovieCardList from "../components/MovieCardList";

function MoviesPage() {
    return (
        <>
        <MovieBackground/>
        <main className="h-screen overflow-y-auto">
        <div className="container mx-auto grid grid-rows-2 h-full">
            <section>
            <h1>Test Pagina movies</h1>
            </section>
            <section className="flex flex-col justify-center">
            <MovieCardList/>
            </section>
        </div>
        </main>
        </>
    )
}

export default MoviesPage;