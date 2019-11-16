// React Stuff
import React from 'react';
// Context Providers
import { BookContextProvider } from './contexts';
import { Navbar } from './layout';
import { BookList, BookForm } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;