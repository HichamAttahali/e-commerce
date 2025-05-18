import React from 'react';
import { featuredProducts } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-serif font-semibold mb-2 text-center">Featured Collection</h2>
      <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">Discover our carefully curated selection of premium clothing and accessories.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;