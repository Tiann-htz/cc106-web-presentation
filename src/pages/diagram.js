import React from 'react';
import { useModal } from '../context/ModalContext';
import { ModalProvider } from '../context/ModalContext';
import InfoModal from '../components/InfoModal';
import TeamMembers from '../components/TeamMembers';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  LandPlot, 
  Cloud, 
  Cpu, 
  Leaf 
} from 'lucide-react';

const Card = ({ icon, title, subtitle, description }) => {
  const { openModal } = useModal();

  const handleCardClick = () => {
    openModal({ icon, title, subtitle, description });
  };

  return (
    <div 
      className="bg-white/90 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-200 
                  hover:bg-gradient-to-br hover:from-green-200 hover:to-green-100 
                  hover:border-green-400 hover:shadow-xl
                  transition-all duration-300 transform hover:-translate-y-2 group w-full max-w-xs
                  cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex justify-center mb-4 text-4xl transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-green-700 font-bold text-lg md:text-xl text-center mb-2 group-hover:text-green-600">
        {title}
      </h3>
      <p className="text-green-600 text-center text-sm md:text-base group-hover:text-green-500">
        {subtitle}
      </p>
    </div>
  );
};

const DiagramPage = () => {
  const sensorData = [
    {
      icon: '🌡️',
      title: 'Soil Sensors',
      subtitle: 'Moisture • pH • Nutrients • Temperature',
      description: 'Soil sensors play a crucial role in monitoring soil conditions and ensuring optimal plant growth. These sensors provide real-time data that helps farmers make precise decisions about irrigation, fertilization, and crop health management. They include moisture sensors to prevent overwatering, pH sensors to maintain optimal acidity, nutrient sensors to optimize fertilizer use, and temperature sensors to determine the best growing conditions.'
    },
    {
      icon: '🌤️',
      title: 'Weather Station',
      subtitle: 'Rainfall • Humidity • Wind Speed',
      description: 'A weather station is a crucial IoT device in a Smart Agriculture System, designed to collect real-time meteorological data. It consists of rainfall sensors to manage irrigation, humidity sensors to predict plant disease risks, and wind speed sensors to assess potential crop damage and prevent soil erosion. By integrating weather stations with IoT technology, farmers can access remote weather data and enable automated responses.'
    },
    {
      icon: '🛸',
      title: 'Drones',
      subtitle: 'Aerial Imaging & Mapping',
      description: 'Drones play a transformative role in Smart Agriculture Systems by providing high-resolution aerial imaging and mapping. Equipped with advanced cameras and sensors, they capture real-time images to detect crop stress, pest infestations, and nutrient deficiencies. They generate detailed 3D maps of fields, enabling precision agriculture by identifying variations in soil, water distribution, and crop density.'
    },
    {
      icon: '💧',
      title: 'Actuators',
      subtitle: 'Smart Irrigation System',
      description: 'Actuators are essential components in a Smart Irrigation System, enabling automated control of water distribution based on real-time soil and weather data. They include automated valves to control water flow, smart sprinkler systems, drip irrigation controllers, and motorized pumps. By integrating IoT-connected actuators with sensors, the system minimizes water waste, reduces costs, and improves crop health.'
    }
  ];

  const systemComponents = [
    {
      icon: '🌱',
      title: 'Field Environment',
      subtitle: 'Agricultural Field Monitoring',
      description: 'Field Environment Monitoring refers to the continuous tracking and analysis of key environmental conditions in an agricultural field. By utilizing IoT sensors, weather stations, and data analytics, the system provides real-time insights to farmers, helping them make informed decisions about irrigation, fertilization, and pest control.'
    },
    {
      icon: '☁️',
      title: 'Cloud Platform',
      subtitle: 'Data Storage • Processing • ML Analysis',
      description: 'A Cloud Platform serves as the backbone of a Smart Agriculture System, enabling collection, storage, and analysis of large-scale farming data. It securely stores IoT device data, processes agricultural information, and uses machine learning algorithms to predict weather patterns, detect crop diseases, and optimize farming strategies.'
    },
    {
      icon: '📱',
      title: 'Mobile Application',
      subtitle: 'Dashboard • Alerts • Control • Insights',
      description: 'The Mobile Application serves as a farmer\'s digital assistant, providing a user-friendly interface to monitor and control the Smart Agriculture System. It offers real-time dashboards, instant alerts about field conditions, remote control of irrigation systems, and AI-powered insights for optimal farming decisions.'
    },
    {
      icon: '👨‍🌾',
      title: 'Farmer Interface',
      subtitle: 'Decision Support System',
      description: 'The Farmer Interface is a user-friendly Decision Support System designed to help farmers make informed, data-driven decisions effortlessly. By integrating IoT sensors, drones, weather stations, and cloud analytics, the system provides valuable insights in an easy-to-understand format.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-green-900 text-white">
      {/* Header with Dropdown Explanation */}
      <div className="bg-gradient-to-r from-green-700/70 to-green-900/70 backdrop-blur-md px-5 py-8 md:py-12 text-center rounded-b-[30px] shadow-lg shadow-green-800 relative overflow-hidden mb-8 md:mb-16">
        {/* Added AgriTech Title */}
        <h2 className="text-green-300 text-2xl md:text-3xl font-bold mb-4 animate-fadeIn relative z-10">
          AgriTech
        </h2>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fadeIn relative z-10">
          Smart Agriculture System
        </h1>
        <div className="text-white/90 text-lg md:text-xl mt-4 animate-fadeIn relative z-10">
          Complete Monitoring and Mobile Alerts
        </div>
        
        {/* Dropdown Explanation */}
        <div className="max-w-2xl mx-auto mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="explanation">
              <AccordionTrigger className="text-white hover:text-green-300 justify-center">
                Learn More About the System
              </AccordionTrigger>
              <AccordionContent className="bg-white/10 text-white p-6 rounded-b-xl text-left">
                <div className="flex items-start space-x-4 mb-4">
                  <LandPlot className="w-10 h-10 text-green-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">What is Smart Agriculture?</h3>
                    <p>
                      A technology-driven solution designed to optimize farming practices by integrating IoT devices, cloud computing, machine learning, and data analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Leaf className="w-10 h-10 text-green-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Key Benefits</h3>
                    <ul className="list-disc list-inside">
                      <li>Improve crop yields</li>
                      <li>Reduce resource wastage</li>
                      <li>Enhance sustainability</li>
                      <li>Boost overall agricultural efficiency</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Cloud className="w-10 h-10 text-green-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Core Technologies</h3>
                    <p>
                      Leveraging cutting-edge technologies including Internet of Things (IoT), cloud computing, machine learning, and advanced data analytics to transform traditional farming practices.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Rest of the existing code remains the same */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Field Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon={systemComponents[0].icon}
            title={systemComponents[0].title}
            subtitle={systemComponents[0].subtitle}
            description={systemComponents[0].description}
          />
        </div>

        <Arrow label="Data Collection" />

        {/* Sensors Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 animate-fadeIn">
          {sensorData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>

        <Arrow label="LoRaWAN / NB-IoT" />

        {/* Cloud Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon={systemComponents[1].icon}
            title={systemComponents[1].title}
            subtitle={systemComponents[1].subtitle}
            description={systemComponents[1].description}
          />
        </div>

        <Arrow label="Real-time Processing" />

        {/* Mobile Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon={systemComponents[2].icon}
            title={systemComponents[2].title}
            subtitle={systemComponents[2].subtitle}
            description={systemComponents[2].description}
          />
        </div>

        <Arrow label="User Interface" />

        {/* Farmer Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon={systemComponents[3].icon}
            title={systemComponents[3].title}
            subtitle={systemComponents[3].subtitle}
            description={systemComponents[3].description}
          />
        </div>
      </div>
      <TeamMembers />
      <InfoModal />
      

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="flex justify-center">
          <p>&copy; 2025 Smart Agriculture System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const DiagramPageWithProvider = () => (
  <ModalProvider>
    <DiagramPage />
  </ModalProvider>
);

export default DiagramPageWithProvider;

// Arrow component with updated colors for lighter green theme
const Arrow = ({ label }) => (
  <div className="flex flex-col items-center my-6 animate-fadeIn">
    <div className="w-0.5 h-10 bg-green-500 relative">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-500"></div>
    </div>
    <span className="text-green-300 text-xs font-semibold uppercase tracking-wider mt-2">{label}</span>
  </div>
);