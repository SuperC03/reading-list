import React, { useContext } from 'react';
// Interfaces
import Book from '../contexts/Book/Book';
import { BookContext } from '../contexts';

interface IBookDetailsProps {
    book: Book
}
const BookDetails: React.FC<IBookDetailsProps> = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_BOOK', payload: book })}>
            <div className="title">{ book.title.toLocaleUpperCase() }</div>
            <div className="author">{ book.author.toLocaleUpperCase() }</div>
        </li>
    );
}

export default BookDetails;