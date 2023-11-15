import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([]); 

  async function fetchBooks() {
      const response = await fetch("http://localhost:3001/Products/");
      const productsData = await response.json();
      setProducts(productsData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={fetchBooks}>
        Get the Products!
      </button>

      {/* אם אני מבקש את המערך כולו  */}
      <div>

      <div className='flex'>

      

        {products.map((product, index) => (
          <div key={index} className='grid'>
            
            <h1 className='grid-son-1'>  id:  </h1> <h2 className='grid-son-2'>{product.id}</h2>  
            <h1 className='grid-son-1'> title: </h1>    <h2 className='grid-son-2'>{product.title} </h2> 
            <h1 className='grid-son-1'> price: </h1> <h2 className='grid-son-2'>{product.price} </h2>
            
          </div>
        ))}
         
      </div>
      </div>

      {/* אם אני לוקח רק אחד /*}

      {/* <div>
        {products.title}
      </div> */}
        

    </div>
  );
}

export default App;
