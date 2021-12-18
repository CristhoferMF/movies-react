import  { createContext, useReducer } from 'react'
import { initialStore, reducer } from '../stores/StoreMovieSelected';

export const MovieSelected = createContext();

export const MovieSelectedProvider = ({children}) => {

    const [ store, dispatch ] = useReducer(reducer, initialStore);

    return (
        <MovieSelected.Provider value={[store, dispatch]}>
            {children}
        </MovieSelected.Provider>
    )
}
