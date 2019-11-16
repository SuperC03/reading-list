import Book from "./Book";

export type BookAction =
    | { type: 'ADD_BOOK', payload: Book }
    | { type: 'REMOVE_BOOK', payload: Book}