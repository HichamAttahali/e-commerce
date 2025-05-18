import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would typically connect to an API
      setIsSubmitted(true);
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold mb-3">Join Our Newsletter</h2>
          <p className="mb-8 text-gray-300">Subscribe to receive updates on new arrivals, special offers and exclusive events.</p>
          
          {isSubmitted ? (
            <div className="p-4 bg-white/10 rounded">
              <p className="text-lg">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-white/10 border border-gray-700 focus:border-white transition-colors rounded-md text-white placeholder-gray-400"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-gray-900 font-medium hover:bg-gray-200 transition-colors rounded-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;