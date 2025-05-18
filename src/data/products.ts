import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wool Blend Coat',
    category: 'women',
    price: 299,
    image: 'https://images.pexels.com/photos/7691168/pexels-photo-7691168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Black', 'Camel', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isFeatured: true,
    description: 'A timeless wool blend coat perfect for colder seasons. Features a classic silhouette with notched lapels and a button closure.'
  },
  {
    id: 2,
    name: 'Cotton T-shirt',
    category: 'men',
    price: 49,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['White', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    description: 'Premium cotton t-shirt with a relaxed fit. Essential for everyday wear.'
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    category: 'accessories',
    price: 129,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['One Size'],
    isNew: true,
    description: 'Handcrafted leather crossbody bag with adjustable strap and multiple compartments.'
  },
  {
    id: 4,
    name: 'Silk Blouse',
    category: 'women',
    price: 119,
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Ivory', 'Black', 'Blush'],
    sizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    description: 'Luxurious silk blouse with a relaxed fit and classic collar. Versatile for both casual and formal occasions.'
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    category: 'men',
    price: 89,
    image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Mid Blue', 'Dark Blue', 'Black'],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Classic slim fit jeans made from premium denim with a touch of stretch for comfort.'
  },
  {
    id: 6,
    name: 'Cashmere Scarf',
    category: 'accessories',
    price: 79,
    image: 'https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Grey', 'Camel', 'Burgundy'],
    sizes: ['One Size'],
    isNew: true,
    description: 'Ultra-soft cashmere scarf to add warmth and elegance to any outfit.'
  },
  {
    id: 7,
    name: 'Tailored Blazer',
    category: 'women',
    price: 199,
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Black', 'Navy', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sophisticated tailored blazer that easily transitions from office to evening.'
  },
  {
    id: 8,
    name: 'Oxford Shirt',
    category: 'men',
    price: 79,
    image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['White', 'Light Blue', 'Pink', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    description: 'Classic Oxford shirt made from premium cotton with a button-down collar.'
  },
  {
    id: 9,
    name: 'Leather Belt',
    category: 'accessories',
    price: 59,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Black', 'Brown'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Handcrafted leather belt with a classic buckle. A timeless accessory for any outfit.'
  },
  {
    id: 10,
    name: 'Pleated Midi Skirt',
    category: 'women',
    price: 89,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Black', 'Camel', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    description: 'Elegant pleated midi skirt that adds sophistication to any look.'
  },
  {
    id: 11,
    name: 'Merino Wool Sweater',
    category: 'men',
    price: 129,
    image: 'https://images.pexels.com/photos/6764051/pexels-photo-6764051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Navy', 'Grey', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium merino wool sweater offering warmth without bulk. Perfect for layering.'
  },
  {
    id: 12,
    name: 'Leather Watch',
    category: 'accessories',
    price: 189,
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Black/Silver', 'Brown/Gold'],
    sizes: ['One Size'],
    isFeatured: true,
    description: 'Timeless leather watch with a minimalist face design. A perfect complement to any outfit.'
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newArrivals = products.filter(product => product.isNew);