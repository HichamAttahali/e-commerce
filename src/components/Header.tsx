import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link href="/" className="text-2xl font-serif font-semibold tracking-wider">ÉLÉGANCE</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/category/women" className="nav-link">Women</Link>
            <Link href="/category/men" className="nav-link">Men</Link>
            <Link href="/category/accessories" className="nav-link">Accessories</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="icon-button">
              <Search size={20} />
            </button>
            <button aria-label="Favorites" className="icon-button">
              <Heart size={20} />
            </button>
            <button aria-label="Account" className="icon-button">
              <User size={20} />
            </button>
            <button aria-label="Cart" className="icon-button relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-serif font-semibold tracking-wider">ÉLÉGANCE</Link>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-lg">
            <Link href="/" className="py-2 border-b border-gray-100">Home</Link>
            <Link href="/category/women" className="py-2 border-b border-gray-100">Women</Link>
            <Link href="/category/men" className="py-2 border-b border-gray-100">Men</Link>
            <Link href="/category/accessories" className="py-2 border-b border-gray-100">Accessories</Link>
            <Link href="/about" className="py-2 border-b border-gray-100">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;