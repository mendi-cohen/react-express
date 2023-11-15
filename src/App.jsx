import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([]); 

  async function fetchBooks() {
    try {
      const response = await fetch("http://localhost:3001/Products/");
      const productsData = await response.json();
      setProducts(productsData);
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

      {/* אם אני מבקש את המערך כולו  */}
      <div>
        {products.map((product, index) => (

          <div key={index}>
            <h1>  id: {product.id} price: {product.price}</h1>
          </div>
        ))}
         
      </div>

      {/* אם אני לוקח רק אחד /*}

      {/* <div>
        {products.title}
      </div> */}
        

    </div>
  );
}

export default App;
