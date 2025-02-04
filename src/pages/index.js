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
          <div className="flex justify-center space-x-2 mb-6">
            <Leaf className="text-green-600 h-8 w-8" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Smart Agriculture System
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your farming with intelligent monitoring, automated systems, and data-driven insights
          </p>

          <button 
            onClick={handleGetStarted}
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 flex items-center mx-auto"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Cloud className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Weather Monitoring</h3>
            <p className="text-gray-600">Real-time weather data and predictive analytics for optimal crop management</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Sun className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Irrigation</h3>
            <p className="text-gray-600">Automated watering systems based on soil moisture and environmental conditions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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