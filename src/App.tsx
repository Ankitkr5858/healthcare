import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const navigateTo = (page: string, service?: string) => {
    setCurrentPage(page);
    if (service) {
      setSelectedService(service);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} />;
      case 'service-detail':
        return <ServiceDetailPage service={selectedService} navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
