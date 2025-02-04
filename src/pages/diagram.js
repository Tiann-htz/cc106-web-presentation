import React from 'react';

const Arrow = ({ label }) => (
  <div className="flex flex-col items-center my-6 animate-fadeIn">
    <div className="w-0.5 h-10 bg-green-400 relative">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-400"></div>
    </div>
    <span className="text-green-700 text-xs font-semibold uppercase tracking-wider mt-2">{label}</span>
  </div>
);

const Card = ({ icon, title, subtitle }) => (
  <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-200 
                  hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 
                  hover:border-green-400 hover:shadow-xl
                  transition-all duration-300 transform hover:-translate-y-2 group w-full max-w-xs">
    <div className="flex justify-center mb-4 text-4xl transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-green-800 font-bold text-lg md:text-xl text-center mb-2 group-hover:text-emerald-700">
      {title}
    </h3>
    <p className="text-green-600 text-center text-sm md:text-base group-hover:text-emerald-600">
      {subtitle}
    </p>
  </div>
);

const DiagramPage = () => {
  const sensorData = [
    {
      icon: '🌡️',
      title: 'Soil Sensors',
      subtitle: 'Moisture • pH • Nutrients • Temperature'
    },
    {
      icon: '🌤️',
      title: 'Weather Station',
      subtitle: 'Rainfall • Humidity • Wind Speed'
    },
    {
      icon: '🛸',
      title: 'Drones',
      subtitle: 'Aerial Imaging & Mapping'
    },
    {
      icon: '💧',
      title: 'Actuators',
      subtitle: 'Smart Irrigation System'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-12 md:py-16 text-center rounded-b-[30px] shadow-lg shadow-green-200 relative overflow-hidden mb-8 md:mb-16">
        <div className="absolute inset-0 opacity-10 bg-repeat"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c4-8 8-4 16-4s12-4 16-4-8 8-16 8-12 4-16 4zm0 0c-4-8-8-4-16-4S2 22-2 22s8 8 16 8 12 4 16 4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
             }}>
        </div>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fadeIn relative z-10">
          Smart Agriculture System
        </h1>
        <div className="text-white/90 text-lg md:text-xl mt-4 animate-fadeIn relative z-10">
          IoT-Enabled Soil Monitoring and Mobile Alerts
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Field Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon="🌱"
            title="Field Environment"
            subtitle="Agricultural Field Monitoring"
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
            />
          ))}
        </div>

        <Arrow label="LoRaWAN / NB-IoT" />

        {/* Cloud Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon="☁️"
            title="Cloud Platform"
            subtitle="Data Storage • Processing • ML Analysis"
          />
        </div>

        <Arrow label="Real-time Processing" />

        {/* Mobile Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon="📱"
            title="Mobile Application"
            subtitle="Dashboard • Alerts • Control • Insights"
          />
        </div>

        <Arrow label="User Interface" />

        {/* Farmer Level */}
        <div className="flex justify-center gap-6 md:gap-10 my-8 animate-fadeIn">
          <Card
            icon="👨‍🌾"
            title="Farmer Interface"
            subtitle="Decision Support System"
          />
        </div>
      </div>
    </div>
  );
};

export default DiagramPage;