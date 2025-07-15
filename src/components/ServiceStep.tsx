interface ServiceStepProps {
  title: string;
  description: string;
  step: number;
  totalSteps: number;
}

export default function ServiceStep({ title, description, step, totalSteps }: ServiceStepProps) {
  return (
    <div className="relative">
      {/* Step content */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Timeline */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full">
        {/* Line */}
        <div className="absolute h-0.5 bg-[#7C1E49] w-full" />
        
        {/* Dots */}
        <div className="relative flex justify-between w-full px-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div 
              key={index} 
              className={`w-4 h-4 rounded-full z-10 ${index + 1 <= step ? 'bg-[#7C1E49]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 