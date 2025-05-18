import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-semibold mb-10 text-center">About ÉLÉGANCE</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl mb-6 text-center font-serif">
            Premium clothing for the modern individual, crafted with quality and sustainability in mind.
          </p>
          
          <p className="mb-4">
            Founded in 2020, ÉLÉGANCE was born from a passion for timeless style and quality craftsmanship. 
            Our mission is to create clothing that not only looks exceptional but is made to last, 
            combining classic aesthetics with contemporary design.
          </p>
          
          <p className="mb-4">
            We believe in the power of simplicity and the beauty of well-crafted essentials. Each piece in 
            our collection is thoughtfully designed with attention to detail, using premium materials 
            sourced from ethical suppliers around the world.
          </p>
          
          <p>
            At ÉLÉGANCE, sustainability is not just a buzzword—it's a commitment. We strive to minimize our 
            environmental impact by implementing responsible manufacturing practices and choosing eco-friendly 
            materials whenever possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Craft</h2>
            <p className="mb-4">
              Every garment we create passes through the hands of skilled artisans who take pride in their craft. 
              From pattern-making to the final stitch, we ensure that each step in our process meets our exacting standards.
            </p>
            <p>
              We work with a select group of manufacturers who share our values of quality, fairness, and attention to detail. 
              By fostering these long-term relationships, we can ensure consistent quality while supporting ethical working conditions.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col justify-center md:order-2">
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li>
                <strong className="block mb-1">Quality:</strong>
                <p>We never compromise on materials or craftsmanship, ensuring that each piece stands the test of time.</p>
              </li>
              <li>
                <strong className="block mb-1">Sustainability:</strong>
                <p>From materials to manufacturing, we strive to make choices that minimize our environmental footprint.</p>
              </li>
              <li>
                <strong className="block mb-1">Transparency:</strong>
                <p>We believe in honest communication about our products, pricing, and processes.</p>
              </li>
              <li>
                <strong className="block mb-1">Inclusivity:</strong>
                <p>Our designs are created with diverse body types and individuals in mind.</p>
              </li>
            </ul>
          </div>
          <div className="aspect-[4/3] overflow-hidden md:order-1">
            <img 
              src="https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Sustainable materials" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;