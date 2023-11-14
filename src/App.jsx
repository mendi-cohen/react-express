import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [books, setBooks] = useState([]); 

  async function fetchBooks() {
    try {
      const response = await fetch("http://localhost:3001/AllBooks");
      const booksData = await response.json();
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={fetchBooks}>
        Get the Books!
      </button>
      
      <div>
        {books.map((book, index) => (

          <div key={index}>
            <h3>name: {book.name}  id: {book.id} author : {book.author}</h3>
          </div>
        ))}
         
      </div>

        

    </div>
  );
}

export default App;
