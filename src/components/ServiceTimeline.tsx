'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, PanInfo } from 'framer-motion';

interface Step {
  title: string;
  description: string;
  status?: 'current' | 'completed' | 'blocked' | 'locked';
}

interface ServiceTimelineProps {
  steps: Step[];
}

export default function ServiceTimeline({ steps }: ServiceTimelineProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  
  // Calculate timeline width based on number of steps
  const timelineWidth = steps.length * 280; // 280px per step
  const dragConstraints = { left: -timelineWidth + 300, right: 0 };
  
  const handleDragEnd = (_: Event, info: PanInfo) => {
    // Determine if we should navigate to the next or previous step based on velocity and offset
    const dragVelocity = info.velocity.x;
    const dragOffset = info.offset.x;
    
    if ((dragVelocity < -100 || dragOffset < -100) && currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else if ((dragVelocity > 100 || dragOffset > 100) && currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getStepStatus = (index: number) => {
    if (index === currentStep) return 'current';
    if (index < currentStep) return 'completed';
    if (index === currentStep + 1) return 'next';
    return 'locked';
  };

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        ref={constraintsRef}
        className="relative w-full"
        style={{ height: '320px' }}
      >
        {/* Draggable Timeline */}
        <motion.div
          className="absolute top-8 left-0 h-0.5 bg-gray-300 w-full"
          style={{ width: `${timelineWidth}px` }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#7C1E49]"
            style={{ 
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              maxWidth: '100%' 
            }}
          />
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="flex"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            
            return (
              <motion.div 
                key={index}
                className="flex flex-col items-center mx-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.2 }
                }}
              >
                {/* Step circle */}
                <motion.div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    status === 'current' 
                      ? 'bg-[#7C1E49] border-4 border-white text-white'
                      : status === 'completed'
                      ? 'bg-[#7C1E49] text-white'
                      : 'bg-white border border-gray-300 text-gray-400'
                  }`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentStep(index)}
                >
                  {status === 'completed' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="font-sans">{index + 1}</span>
                  )}
                </motion.div>

                {/* Step label */}
                <motion.div 
                  className="mt-3 mb-6 w-48 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: index * 0.2 + 0.2 } }}
                >
                  <p className="font-semibold text-gray-800 font-serif">{step.title}</p>
                </motion.div>

                {/* Step card */}
                <AnimatePresence mode="wait">
                  {status === 'current' && (
                    <motion.div
                      key={`card-${index}`}
                      className="bg-white rounded-lg shadow-lg p-6 w-64"
                      initial={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        height: 'auto',
                        transition: { 
                          type: "spring", 
                          duration: 0.5,
                          delay: 0.1
                        } 
                      }}
                      exit={{ opacity: 0, y: -20, height: 0 }}
                    >
                      <h3 className="text-lg font-serif font-semibold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 font-sans">{step.description}</p>

                      {status === 'current' && (
                        <motion.button
                          className="mt-4 bg-[#7C1E49] text-white rounded-lg px-4 py-2 text-sm font-sans"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { delay: 0.3 } }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (currentStep < steps.length - 1) {
                              setCurrentStep(currentStep + 1);
                            }
                          }}
                        >
                          {currentStep < steps.length - 1 ? 'Continue' : 'Complete'}
                        </motion.button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation arrows */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
          <motion.button
            className={`p-2 rounded-full border ${
              currentStep > 0 
                ? 'border-[#7C1E49] text-[#7C1E49]' 
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            disabled={currentStep === 0}
            whileHover={currentStep > 0 ? { scale: 1.1 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
            onClick={() => {
              if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
              }
            }}
            aria-label="Previous step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            className={`p-2 rounded-full border ${
              currentStep < steps.length - 1 
                ? 'border-[#7C1E49] text-[#7C1E49]' 
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            disabled={currentStep === steps.length - 1}
            whileHover={currentStep < steps.length - 1 ? { scale: 1.1 } : {}}
            whileTap={currentStep < steps.length - 1 ? { scale: 0.95 } : {}}
            onClick={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
              }
            }}
            aria-label="Next step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 