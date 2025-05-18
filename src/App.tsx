import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import { parseRoute, Route } from './utils/router';
import { Category } from './types/product';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>({ path: '/' });
  
  useEffect(() => {
    // Initialize with current URL
    const initialRoute = parseRoute(window.location.pathname);
    setCurrentRoute(initialRoute);
    
    // Add event listener for navigation events
    const handleNavigation = (event: CustomEvent<{ path: string }>) => {
      const newRoute = parseRoute(event.detail.path);
      setCurrentRoute(newRoute);
      
      // Update document title based on route
      updateDocumentTitle(newRoute);
    };
    
    window.addEventListener('navigation', handleNavigation as EventListener);
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      const newRoute = parseRoute(window.location.pathname);
      setCurrentRoute(newRoute);
      updateDocumentTitle(newRoute);
    });
    
    // Update initial title
    updateDocumentTitle(initialRoute);
    
    return () => {
      window.removeEventListener('navigation', handleNavigation as EventListener);
      window.removeEventListener('popstate', () => {});
    };
  }, []);
  
  const updateDocumentTitle = (route: Route) => {
    let title = 'ÉLÉGANCE | Premium Clothing';
    
    switch (route.path) {
      case '/':
        title = 'ÉLÉGANCE | Premium Clothing';
        break;
      case '/category/:category':
        const category = route.params?.category;
        if (category) {
          const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
          title = `${capitalizedCategory} | ÉLÉGANCE`;
        }
        break;
      case '/product/:id':
        title = 'Product | ÉLÉGANCE';
        break;
      case '/about':
        title = 'About | ÉLÉGANCE';
        break;
    }
    
    document.title = title;
  };
  
  const renderPage = () => {
    switch (currentRoute.path) {
      case '/':
        return <HomePage />;
      case '/category/:category':
        const category = currentRoute.params?.category as Category || 'all';
        return <CategoryPage category={category} />;
      case '/product/:id':
        const productId = parseInt(currentRoute.params?.id || '0', 10);
        return <ProductPage productId={productId} />;
      case '/about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;