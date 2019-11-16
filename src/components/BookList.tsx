import React, { useContext } from 'react';
import { BookContext } from '../contexts';

import BookDetails from './BookDetails';
import Book from '../contexts/Book/Book';

const BookList: React.FC = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map((book: Book) => (
                    <BookDetails book={book}/>
                )) }
            </ul>
        </div>
    ) : (
        <div className="empty">No Books to Display</div>
    );
}

export default BookList;