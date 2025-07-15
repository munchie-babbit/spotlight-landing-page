"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <div
      className={`relative flex items-center ${height} w-full overflow-hidden bg-black`}
    >
      {disableCarousel ? (
        // Static hero with single background
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${properties[0].backgroundImage})` }}
          ></div>
          {/* Dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
          {/* Additional top gradient for nav area */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>
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

      <div className="container relative z-10 text-spotlight-maroon">
        <div className="max-w-3xl flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-loose md:leading-tight">
              {title}
            </h1>
            <p className="text-xl text-white font-sans">{subtitle}</p>
          </div>

          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="text-black bg-white rounded-full font-semibold px-6 py-4 font-sans w-fit"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>

      {/* Property information */}
      {!disableCarousel && (
        <div className="container absolute bottom-12 left-0 right-0 flex justify-between items-center px-4 sm:px-12">
          <div className="text-white max-w-3xl flex flex-row">
            <p className="text-sm tracking-wider font-sans">
              {currentProperty.location}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Navigation Rectangles with Progress Bar */}
            <div className="hidden md:flex space-x-2">
              {properties.map((_, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => goToSlide(index)}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
