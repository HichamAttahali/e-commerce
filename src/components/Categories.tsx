import React from 'react';
import { Link } from './Link';

const Categories: React.FC = () => {
  const categories = [
    {
      name: 'Women',
      image: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/category/women'
    },
    {
      name: 'Men',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/category/men'
    },
    {
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/category/accessories'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold mb-2 text-center">Shop by Category</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">Explore our collections curated for every style and occasion.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Link 
                  href={category.link}
                  className="bg-white py-3 px-8 text-lg font-medium transition-transform duration-300 transform group-hover:scale-110"
                >
                  {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;