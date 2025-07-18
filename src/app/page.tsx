"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CtaSection from "@/components/CtaSection";
import { EyeIcon } from "lucide-react";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProcessTab, setActiveProcessTab] = useState(0);
  const [activeTab, setActiveTab] = useState("sellers");
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const logoScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll for mobile logo carousel
  useEffect(() => {
    const logoContainer = logoScrollRef.current;
    if (!logoContainer) return;
    
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.; // pixels per frame
    const scrollWidth = logoContainer.scrollWidth;
    const containerWidth = logoContainer.clientWidth;
    
    // Only auto-scroll on mobile
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      const scroll = () => {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled through once
        if (scrollPosition >= scrollWidth - containerWidth) {
          scrollPosition = 0;
        }
        
        logoContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(scroll);
      };
      
      animationFrameId = requestAnimationFrame(scroll);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const processTabs = [
    {
      id: "intake",
      title: "Intake",
      description:
        "Quickly onboard and get your property listed with our 4-minute intake process.",
      bulletPoints: [
        "Complete a simple questionnaire about your property",
        "Receive an instant property valuation estimate",
      ],
      icon: "/file.svg",
      image: "/onboarding-feature.png",
    },
    {
      id: "staging",
      title: "Staging",
      description:
        "Our professionals prepare your property to look its absolute best for potential buyers.",
      bulletPoints: [
        "Free included photography and virtual tour creation",
        "Free included home staging service",
      ],
      icon: "/window.svg",
      image: "/home2.jpg",
    },
    {
      id: "listing",
      title: "Listing",
      description:
        "Your property is listed across multiple platforms with professional materials.",
      bulletPoints: [
        "Distribution to all major real estate platforms",
        "AI-powered targeting to reach qualified buyers",
      ],
      icon: "/globe.svg",
      image: "/listing.png",
    },
    {
      id: "showings",
      title: "Showings",
      description:
        "Our AI agents manage all inquiries and schedule viewings with qualified buyers.",
      bulletPoints: [
        "Automatic screening of potential buyers",
        "Convenient scheduling with digital calendar",
      ],
      icon: "/file.svg",
      image: "/tour.png",
    },
    {
      id: "offers",
      title: "Offers",
      description:
        "Review offers through our digital platform with AI-powered insights and analysis.",
      bulletPoints: [
        "Side-by-side offer comparison tools",
        "AI analysis of terms and contingencies",
      ],
      icon: "/file.svg",
      image: "/offers-feature.png",
    },
    {
      id: "closing",
      title: "Closing",
      description:
        "Complete the sale with our streamlined closing process and digital document signing.",
      bulletPoints: [
        "Digital document preparation and e-signatures",
        "Coordination with all parties involved",
      ],
      icon: "/window.svg",
      image: "/key-handoff.png",
    },
  ];

  const featuredProperties = [
    {
      id: 1,
      image: "",
      price: "$2,300,000",
      address: "Penthouse in New York, NY",
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 3200,
      views: 3452,
    },
    {
      id: 2,
      image: "",
      price: "$1,227,992",
      address: "Condo in New York, NY",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      views: 2891,
    },
    {
      id: 3,
      image: "",
      price: "$25,729,369",
      address: "Villa in New York, NY",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      views: 5127,
    },
    {
      id: 4,
      image: "",
      price: "$947,308",
      address: "Penthouse in New York, NY",
      bedrooms: 4,
      bathrooms: 2.5,
      sqft: 3000,
      views: 1845,
    },
    {
      id: 5,
      image: "",
      price: "$7,995,000",
      address: "Penthouse in New York, NY",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 5200,
      views: 4236,
    },
    {
      id: 6,
      image: "/",
      price: "$3,450,000",
      address: "Villa in Miami, Florida",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3600,
      views: 3078,
    },
  ];

  const carouselProperties = [
    {
      id: 1,
      backgroundImage: "/home6.jpg",
      location: "APARTMENT IN QUEENS, NEW YORK, UNITED STATES",
      price: "$27,950,000",
    },
    {
      id: 2,
      backgroundImage: "/home1.jpg",
      location: "FLAT IN BROOKLYN, NEW YORK, UNITED STATES",
      price: "$18,750,000",
    },
    {
      id: 3,
      backgroundImage: "/home9.jpg",
      location: "PENTHOUSE IN MANHATTAN, NEW YORK, UNITED STATES",
      price: "$32,400,000",
    },
    {
      id: 4,
      backgroundImage: "/home3.jpg",
      location: "TOWNHOUSE IN BROOKLYN, NEW YORK, UNITED STATES",
      price: "$22,800,000",
    },
    {
      id: 5,
      backgroundImage: "/home4.jpg",
      location: "NYC SKYLINE, NEW YORK, UNITED STATES",
      price: "$22,800,000",
    },
    {
      id: 6,
      backgroundImage: "/home5.jpg",
      location: "FLAT IN NEW JERSEY, UNITED STATES",
      price: "$22,800,000",
    },
  ];

  const sellerFaqs = [
    {
      id: "ecosystem",
      question: "How does Spotlight work with the current ecosystem?",
      answer:
        "Our platform integrates seamlessly with existing MLS systems and real estate networks, ensuring your property receives maximum exposure while benefiting from our AI-powered tools and reduced commission structure.",
    },
    {
      id: "savings",
      question: "How does Spotlight save me money?",
      answer:
        "By leveraging AI to automate routine tasks and streamline the selling process, we're able to reduce commission fees from 6% to 1.5% compared to traditional brokerages, without sacrificing quality of service or results.",
    },
    {
      id: "security",
      question: "Is my data secure with Spotlight?",
      answer:
        "Absolutely. We employ bank-level encryption and strict data protection protocols to ensure all your personal and property information remains completely secure and private throughout the selling process.",
    },
    {
      id: "support",
      question: "What support do I get if I have questions?",
      answer:
        "Our team of experienced real estate professionals is available 24/7 via chat, phone, or email to answer any questions and provide personalized guidance throughout your selling journey.",
    },
  ];

  const landlordFaqs = [
    {
      id: "listing",
      question: "How do I list my rental property on Spotlight?",
      answer:
        "You can easily list your property by creating an account and submitting your property details, photos, and pricing. Our platform guides you through each step and helps you create an attractive listing to reach qualified renters.",
    },
    {
      id: "fees",
      question: "What fees does Spotlight charge landlords?",
      answer:
        "Spotlight charges a small, transparent fee for listing your property and accessing our suite of management tools. There are no hidden costs, and you only pay when you choose to list or upgrade your property's visibility.",
    },
    {
      id: "virtual-tours",
      question:
        "Can I offer virtual tours of my property to potential renters?",
      answer:
        "Yes! You can upload virtual tours or request our team to create a professional 3D tour for your listing. Virtual tours help attract more qualified renters and reduce unnecessary in-person showings.",
    },
    {
      id: "applications",
      question: "How does Spotlight handle rental applications and screening?",
      answer:
        "Spotlight streamlines the application process by allowing renters to apply directly through your listing. You can review applications, screen tenants, and manage documents securely from your landlord dashboard.",
    },
  ];

  const handlePrevious = () => {
    const newIndex =
      activeIndex === 0
        ? Math.max(featuredProperties.length - 5, 0)
        : Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      activeIndex >= Math.max(featuredProperties.length - 5, 0)
        ? 0
        : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <HeroSection
        title="Non-stop real estate agents for the sleepless city"
        subtitle="Save on costs while increasing visibility with our AI-powered real estate platform"
        buttonText="Create a Listing Now"
        buttonLink="/sellers"
        properties={carouselProperties}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We&apos;re here for every step of your journey
            </motion.h2>
            <motion.p
              className="text-gray-700 font-sans max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              From initial intake to final closing, our AI-powered platform and
              professional team guide you through the entire process of selling
              your home.
            </motion.p>
          </motion.div>

          <div className="overflow-x-auto pb-6 no-scrollbar">
            <div className="flex space-x-8 min-w-max px-4">
              {processTabs.map((tab, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                    borderColor: "#7C1E49",
                  }}
                  key={tab.id}
                  className={`w-80 bg-white rounded-lg shadow-md border overflow-hidden ${
                    activeProcessTab === index
                      ? "border-[#7C1E49]"
                      : "border-gray-200"
                  } cursor-pointer transition-all duration-300`}
                  onClick={() => setActiveProcessTab(index)}
                >
                  <div className="relative h-48 w-full bg-[#7C1E49]">
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <motion.h3
                      className="text-2xl font-serif mb-4"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {tab.title}
                    </motion.h3>
                    <motion.div
                      className={`h-1 w-16 ${
                        activeProcessTab === index
                          ? "bg-[#7C1E49]"
                          : "bg-gray-200"
                      } mb-4`}
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    ></motion.div>
                    <motion.p
                      className="text-gray-600 font-sans mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      {tab.description}
                    </motion.p>

                    <motion.ul
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      {tab.bulletPoints.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                        >
                          <div className="text-[#7C1E49] mr-3 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-600 font-sans text-sm">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container">
          {/* Trending Properties Carousel */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-serif">
                  AI-driven selling for <br /> a new generation of homeowners
                </h2>
                <p className="text-gray-700 mb-8 font-sans w-full md:w-1/2">
                  We use the OneKey MLS to publish your listing across top real
                  estate platforms like Zillow, StreetEasy, Realtor.com, and
                  more.
                </p>
              </div>
              <div className="hidden md:flex space-x-2">
                <motion.button
                  onClick={handlePrevious}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  aria-label="Previous"
                  whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  aria-label="Next"
                  whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden overflow-x-auto pb-6 no-scrollbar">
              <div className="flex space-x-8 px-4">
                {featuredProperties.map((property, idx) => (
                  <motion.div
                    key={property.id}
                    className="group cursor-pointer w-64"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="relative h-64 mb-3 overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gray-200">
                        {property.image ? (
                          <Image
                            src={property.image}
                            alt={property.address}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-500">No image available</p>
                          </div>
                        )}
                      </div>

                      {/* View count */}
                      <motion.div
                        className="absolute top-3 left-3 bg-white backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {property.views.toLocaleString()} views
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="px-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                    >
                      <p className="text-xl font-serif font-semibold">
                        {property.price}
                      </p>
                      <p className="text-gray-700 font-sans text-sm truncate">
                        {property.address}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6">
              {featuredProperties
                .slice(activeIndex, activeIndex + 5)
                .map((property, idx) => (
                  <motion.div
                    key={property.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="relative h-64 mb-3 overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gray-200">
                        {property.image ? (
                          <Image
                            src={property.image}
                            alt={property.address}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-500">No image available</p>
                          </div>
                        )}
                      </div>

                      {/* View count */}
                      <motion.div
                        className="absolute top-3 left-3 bg-white backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {property.views.toLocaleString()} views
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="px-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                    >
                      <p className="text-xl font-serif font-semibold">
                        {property.price}
                      </p>
                      <p className="text-gray-700 font-sans text-sm truncate">
                        {property.address}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="relative">
            {/* Logo grid for desktop, carousel for mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 md:gap-6 items-center ">
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/zillow.png"
                  alt="Zillow"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/streeteasy.png"
                  alt="StreetEasy"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/facebooklogo.png"
                  alt="Facebook"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/homeslogo.png"
                  alt="Homes"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/realtorcom.png"
                  alt="Realtor.com"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/redfinlogo.png"
                  alt="Redfin"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/apartmentscom-logo.png"
                  alt="Apartments.com"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/trulia.png"
                  alt="Trulia"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section with Cards */}
      <div className="relative md:mt-[-100vh] mt-0">
        {/* Fixed Background Image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
          <div className="absolute inset-0 bg-black/60 z-1"></div>
          <Image
            src="/homebackground.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Sticky Left Text */}
        <div className="sticky top-0 left-0 z-10 hidden lg:flex h-screen items-center">
          <div className="container">
            <div className="grid grid-cols-12">
              <div className="col-span-4 flex flex-col justify-center gap-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                  We value trust, transparency, and results
                </h2>
                <p className="text-white font-sans">
                  Get unique insights into your journey through our AI-powered
                  platform
                </p>
                <a
                  href={"/about"}
                  className="text-black bg-white rounded-full font-semibold px-6 py-4 font-sans w-fit"
                >
                  Create a Listing Now
                </a>
              </div>
              <div className="col-span-1"></div> {/* Smaller spacer column */}
            </div>
          </div>
        </div>

        {/* List your property card*/}
        <section className="relative pt-4 pb-24">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block col-span-5"></div>
              <div className="col-span-1 lg:col-span-7">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-black">
                    List your property in 5 minutes
                  </h3>
                  <p className="text-gray-700 font-sans mb-8">
                    Our streamlined process helps you list your property quickly
                    and efficiently. Answer a few simple questions about your
                    property and we&apos;ll handle the rest.
                  </p>

                  <div className="border-gray-200 border rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-50 p-4 border-gray-200 border-b">
                      <h4 className="font-serif text-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-[#7C1E49]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        Property Information
                      </h4>
                    </div>

                    <div className="p-6">
                      <div className="mb-6">
                        <h5 className="font-medium mb-3">
                          What type of property are you selling?
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="rounded-lg p-4 bg-[#7C1E49]/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-2">
                              <div className="w-5 h-5 rounded-full border-2 border-[#7C1E49] flex items-center justify-center mr-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#7C1E49]"></div>
                              </div>
                              <span className="font-medium">
                                Single-family House
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 pl-7">
                              Standalone home on its own lot
                            </p>
                          </div>

                          <div className="rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-2">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
                              <span className="font-medium">
                                Multi-family House
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 pl-7">
                              Duplex, triplex, or fourplex
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
                            <span className="font-medium">Condominium</span>
                          </div>
                          <p className="text-sm text-gray-600 pl-7">
                            Unit in a shared building
                          </p>
                        </div>

                        <div className="rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
                            <span className="font-medium">Co-operative</span>
                          </div>
                          <p className="text-sm text-gray-600 pl-7">
                            Shares in a housing corporation
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <motion.button
                          className="bg-[#7C1E49] text-white px-6 py-3 rounded-full font-sans flex items-center"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#8c2253",
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          Continue
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manage Calendar Card */}
        <section className="relative py-16">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block col-span-5"></div>
              <div className="col-span-1 lg:col-span-7">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-black">
                    View your upcoming appointments
                  </h3>
                  <p className="text-gray-700 font-sans mb-8">
                    Our smart scheduling system helps you manage property
                    showings, open houses, and other important appointments.
                    Coordinate with potential buyers and your agent seamlessly,
                    with automatic reminders and real-time calendar updates.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6  pb-4">
                    {/* Calendar header - Days of week */}
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base hidden md:block">
                      Monday
                    </div>
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base hidden md:block">
                      Thursday
                    </div>
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base hidden md:block">
                      Saturday
                    </div>
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base hidden md:block">
                      Sunday
                    </div>

                    {/* Calendar days */}
                    {/* Monday */}
                    <div className="border-gray-200 border rounded-lg p-3 relative bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-row justify-between">
                        <div className="text-center font-medium text-gray-500 font-sans text-sm block md:hidden">
                          Monday
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500 mb-2">
                        15
                      </div>
                      <div className="bg-blue-100 text-blue-800 text-xs p-1.5 rounded mb-1.5">
                        10:00 AM - Initial Staging
                      </div>
                      <div className="bg-purple-100 text-purple-800 text-xs p-1.5 rounded mb-1.5">
                        2:00 PM - Photography Session
                      </div>
                      <div className="bg-purple-100 text-purple-800 text-xs p-1.5 rounded">
                        3:30 PM - Video Tour Recording
                      </div>
                    </div>

                    {/* Thursday */}
                    <div className="border-gray-200 border rounded-lg p-3 relative bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-row justify-between">
                        <div className="text-center font-medium text-gray-500 font-sans text-sm block md:hidden">
                          Tuesday
                        </div>
                        <div className="text-right text-sm text-gray-500 mb-2">
                          18
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1.5 rounded mb-1.5">
                        11:00 AM - Property Showing
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1.5 rounded mb-1.5">
                        1:30 PM - Property Showing
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1.5 rounded">
                        4:00 PM - Property Showing
                      </div>
                    </div>

                    {/* Saturday */}
                    <div className="border-gray-200 border rounded-lg p-3 relative bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-row justify-between">
                        <div className="text-center font-medium text-gray-500 font-sans text-sm block md:hidden">
                          Saturday
                        </div>
                      <div className="text-right text-sm text-gray-500 mb-2">
                        20
                      </div>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1.5 rounded mb-1.5">
                        10:30 AM - Property Showing
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1.5 rounded mb-1.5">
                        12:00 PM - Property Showing
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1.5 rounded">
                        3:00 PM - Agent Meeting
                      </div>
                    </div>

                    {/* Sunday */}
                    <div className="border-gray-200 border rounded-lg p-3 relative bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-row justify-between">
                        <div className="text-center font-medium text-gray-500 font-sans text-sm block md:hidden">
                          Sunday
                        </div>
                      <div className="text-right text-sm text-gray-500 mb-2">
                        21
                      </div>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 text-xs p-1.5 rounded mb-1.5">
                        1:00 PM - Open House Event
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 text-xs p-1.5 rounded mb-1.5">
                        3:00 PM - Property Tour
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-gray-600 font-sans">
                        Preparation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm text-gray-600 font-sans">
                        Media
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-gray-600 font-sans">
                        Showings
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm text-gray-600 font-sans">
                        Open House
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human Agents Card */}
        <section className="relative py-16">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block col-span-5"></div>
              <div className="col-span-1 lg:col-span-7">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-serif mb-6 text-black">
                    Talk to a real human agent anytime
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                      <p className="text-gray-700 mb-6 font-sans">
                        While our AI handles the routine tasks, our team of
                        experienced real estate professionals is available 24/7
                        to address your questions, provide guidance, and offer
                        personalized support throughout your selling journey.
                      </p>

                      <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-6">
                        <div className="flex -space-x-2 mr-4">
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/20 border-2 border-white overflow-hidden">
                            <Image
                              src="/agent1.png"
                              alt="Agent 1"
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/30 border-2 border-white overflow-hidden">
                            <Image
                              src="/agent2.png"
                              alt="Agent 2"
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/40 border-2 border-white overflow-hidden">
                            <Image
                              src="/agent3.png"
                              alt="Agent 3"
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 font-sans">
                            3 agents online now
                          </p>
                          <p className="text-sm text-gray-500 font-sans">
                            Average response time:{" "}
                            <span className="font-medium">2 minutes</span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 justify-center md:justify-start flex">
                        <motion.button
                          className="bg-[#7C1E49] text-white px-6 py-3 rounded-lg font-sans font-medium hover:bg-[#7C1E49]/90 transition-colors"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#8c2253",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Chat with an Agent
                        </motion.button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 relative">
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/10 mr-3 flex items-center justify-center">
                            <span className="text-[#7C1E49] font-serif font-medium">
                              SJ
                            </span>
                          </div>
                          <div>
                            <h4 className="font-serif font-medium">
                              Sarah Johnson
                            </h4>
                            <p className="text-sm text-gray-500 font-sans">
                              Senior Real Estate Agent
                            </p>
                          </div>
                          <div className="ml-auto flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            <span className="text-sm text-green-600 font-sans">
                              Online
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6 max-h-[200px] overflow-y-auto">
                          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm font-sans">
                              Hello! I&apos;m Sarah, your dedicated agent. How
                              can I help with your property sale today?
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              10:32 AM
                            </p>
                          </div>

                          <div className="bg-[#7C1E49]/10 rounded-lg p-3 max-w-[80%] ml-auto">
                            <p className="text-sm font-sans">
                              Hi Sarah, I have questions about staging my home
                              before listing it.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              10:34 AM
                            </p>
                          </div>

                          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm font-sans">
                              I&apos;d be happy to help with that! Our team can
                              provide professional staging services, or I can
                              give you some DIY tips to enhance your home&apos;s
                              appeal.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              10:35 AM
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm font-sans"
                            placeholder="Type your message..."
                          />
                          <button className="bg-[#7C1E49] text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature List Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover what makes our listing experience different
            </motion.h2>
            <motion.p
              className="text-gray-700 font-sans max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Spotlight Realty combines cutting-edge AI technology with
              personalized service to create a seamless, efficient, and
              profitable home listing experience.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            {/* Card 1 - Tall */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }}
              className="col-span-12 md:col-span-5 lg:col-span-5 row-span-2 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-[#7C1E49] transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-64">
                <Image
                  src="/communication.png"
                  alt="Lower Fees"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="p-6 flex flex-col flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(124, 30, 73, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#7C1E49]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </motion.div>
                <motion.h3
                  className="text-xl font-serif mb-3"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  AI-Powered Communication
                </motion.h3>
                <motion.p
                  className="text-gray-600 font-sans"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Our AI assistant handles all inquiries from potential buyers
                  and tenants 24/7, answering questions, scheduling viewings,
                  and collecting feedback without you lifting a finger.
                </motion.p>
                <motion.div
                  className="mt-4 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-start">
                    <div className="text-[#7C1E49] mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-sans text-sm">
                      Instant responses to inquiries 24/7
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#7C1E49] mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-sans text-sm">
                      Automated scheduling for property viewings
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#7C1E49] mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-sans text-sm">
                      Intelligent qualification of serious buyers
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#7C1E49] mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-sans text-sm">
                      Detailed feedback collection after viewings
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 2 - Wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }}
              className="col-span-12 md:col-span-7 lg:col-span-7 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:border-[#7C1E49] h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src="/document.png"
                    alt="AI Screening"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  className="md:w-1/2 p-6 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(124, 30, 73, 0.2)",
                    }}
                  >
                    <EyeIcon className="h-6 w-6 text-[#7C1E49]" />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-serif mb-3"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Applicant Screening & Document Review
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    We screens potential buyers and tenants, verifying their
                    financial qualifications and reviewing documents to save you
                    time and reduce risk.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3 - Wide and Short */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }}
              className="col-span-12 md:col-span-7 lg:col-span-7 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:border-[#7C1E49] h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src="/generation.png"
                    alt="Document Generation"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  className="md:w-3/5 p-6 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(124, 30, 73, 0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#7C1E49]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-serif mb-3"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Automated Document Generation
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Our AI creates legally-compliant leases and other real
                    estate documents tailored to your property and local
                    regulations, saving you time and legal expenses.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 4 - Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }}
              className="col-span-12 md:col-span-5 lg:col-span-12 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:border-[#7C1E49] flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative md:w-1/2 h-48 md:h-auto">
                  {/* 360° Virtual Tour IFrame goes here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <motion.div
                  className="md:w-3/5 p-6 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(124, 30, 73, 0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#7C1E49]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-serif mb-3"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Free Interactive 360° Virtual Tour & Home Staging For
                    Sellers
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Professional photography and 3D virtual tours help showcase
                    your property to potential buyers worldwide, allowing them
                    to explore every detail from anywhere.
                  </motion.p>
                  <motion.a
                    href="https://www.hometrack.net/blog/how-does-matterport-work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit mt-4 inline-block text-[#7C1E49] bg-white border border-spotlight-maroon rounded-full font-semibold px-6 py-3 font-sans transition-colors duration-200 hover:bg-[#5a1533]"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(124, 30, 73, 0.05)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Learn more about Matterport
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Gradient Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#7C1E49]/5 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#968F62]/10 translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-gray-700 font-sans max-w-3xl mx-auto mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Answers to common questions about Spotlight. For all other
              inquiries email us at{" "}
              <motion.a
                href="mailto:agent@spotlight.realty"
                className="text-[#7C1E49] font-medium hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                agent@spotlight.realty
              </motion.a>
              .
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-4 md:space-x-8 mb-12 relative">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 rounded-full"></div>
              <motion.button
                onClick={() => {
                  setActiveTab("sellers");
                  setActiveFaqIndex(0);
                }}
                className={`pb-4 px-4 text-lg font-serif relative ${
                  activeTab === "sellers"
                    ? "text-[#7C1E49]"
                    : "text-black hover:text-[#7C1E49]"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                For Sellers
                {activeTab === "sellers" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#7C1E49] rounded-full"
                    initial={{ width: 0, left: "50%", right: "50%" }}
                    animate={{ width: "100%", left: 0, right: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}
              </motion.button>

              <motion.button
                onClick={() => {
                  setActiveTab("landlords");
                  setActiveFaqIndex(0);
                }}
                className={`pb-4 px-4 text-lg font-serif relative ${
                  activeTab === "landlords"
                    ? "text-[#7C1E49]"
                    : "text-black hover:text-[#7C1E49]"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                For Landlords
                {activeTab === "landlords" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C1E49] to-[#968F62] rounded-full"
                    initial={{ width: 0, left: "50%", right: "50%" }}
                    animate={{ width: "100%", left: 0, right: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "sellers" && (
                <motion.div
                  key="sellers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-6">
                    {sellerFaqs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`bg-white rounded-xl shadow-md border p-6 cursor-pointer ${
                          activeFaqIndex === index && activeTab === "sellers"
                            ? "border-transparent shadow-lg"
                            : "border-gray-200 hover:border-[#7C1E49]/30"
                        }`}
                        onClick={() => setActiveFaqIndex(index)}
                        whileHover={{
                          scale: activeFaqIndex === index ? 1 : 1.02,
                          boxShadow:
                            activeFaqIndex === index
                              ? ""
                              : "0 8px 20px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <h4
                            className={`text-lg font-serif font-medium ${
                              activeFaqIndex === index &&
                              activeTab === "sellers"
                                ? "text-[#7C1E49]"
                                : "text-black"
                            }`}
                          >
                            {faq.question}
                          </h4>
                          <motion.div
                            className={`flex items-center justify-center w-8 h-8 rounded-full ${
                              activeFaqIndex === index &&
                              activeTab === "sellers"
                                ? "bg-[#7C1E49] text-white"
                                : "bg-gray-100 text-gray-500"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{
                                rotate: activeFaqIndex === index ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {activeFaqIndex === index &&
                            activeTab === "sellers" && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="mt-4 text-gray-700 font-sans">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "landlords" && (
                <motion.div
                  key="landlords"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-6">
                    {landlordFaqs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`bg-white rounded-xl shadow-md border p-6 cursor-pointer ${
                          activeFaqIndex === index && activeTab === "landlords"
                            ? "border-transparent shadow-lg"
                            : "border-gray-200 hover:border-[#7C1E49]/30"
                        }`}
                        onClick={() => setActiveFaqIndex(index)}
                        whileHover={{
                          scale: activeFaqIndex === index ? 1 : 1.02,
                          boxShadow:
                            activeFaqIndex === index
                              ? ""
                              : "0 8px 20px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <h4
                            className={`text-lg font-serif font-medium ${
                              activeFaqIndex === index &&
                              activeTab === "landlords"
                                ? "text-[#7C1E49]"
                                : "text-black"
                            }`}
                          >
                            {faq.question}
                          </h4>
                          <motion.div
                            className={`flex items-center justify-center w-8 h-8 rounded-full ${
                              activeFaqIndex === index &&
                              activeTab === "landlords"
                                ? "bg-[#7C1E49] text-white"
                                : "bg-gray-100 text-gray-500"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{
                                rotate: activeFaqIndex === index ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {activeFaqIndex === index &&
                            activeTab === "landlords" && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="mt-4 text-gray-700 font-sans">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <CtaSection />
    </>
  );
}
