import React from 'react';
import { Link } from './Link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">ÉLÉGANCE</h3>
            <p className="text-gray-600 mb-4">Premium clothing for the modern individual.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium uppercase text-sm tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/category/women" className="text-gray-600 hover:text-black">Women</Link></li>
              <li><Link href="/category/men" className="text-gray-600 hover:text-black">Men</Link></li>
              <li><Link href="/category/accessories" className="text-gray-600 hover:text-black">Accessories</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-600 hover:text-black">New Arrivals</Link></li>
              <li><Link href="/sale" className="text-gray-600 hover:text-black">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium uppercase text-sm tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link href="/sustainability" className="text-gray-600 hover:text-black">Sustainability</Link></li>
              <li><Link href="/stores" className="text-gray-600 hover:text-black">Stores</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-black">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium uppercase text-sm tracking-wider mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="/customer-service" className="text-gray-600 hover:text-black">Customer Service</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-black">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="text-gray-600 hover:text-black">Size Guide</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-black">FAQs</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; {currentYear} ÉLÉGANCE. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-600 hover:text-black text-sm">Terms & Conditions</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-black text-sm">Privacy Policy</Link>
              <Link href="/cookies" className="text-gray-600 hover:text-black text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;