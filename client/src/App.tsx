import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import ProductList from './components/ProductList';
import Product from './schema/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let shouldCancel = false;
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (shouldCancel) return;
        setProducts(data);
      }
      catch (err) {
        throw err;
      }
    }
    fetchProducts();
    return () => { shouldCancel = true }
  })

  return (
    <div className='m-10'>
      <ProductList products={products} />
    </div>
  );
}

export default App;
