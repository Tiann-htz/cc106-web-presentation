import React from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, Leaf, Cloud, Sun, Droplets } from 'lucide-react';

const LandingPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/diagram');
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        <div className="text-center space-y-8">
          <div className="flex flex-col items-center space-y-4 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 animate-slideDown">
              AgriTech
            </h2>
            <div className="flex justify-center space-x-2">
              <Leaf className="text-green-600 h-8 w-8 animate-bounce" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 animate-slideDown">
                Smart Agriculture System
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn opacity-0 [animation-delay:400ms]">
            Transform your farming with intelligent monitoring, automated systems, and data-driven insights
          </p>

          <button 
            onClick={handleGetStarted}
            className="group relative bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold 
                     transition-all duration-200 flex items-center mx-auto overflow-hidden animate-fadeIn opacity-0 [animation-delay:600ms]"
          >
            {/* Shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
                        animate-slideUp opacity-0 [animation-delay:800ms]">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Cloud className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Weather Monitoring</h3>
            <p className="text-gray-600">Real-time weather data and predictive analytics for optimal crop management</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
                        animate-slideUp opacity-0 [animation-delay:1000ms]">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Sun className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Irrigation</h3>
            <p className="text-gray-600">Automated watering systems based on soil moisture and environmental conditions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
                        animate-slideUp opacity-0 [animation-delay:1200ms]">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Droplets className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Crop Health</h3>
            <p className="text-gray-600">Advanced sensors and AI to monitor and optimize crop health and yield</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;