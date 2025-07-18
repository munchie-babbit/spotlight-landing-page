"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  image?: string;
  content: React.ReactNode;
  description?: string; // Optional description for the left side
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update height calculation to be based on the actual content height
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        // Get the last timeline section
        const sections = ref.current.querySelectorAll('.timeline-section');
        if (sections.length > 0) {
          const lastSection = sections[sections.length - 1];
          const lastSectionRect = lastSection.getBoundingClientRect();
          const refRect = ref.current.getBoundingClientRect();
          
          // Calculate height from the top of the container to the bottom of the last section
          // Subtract a small amount to prevent overflow
          const calculatedHeight = lastSectionRect.bottom - refRect.top - 40;
          setHeight(calculatedHeight);
        }
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [ref, data]);

  // Set up intersection observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll(".timeline-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 0.2], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Function to split the title into step number and title text
  const splitTitle = (title: string) => {
    const parts = title.split(":");
    if (parts.length > 1) {
      return {
        step: parts[0].trim(),
        title: parts[1].trim()
      };
    }
    return {
      step: "",
      title: title
    };
  };

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {/* Static background line */}
        <div
          className="absolute md:left-8 left-4 top-0 h-full w-[3px] bg-gray-200"
          style={{ height: `${height}px` }}
        />
        
        {/* Animated colored line */}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
            maxHeight: `${height}px`,
          }}
          className="absolute md:left-8 left-4 top-0 w-[3px] bg-gradient-to-b from-[#7C1E49] to-[#968F62] z-10"
        />
        
        {data.map((item, index) => {
          const { step, title } = splitTitle(item.title);
          return (
            <div
              key={index}
              data-index={index}
              className="timeline-section flex justify-start pt-16 md:pt-24 md:gap-10 relative"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-1/3 self-start max-w-xs lg:max-w-sm md:w-full h-fit">
                <div className="h-8 w-8 md:h-12 md:w-12 absolute left-[2px] md:left-3 rounded-full bg-white shadow-md flex items-center justify-center z-20">
                  <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#7C1E49]/20 border-2 border-[#7C1E49]" />
                </div>
                <div className={`hidden md:block md:pl-20 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-40'}`}>
                  <div className="text-sm uppercase tracking-wider font-medium text-[#7C1E49]">
                    {step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-black">
                    {title}
                  </h3>
                  {item.description && (
                    <p className=" text-gray-600 mt-1 max-w-xs">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              <div className={`relative pl-12 md:pl-20 pr-4  w-full min-h-[300px] transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-40'}`}>
                <div className="md:hidden mb-4">
                  <div className="text-sm uppercase tracking-wider font-medium text-[#7C1E49]">
                    {step}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-black">
                    {title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <Image 
                      src={item.image || "/home1.jpg"} 
                      alt={item.title} 
                      fill 
                      className="object-cover sm:object-cover border border-gray-200"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 