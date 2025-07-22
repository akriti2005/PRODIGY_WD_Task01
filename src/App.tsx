import React from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';
import { ChevronDown, ArrowRight, Users, Zap, Shield, Heart } from 'lucide-react';

function App() {
  const features = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team members in real-time.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance across all devices.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security.',
    },
    {
      icon: Heart,
      title: 'User Focused',
      description: 'Designed with user experience as our top priority.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section
        id="home"
        title=""
        className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Navigation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience a modern navigation menu with smooth scroll effects, hover animations, 
            and responsive design that adapts beautifully to user interactions.
          </p>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-white/60" />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title="About Our Navigation"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This navigation menu demonstrates modern web development techniques with smooth 
              transitions, dynamic styling based on scroll position, and interactive hover effects 
              that enhance user experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built with React, TypeScript, and Tailwind CSS, it showcases responsive design 
              principles and accessibility best practices while maintaining elegant aesthetics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <IconComponent className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section
        id="services"
        title="Our Services"
        className="bg-white"
      >
        <div className="text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive web development services with a focus on modern design, 
            performance optimization, and exceptional user experience. Our navigation component 
            exemplifies our commitment to quality and attention to detail.
          </p>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section
        id="portfolio"
        title="Portfolio"
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of interactive components and modern web solutions. 
            This navigation menu is just one example of how we blend functionality with 
            beautiful design to create memorable user experiences.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Get In Touch"
        className="bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to enhance your website with interactive navigation and modern design? 
            Let's discuss how we can bring your vision to life with cutting-edge web technologies.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </Section>
    </div>
  );
}

export default App;