import React from 'react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full bg-cover bg-center flex items-center" 
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/1304642/pexels-photo-1304642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">New Autumn Collection</h1>
          <p className="text-lg mb-8">Discover timeless elegance with our latest arrivals.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/category/women" className="btn-primary">Shop Women</Link>
            <Link href="/category/men" className="btn-secondary">Shop Men</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;