import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts';

const BookForm: React.FC = () => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch({
            "type": "ADD_BOOK",
            payload: { title, author, id: Math.random() }
        })
        setTitle("");
        setAuthor("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required />
            <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
            />
            <input type="submit" value="Add Book" />
        </form>
    );
}

export default BookForm;