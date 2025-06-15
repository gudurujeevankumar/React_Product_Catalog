import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
    {products.length === 0 ? (
      <p>No products found.</p>
    ) : (
      products.map(product => <ProductCard key={product.id} product={product} />)
    )}
  </div>
);

export default ProductList;
