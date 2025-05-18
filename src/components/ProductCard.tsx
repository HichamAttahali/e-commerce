import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types/product';
import { Link } from './Link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, name, price, image, category, isNew } = product;
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(price);
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* New tag */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 font-medium">
            NEW
          </div>
        )}
        
        {/* Quick action buttons */}
        <div 
          className={`absolute bottom-0 inset-x-0 flex justify-center space-x-2 p-4 bg-white/90 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button 
            className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
          <button 
            className="flex items-center gap-2 py-2 px-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag size={16} />
            <span className="text-sm font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4 space-y-1">
        <Link 
          href={`/product/${id}`} 
          className="text-sm text-gray-500 uppercase tracking-wider"
        >
          {category}
        </Link>
        <h3 className="font-medium">
          <Link href={`/product/${id}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        <p className="font-medium">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;