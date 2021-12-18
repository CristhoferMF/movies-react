export const initialStore = {
    movies: [],
    movieSelected: {},
    isFirstSelected: true,
}

export const actionTypes = {
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    SELECT_MOVIE: 'SELECT_MOVIE',
}

export const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
            }
        case actionTypes.SELECT_MOVIE:
            const position = state.movies.indexOf(action.payload);
            return {
                ...state,
                movieSelected: action.payload,
                isFirstSelected: position === 0,
            }
        default:
            return {...state}
    }
}