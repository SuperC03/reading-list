import React, { useContext } from 'react';
import { BookContext } from '../contexts'

const Navbar: React.FC = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Coli-Reading List</h1>
            <p>Currently You Have { `${books.length} ${books.length !== 1 ? 'books' : 'book'}` }</p>
        </div>
    );
}

export default Navbar;