import { Heart, Clock, Calendar, Stethoscope, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react';

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const journeySteps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'Start your journey with a complimentary consultation to understand your health needs and discuss how we can help you achieve your wellness goals.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: '02',
      title: 'Patient Onboarding',
      description: 'Complete your registration and meet your dedicated GP team. We\'ll gather your medical history and set up your personalized health profile.',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: '03',
      title: 'Health Screening',
      description: 'Undergo a comprehensive health assessment including blood tests, ECG, and physical examination to establish your baseline health metrics.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: '04',
      title: 'Personalized Health Plan',
      description: 'Receive your detailed results and a tailored health plan designed specifically for you, with ongoing support from your dedicated care team.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Same Day Appointments',
      description: 'Book and see your GP on the same day when you need care most'
    },
    {
      icon: Clock,
      title: '30-Minute Consultations',
      description: 'Extended appointment times to thoroughly discuss your health'
    },
    {
      icon: Stethoscope,
      title: 'Dedicated GP Team',
      description: 'Your own personal doctor who knows your complete medical history'
    },
    {
      icon: Users,
      title: 'Family Care',
      description: 'Comprehensive healthcare for you and your entire family'
    },
    {
      icon: Heart,
      title: 'Annual Health Screening',
      description: 'Proactive health monitoring with comprehensive yearly check-ups'
    },
    {
      icon: CheckCircle2,
      title: 'No Waiting Times',
      description: 'Access healthcare when you need it without the wait'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Patient since 2022',
      content: 'The level of care and attention I receive is exceptional. My GP actually takes time to listen and provides thoughtful, personalized advice.',
      rating: 5
    },
    {
      name: 'James Robertson',
      role: 'Patient since 2021',
      content: 'Finally found a healthcare service that puts patients first. Same-day appointments and 30-minute consultations make all the difference.',
      rating: 5
    },
    {
      name: 'Emily Thompson',
      role: 'Patient since 2023',
      content: 'The comprehensive health screening caught issues early. The proactive approach to healthcare has been life-changing for me and my family.',
      rating: 5
    }
  ];

  const trustLogos = ['BBC', 'The Times', 'ITV', 'Manchester Evening News'];

  return (
    <div className="bg-white">
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.mygpclinic.co.uk/wp-content/uploads/2024/08/landing-page-video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                A Private GP Clinic, <span className="text-orange-500">designed around you</span>
              </h1>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <p className="text-xl text-white">No waiting times</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <p className="text-xl text-white">Same day appointments</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <p className="text-xl text-white">Dedicated GP & concierge team</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg text-lg">
                  Book Free Consultation
                </button>
                <button
                  onClick={() => navigateTo('services')}
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg text-lg"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-6 font-medium">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Journey to Better Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a seamless four-step process to ensure you receive exceptional, personalized healthcare from day one
            </p>
          </div>

          <div className="space-y-20">
            {journeySteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block bg-blue-600 text-white text-2xl font-bold px-6 py-2 rounded-full mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Shenfield Private GP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare that's truly centered around your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied patients who trust Shenfield Private GP for their healthcare needs. Book your free consultation today and discover the difference personalized care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg text-lg">
              Book Free Consultation
            </button>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg text-lg">
              Call Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
