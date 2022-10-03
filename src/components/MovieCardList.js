import { useContext, useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { MovieSelected } from "../context/MovieSelected";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import { getMovies, image } from "../services/movies";
import { actionTypes } from "../stores/StoreMovieSelected";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import MovieCard from "./MovieCard";

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function RightArrow({ setNextPage }) {
  const { isLastItemVisible, scrollContainer } = useContext(VisibilityContext);

  useEffect(() => {
    console.log("changin", isLastItemVisible);
    if (isLastItemVisible) {
      setNextPage();
    }
  }, [isLastItemVisible]);

  return <></>;
}

function MovieCardList() {
  const [store, dispatch] = useContext(MovieSelected);
  const [page, setPage] = useState(1);

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  useEffect(() => {
    getMovies({ page }).then((data) => {
      if (data.status === 200) {
        dispatch({
          type: actionTypes.FETCH_MOVIES_SUCCESS,
          payload: [...store.movies, ...data.data.results],
        });
        if (page === 1) {
          dispatch({
            type: actionTypes.SELECT_MOVIE,
            payload: data.data.results[0],
          });
        }
      }
    });
  }, [dispatch, page]);

  return (
    <>
      <h2 className="my-0 text-xl font-bold tracking-wide text-white uppercase xl:text-lg md:my-5 ">
        Movies List
      </h2>
      <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu
          onWheel={onWheel}
          itemClassName="scroll-m-5 min-w-fit px-2"
          RightArrow={<RightArrow setNextPage={() => setPage(page + 1)} />}
          scrollContainerClassName={
            "pr-5 py-5 md:mb-0 mb-4 transition-all duration-75 scrollbar-hide" +
            (store.isFirstSelected ? " pl-5 " : "")
          }
        >
          {store.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              image={image(movie.poster_path, "w500")}
              onClick={() =>
                dispatch({
                  type: actionTypes.SELECT_MOVIE,
                  payload: movie,
                })
              }
              isSelected={movie.id === store.movieSelected.id}
            />
          ))}
        </ScrollMenu>
      </div>
    </>
  );
}

export default MovieCardList;
