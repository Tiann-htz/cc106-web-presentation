import React from 'react';
import { Users2, Mail } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const TeamMembers = () => {
  const members = [
    {
      name: 'Aguio, Robert John',
      email: 'robertjohn.aguio@hcdc.edu.ph',
      image: '/Profiles/robert.jpg'
    },
    {
      name: 'Florentino, Loren May',
      email: 'lorenmay.florentino@hcdc.edu.ph',
      image: '/Profiles/loren.jpg'
    },
    {
      name: 'Pialan, Keshier Jan',
      email: 'keshierjan.pialan@hcdc.edu.ph',
      image: '/Profiles/keshier.jpg'
    },
    {
      name: 'Paete, Christian Carl',
      email: 'christiancarl.paete@hcdc.edu.ph',
      image: '/Profiles/christian.png'
    },
    {
      name: 'Climaco, Jeff Harell',
      email: 'jeffharell.climaco@hcdc.edu.ph',
      image: '/Profiles/jeff.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 mb-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="contributors">
          <AccordionTrigger className="bg-gradient-to-r from-green-700/70 to-green-900/70 backdrop-blur-md px-5 py-6 rounded-t-[30px] shadow-lg shadow-green-800">
            <div className="flex items-center justify-center gap-3">
              <Users2 className="w-8 h-8 text-green-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Contributors</h2>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-gradient-to-r from-green-700/70 to-green-900/70 backdrop-blur-md px-5 py-8 rounded-b-[30px] shadow-lg shadow-green-800 border-t border-green-400/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-green-400/30
                           hover:bg-white/20 hover:border-green-400/50 
                           transition-all duration-300 transform hover:-translate-y-1
                           flex items-center space-x-4
                           animate-fadeIn"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out ${index * 200}ms forwards`
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-300"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <div className="flex items-center text-gray-300 mt-1 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-gray-200 transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TeamMembers;