import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const InfoModal = () => {
  const { modalContent, closeModal } = useModal();

  if (!modalContent) return null;

  const getImagePath = (title) => {
   
    const filename = title.toLowerCase().replace(/\s+/g, '-') + '.png';
    return `/Images/${filename}`;
  };

  return (
    <AnimatePresence>
      {modalContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 cursor-pointer overflow-y-auto"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-lg rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border-2 border-green-200 
            flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            

            {/* Image section - now visible on mobile and larger on all screens */}
            <div className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8 flex items-center justify-center">
              <img 
                src={getImagePath(modalContent.title)} 
                alt={modalContent.title}
                className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
                onError={(e) => {

                  e.target.src = '/Images/placeholder.jpg'; 
                }}
              />
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 lg:w-3/5 overflow-y-auto max-h-[70vh] md:max-h-none">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{modalContent.icon}</span>
                  <h2 className="text-2xl font-bold text-green-800">{modalContent.title}</h2>
                </div>
                <p className="text-green-800 leading-relaxed mb-4">{modalContent.subtitle}</p>
                <div className="text-gray-700 prose prose-green max-w-none">
                  {modalContent.description}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;