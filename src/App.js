import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title?.toLowerCase().includes(search.toLowerCase()) || product.name?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container">
      <Header>
        <div className="header-left">
          <h1 className="header-title">Product Catalog</h1>
        </div>
        <div className="header-middle">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="header-right">
          <FilterOptions categories={categories} selected={category} setSelected={setCategory} />
        </div>
      </Header>
      <main className="main-content">
        {loading ? (
          <p className="loading-text">Loading products...</p>
        ) : error ? (
          <p className="error-text">Error: {error}</p>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
