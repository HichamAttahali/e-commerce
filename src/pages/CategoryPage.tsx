import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Category, Product } from '../types/product';

interface CategoryPageProps {
  category: Category;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  
  useEffect(() => {
    let filtered = category === 'all' 
      ? [...products] 
      : products.filter(product => product.category === category);
    
    // Sort products
    switch(sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'featured':
      default:
        filtered = filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [category, sortBy]);
  
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const title = category === 'all' ? 'All Products' : capitalizedCategory;
  
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-serif font-semibold mb-3">{title}</h1>
        <p className="text-gray-600">Discover our collection of premium {category === 'all' ? 'products' : category}</p>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">{filteredProducts.length} products</p>
        
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-600">Sort by:</label>
          <select 
            id="sort" 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;