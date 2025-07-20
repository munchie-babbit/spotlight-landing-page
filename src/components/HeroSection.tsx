"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface Property {
  id: number;
  backgroundImage: string;
  location: string;
  price: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  height?: string;
  buttonText?: string;
  buttonLink?: string;
  properties?: Property[];
  disableCarousel?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  height = "h-screen",
  buttonText,
  buttonLink,
  properties = [
    {
      id: 1,
      backgroundImage: "/hero-home.png",
      location: "HOUSE IN LOS ANGELES, CALIFORNIA, UNITED STATES",
      price: "$27,950,000",
    },
    {
      id: 2,
      backgroundImage: "/home1.jpg",
      location: "VILLA IN MALIBU, CALIFORNIA, UNITED STATES",
      price: "$18,750,000",
    },
    {
      id: 3,
      backgroundImage: "/home2.jpg",
      location: "PENTHOUSE IN NEW YORK, NEW YORK, UNITED STATES",
      price: "$32,400,000",
    },
    {
      id: 4,
      backgroundImage: "/home3.jpg",
      location: "PENTHOUSE IN NEW YORK, NEW YORK, UNITED STATES",
      price: "$32,400,000",
    },
    {
      id: 5,
      backgroundImage: "/home4.jpg",
      location: "PENTHOUSE IN NEW YORK, NEW YORK, UNITED STATES",
      price: "$32,400,000",
    },
    {
      id: 6,
      backgroundImage: "/home5.jpg",
      location: "PENTHOUSE IN NEW YORK, NEW YORK, UNITED STATES",
      price: "$32,400,000",
    },
  ],
  disableCarousel = false,
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentProperty = properties[currentIndex];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideDuration = 8000; // 8 seconds per slide

  // Function to start the timer
  const startTimer = () => {
    // If carousel is disabled, do not start timer
    if (disableCarousel) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset progress
    setProgress(0);

    // Set up new interval to update progress
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / slideDuration) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(progressInterval);

        // Move to next slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
      } else {
        setProgress(newProgress);
      }
    }, 16); // ~60fps

    intervalRef.current = progressInterval;
  };

  // Start timer when component mounts or when slide changes
  useEffect(() => {
    startTimer();

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, properties.length, disableCarousel]);

  const goToSlide = (index: number) => {
    if (disableCarousel) return;
    setCurrentIndex(index);
  };
  
  const goToPrevSlide = () => {
    if (disableCarousel || currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  
  const goToNextSlide = () => {
    if (disableCarousel || currentIndex === properties.length - 1) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };
  
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  };
  
  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const buttonAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        delay: 0.8, 
        ease: [0.175, 0.885, 0.32, 1.275] 
      } 
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`relative flex items-center ${height} w-full overflow-hidden bg-black`}
    >
      {disableCarousel ? (
        // Static hero with single background
        <motion.div 
          className="absolute inset-0 w-full h-full"
          variants={fadeIn}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${properties[0].backgroundImage})` }}
          ></div>
          {/* Dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
          {/* Additional top gradient for nav area */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
        </motion.div>
      ) : (
        // Carousel with animated transitions
        <AnimatePresence mode="wait">
          {properties.map(
            (property, index) =>
              index === currentIndex && (
                <motion.div
                  key={property.id}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${property.backgroundImage})`,
                    }}
                  ></div>
                  {/* Dark gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30"></div>
                  {/* Additional top gradient for nav area */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      )}

      <motion.div 
        className="container relative z-10 text-spotlight-maroon"
        variants={staggerChildren}
      >
        <div className="max-w-3xl flex flex-col gap-12">
          <motion.div className="flex flex-col gap-4">
            {!disableCarousel && (
              <motion.div 
                className="mb-4"
                variants={slideUp}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >

                <div className="bg-black/40 backdrop-blur-sm text-white text-sm font-sans px-4 py-1.5 rounded-full inline-flex items-center">
                 <Image src="/Y Combinator Logo.png" alt="Y Combinator" width={20} height={20} className="mr-2 rounded" /> Backed by Y Combinator
                </div>
              </motion.div>
            )}
            <motion.h1 
              className="text-4xl md:text-6xl font-serif text-white leading-normal md:leading-tight"
              variants={slideUp}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-xl text-white font-sans"
              variants={slideUp}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          {buttonText && buttonLink && (
            <motion.a
              href={buttonLink}
              className="text-black bg-white rounded-full font-semibold px-6 py-4 font-sans w-fit"
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              {buttonText}
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Property information */}
      {!disableCarousel && (
        <>
          {/* Navigation Chevrons */}
          {currentIndex > 0 && (
            <motion.button
              className="absolute left-2 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full hidden sm:flex items-center justify-center z-20 transition-colors shadow-md"
              onClick={goToPrevSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}
          
          {currentIndex < properties.length - 1 && (
            <motion.button
              className="absolute right-2 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full hidden sm:flex items-center justify-center z-20 transition-colors shadow-md"
              onClick={goToNextSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
          
          <motion.div 
            className="container absolute bottom-12 left-0 right-0 flex justify-between items-center px-4 sm:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div 
              className="text-white max-w-3xl flex flex-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p className="text-sm tracking-wider font-sans">
                {currentProperty.location}
              </p>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {/* Navigation Rectangles with Progress Bar */}
              <div className="hidden md:flex space-x-2">
                {properties.map((_, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer"
                    onClick={() => goToSlide(index)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`w-16 h-1.5 rounded-full ${
                        index === currentIndex ? "bg-white/40" : "bg-white/30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                    {index === currentIndex && (
                      <motion.div
                        className="absolute top-0 left-0 h-1.5 bg-white/70 rounded-full"
                        style={{ width: `${progress}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
