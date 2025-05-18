import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Update URL without page reload
    window.history.pushState({}, '', href);
    
    // Dispatch a custom event that the App component can listen for
    window.dispatchEvent(new CustomEvent('navigation', { detail: { path: href } }));
    
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <a 
      href={href} 
      className={`hover:opacity-70 transition-opacity ${className}`} 
      onClick={handleClick}
    >
      {children}
    </a>
  );
};