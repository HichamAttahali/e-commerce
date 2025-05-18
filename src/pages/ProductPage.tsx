import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { Product } from '../types/product';
import { ShoppingBag, Heart } from 'lucide-react';
import { Link } from '../components/Link';
import FeaturedProducts from '../components/FeaturedProducts';

interface ProductPageProps {
  productId: number;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API fetch with a small delay
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === productId);
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        setSelectedColor(foundProduct.colors[0]);
        setSelectedSize(foundProduct.sizes[0]);
      }
      
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [productId]);
  
  if (isLoading) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 flex justify-center items-center min-h-[50vh]">
        <p>Loading product...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 flex flex-col items-center min-h-[50vh]">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="btn-primary">Return to Home</Link>
      </div>
    );
  }
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(product.price);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Link 
                href={`/category/${product.category}`} 
                className="text-sm text-gray-500 uppercase tracking-wider"
              >
                {product.category}
              </Link>
            </div>
            
            <h1 className="text-3xl font-medium mb-3">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">{formattedPrice}</p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border ${
                      selectedColor === color 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-400'
                    } transition-colors`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Size: <span className="font-normal">{selectedSize}</span></h3>
                <Link href="/size-guide" className="text-sm underline">Size Guide</Link>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] px-3 py-2 border ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-400'
                    } transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-300 w-32">
                <button 
                  className="px-3 py-2 text-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-full p-2 text-center border-x border-gray-300 focus:outline-none"
                />
                <button 
                  className="px-3 py-2 text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 py-3 px-6 bg-black text-white font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <ShoppingBag size={18} />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 hover:border-gray-400 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            
            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4 text-gray-600 text-sm">
              <p>Free shipping on orders over $100</p>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* You may also like section */}
      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductPage;