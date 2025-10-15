import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { services } from '../data/services';

interface ServiceDetailPageProps {
  service: string | null;
  navigateTo: (page: string) => void;
}

export default function ServiceDetailPage({ service: serviceId, navigateTo }: ServiceDetailPageProps) {
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <button
            onClick={() => navigateTo('services')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo('services')}
            className="flex items-center space-x-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </button>
          <div className="flex items-center space-x-3 mb-4">
            <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
              {service.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{service.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Service?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our {service.name.toLowerCase()} service is delivered by experienced healthcare professionals who are committed to providing the highest standard of care. We use the latest medical techniques and equipment to ensure you receive safe, effective treatment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All consultations are conducted in a comfortable, confidential environment where you can discuss your health concerns openly. We take the time to listen to your needs and develop a personalized treatment plan that works for you.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Service Details</h3>
                <div className="space-y-4 mb-6">
                  {service.duration && (
                    <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                    </div>
                  )}
                  {service.price && (
                    <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Price</div>
                        <div className="font-semibold text-gray-900">{service.price}</div>
                      </div>
                    </div>
                  )}
                </div>
                <button className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg mb-3">
                  Book Appointment
                </button>
                <button className="w-full bg-white text-blue-600 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all border-2 border-blue-600">
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards better health.
          </p>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
