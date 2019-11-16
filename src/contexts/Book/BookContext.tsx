import React, { useEffect, useReducer, createContext } from 'react';
// Interfaces
import Book from './Book';
import { BookAction } from './BookAction';

interface IBookContextState {
    books: Array<Book>,
}

const initialState: IBookContextState = {
    books: [
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ]
}
export const BookContext = createContext<IBookContextProviderState>({ books: initialState.books, dispatch: ()=>{} });

const bookReducer = (state: IBookContextState, action: BookAction): IBookContextState => {
    switch(action.type) {
        case 'ADD_BOOK':
            return { ...state, books: [...state.books, action.payload]}
        case 'REMOVE_BOOK':
            return {...state, books: state.books.filter(book => book.id !== action.payload.id)}
        }
}
interface IBookContextProviderState {
    books: Array<Book>;
    dispatch: React.Dispatch<BookAction>;
}
interface IBookContentProviderProps {
    children: React.ReactNodeArray | React.ReactNode
}
export const BookContextProvider: React.FC<IBookContentProviderProps> = props => {
    const [ books, dispatch ] = useReducer(bookReducer, initialState, (): IBookContextState => {
        const localData = window.localStorage.getItem('books');
        return {
            ...initialState,
            books: localData ? JSON.parse(localData) : []
        };
    });
    useEffect(() => {
        window.localStorage.setItem('books', JSON.stringify(books.books));
    }, [books])
    return <BookContext.Provider value={{ books: books.books, dispatch }}>
        { props.children }
    </BookContext.Provider>

}