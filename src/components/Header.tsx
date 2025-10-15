import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  navigateTo: (page: string) => void;
}

export default function Header({ navigateTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <div className="relative">
              <Heart className="w-10 h-10 text-blue-600 fill-blue-600" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-white rotate-45"></div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                <span className="text-orange-500">Shenfield</span>
              </div>
              <div className="text-xl font-bold text-orange-500">Private GP</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateTo('home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md">
              Book Appointment
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => { navigateTo('services'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Services
            </button>
            <button className="w-full bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
