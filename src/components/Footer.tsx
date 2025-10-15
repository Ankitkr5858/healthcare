import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Heart className="w-10 h-10 text-blue-600 fill-blue-600" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-slate-800 rotate-45"></div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-orange-500">Shenfield</span>
                </div>
                <div className="text-lg font-bold text-orange-500">Private GP</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing exceptional private healthcare services with a focus on personalized care and professional excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">020 1234 5678</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">info@shenfieldgp.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Shenfield, Essex, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shenfield Private GP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
