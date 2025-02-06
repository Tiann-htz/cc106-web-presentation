import React from 'react';
import { 
  Shield, 
  Wifi, 
  Scale, 
  Battery, 
  Database, 
  Brain,
} from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <Shield className="w-8 h-8 text-red-400 group-hover:text-red-500 transition-all duration-500" />,
      title: "Security",
      challenge: "Risk of data breaches and unauthorized access",
      solution: "Use encryption, multi-factor authentication, regular security audits, and access control to safeguard data",
      delay: 100,
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-400 group-hover:text-blue-500 transition-all duration-500" />,
      title: "Connectivity",
      challenge: "Poor internet in remote farming areas",
      solution: "Use LPWAN technologies like LoRaWAN, implement edge computing, and enable offline mode for the mobile app",
      delay: 200,
    },
    {
      icon: <Scale className="w-8 h-8 text-purple-400 group-hover:text-purple-500 transition-all duration-500" />,
      title: "Scalability",
      challenge: "Managing increasing data and sensors as farms grow",
      solution: "Leverage scalable cloud platforms, data aggregation techniques, and modular sensor networks",
      delay: 300,
    },
    {
      icon: <Battery className="w-8 h-8 text-yellow-400 group-hover:text-yellow-500 transition-all duration-500" />,
      title: "Power Management",
      challenge: "Limited access to power in remote areas for sensors",
      solution: "Use solar-powered sensors, energy-efficient devices, and battery monitoring for proactive maintenance",
      delay: 400,
    },
    {
      icon: <Database className="w-8 h-8 text-green-400 group-hover:text-green-500 transition-all duration-500" />,
      title: "Data Accuracy",
      challenge: "Inaccurate sensor data over time",
      solution: "Regular sensor calibration, redundancy in sensors, and machine learning for data correction",
      delay: 500,
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-all duration-500" />,
      title: "Decision Fatigue",
      challenge: "Overwhelming amount of data",
      solution: "Automated alerts, actionable insights, and clear data visualizations to help farmers make informed decisions",
      delay: 600,
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="text-center mb-12 animate-slideDown">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-300 via-green-400 to-green-300 bg-clip-text text-transparent mb-4 pb-4">
          Challenges & Solutions
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Addressing key challenges in smart agriculture with innovative solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {challenges.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden"
            style={{
              animation: `fadeIn 0.6s ease-out forwards`,
              animationDelay: `${item.delay}ms`,
              opacity: 0,
            }}
          >
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 
                          border border-white/20 transition-all duration-500 ease-out
                          hover:scale-105 hover:shadow-2xl hover:shadow-white/10
                          hover:border-white/30 hover:from-white/15 hover:via-white/10 hover:to-white/15">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            opacity-0 group-hover:opacity-100 transform -skew-x-12 
                            group-hover:animate-shine transition-opacity duration-500" />
              
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/10 rounded-xl mr-4 transform transition-all duration-500 
                              group-hover:bg-white/15 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-500">
                  {item.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 font-semibold">Challenge:</span>
                  <p className="text-white/90 transition-colors duration-500 group-hover:text-white">
                    {item.challenge}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-semibold">Solution:</span>
                  <p className="text-white/90 transition-colors duration-500 group-hover:text-white">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesSection;