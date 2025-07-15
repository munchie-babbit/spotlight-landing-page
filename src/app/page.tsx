"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { motion } from "framer-motion";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProcessTab, setActiveProcessTab] = useState(0);
  const [activeTab, setActiveTab] = useState("sellers");
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const processTabs = [
    {
      id: "intake",
      title: "Intake",
      description:
        "Quickly onboard and get your property listed with our 4-minute intake process.",
      bulletPoints: [
        "Complete a simple questionnaire about your property",
        "AI analyzes your responses to create a tailored strategy",
        "Receive an instant property valuation estimate",
      ],
      icon: "/file.svg",
      image: "/home1.jpg",
    },
    {
      id: "staging",
      title: "Staging",
      description:
        "Our professionals prepare your property to look its absolute best for potential buyers.",
      bulletPoints: [
        "Professional photography and virtual tour creation",
        "Guidance on furniture arrangement and decor",
        "Targeted improvements to increase property value",
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
        "SEO-optimized listing with professional photos",
        "AI-powered targeting to reach qualified buyers",
      ],
      icon: "/globe.svg",
      image: "/home3.jpg",
    },
    {
      id: "showings",
      title: "Showings",
      description:
        "Our AI agents manage all inquiries and schedule viewings with qualified buyers.",
      bulletPoints: [
        "Automatic screening of potential buyers",
        "Convenient scheduling with digital calendar",
        "Detailed feedback collection after each viewing",
      ],
      icon: "/file.svg",
      image: "/home4.jpg",
    },
    {
      id: "offers",
      title: "Offers",
      description:
        "Review offers through our digital platform with AI-powered insights and analysis.",
      bulletPoints: [
        "Side-by-side offer comparison tools",
        "AI analysis of terms and contingencies",
        "Negotiation guidance from expert agents",
      ],
      icon: "/file.svg",
      image: "/home5.jpg",
    },
    {
      id: "closing",
      title: "Closing",
      description:
        "Complete the sale with our streamlined closing process and digital document signing.",
      bulletPoints: [
        "Digital document preparation and e-signatures",
        "Coordination with all parties involved",
        "Secure fund transfer and escrow management",
      ],
      icon: "/window.svg",
      image: "/home6.jpg",
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      title: "Listing Info",
      description: "Complete the listing information.",
      status: "active",
      icon: "/file.svg",
      buttonText: "Start Now",
    },
    {
      id: 2,
      title: "Availability",
      description: 'Complete "Listing Info" first to unlock this step.',
      status: "blocked",
      icon: "/globe.svg",
    },
    {
      id: 3,
      title: "Documents",
      description: 'Complete "Listing Info" first to unlock this step.',
      status: "blocked",
      icon: "/file.svg",
    },
    {
      id: 4,
      title: "Identity Verification",
      description:
        "Identity verification has already been completed for your account.",
      status: "completed",
      icon: "/window.svg",
    },
  ];

  const featuredProperties = [
    {
      id: 1,
      image: "/listing1.png",
      price: "$2,300,000",
      address: "House on Long Island, NY",
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 3200,
      views: 3452,
    },
    {
      id: 2,
      image: "/listing2.png",
      price: "$1,227,992",
      address: "Villa in Santo Isidoro, Portugal",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      views: 2891,
    },
    {
      id: 3,
      image: "/home3.jpg",
      price: "$25,729,369",
      address: "Villa in Bel Ombre, Mauritius",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      views: 5127,
    },
    {
      id: 4,
      image: "/home4.jpg",
      price: "$947,308",
      address: "House in Briennon, France",
      bedrooms: 4,
      bathrooms: 2.5,
      sqft: 3000,
      views: 1845,
    },
    {
      id: 5,
      image: "/listing1.png",
      price: "$7,995,000",
      address: "House in Greenwich, Connecticut",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 5200,
      views: 4236,
    },
    {
      id: 6,
      image: "/listing2.png",
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
      backgroundImage: "/home9.jpg",
      location: "PENTHOUSE IN NEW YORK, NEW YORK, UNITED STATES",
      price: "$32,400,000",
    },
    {
      id: 4,
      backgroundImage: "/home3.jpg",
      location: "MANSION IN MIAMI, FLORIDA, UNITED STATES",
      price: "$22,800,000",
    },
    {
      id: 5,
      backgroundImage: "/home4.jpg",
      location: "MANSION IN MIAMI, FLORIDA, UNITED STATES",
      price: "$22,800,000",
    },
    {
      id: 6,
      backgroundImage: "/home5.jpg",
      location: "MANSION IN MIAMI, FLORIDA, UNITED STATES",
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
        "By leveraging AI to automate routine tasks and streamline the selling process, we're able to reduce commission fees by up to 75% compared to traditional brokerages, without sacrificing quality of service or results.",
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
        "Spotlight charges a small, transparent fee for listing your property and accessing our suite of management tools. There are no hidden costs, and you only pay when you choose to list or upgrade your property’s visibility.",
    },
    {
      id: "virtual-tours",
      question: "Can I offer virtual tours of my property to potential renters?",
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
        title="Sell your home for more"
        subtitle="Save 75% on agent fees when you sell or lease with Spotlight"
        buttonText="Create a Listing Now"
        buttonLink="/sellers"
        properties={carouselProperties}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              We&apos;re here for every step of your journey
            </h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              From initial intake to final closing, our AI-powered platform and
              professional team guide you through the entire process of selling
              your home.
            </p>
          </div>

          <div className="overflow-x-auto pb-6 no-scrollbar">
            <div className="flex space-x-8 min-w-max px-4">
              {processTabs.map((tab, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={tab.id}
                  className={`w-80 bg-white rounded-lg shadow-md border overflow-hidden ${
                    activeProcessTab === index
                      ? "border-[#7C1E49]"
                      : "border-gray-200"
                  } cursor-pointer transition-all duration-300 hover:shadow-lg`}
                  onClick={() => setActiveProcessTab(index)}
                >
                  <div className="relative h-20 w-full bg-[#7C1E49]">
                    {/* <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      className="object-cover"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#968F62]/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-serif">{tab.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div
                      className={`h-1 w-16 ${
                        activeProcessTab === index
                          ? "bg-[#7C1E49]"
                          : "bg-gray-200"
                      } mb-4`}
                    ></div>
                    <p className="text-gray-600 font-sans mb-4">
                      {tab.description}
                    </p>

                    <ul className="space-y-3">
                      {tab.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
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
                        </li>
                      ))}
                    </ul>
                  </div>
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
                <p className="text-gray-700 mb-8 font-sans w-1/2">
                  We use the OneKey MLS to publish your listing across top real
                  estate platforms like Zillow, StreetEasy, Realtor.com, and
                  more.
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  aria-label="Previous"
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
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  aria-label="Next"
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
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {featuredProperties
                .slice(activeIndex, activeIndex + 5)
                .map((property) => (
                  <div key={property.id} className="group cursor-pointer">
                    <div className="relative h-64 mb-3 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gray-200">
                        <Image
                          src={property.image}
                          alt={property.address}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* View count */}
                      <div className="absolute top-3 left-3 bg-white backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium flex items-center">
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
                      </div>
                    </div>

                    <div className="px-1">
                      <p className="text-xl font-serif font-semibold">
                        {property.price}
                      </p>
                      <p className="text-gray-700 font-sans text-sm truncate">
                        {property.address}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="relative">
            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
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
                  alt="Facebook"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/realtorcom.png"
                  alt="Facebook"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/redfinlogo.png"
                  alt="Facebook"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/compass.png"
                  alt="Facebook"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/trulia.png"
                  alt="Facebook"
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
      <div className="relative mt-[-100vh]">
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

        {/* Manage To-dos Card */}
        <section className="relative pt-4 pb-24">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block col-span-5"></div>
              <div className="col-span-1 lg:col-span-7">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-black">
                    Manage your to-dos
                  </h3>
                  <p className="text-gray-700 font-sans mb-8">
                    Our intelligent task management system keeps track of all
                    the important steps in your home selling journey. From
                    listing preparation to closing documents, we&apos;ll guide
                    you through each task with clear instructions and timely
                    reminders.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {serviceSteps.map((step) => (
                      <div
                        key={step.id}
                        className={`border rounded-lg p-6 relative bg-white flex-1 min-w-[240px] border-gray-200`}
                      >
                        {step.status === "active" && (
                          <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            Next
                          </div>
                        )}

                        {step.status === "blocked" && (
                          <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                            Blocked
                          </div>
                        )}

                        {step.status === "completed" && (
                          <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            Completed
                          </div>
                        )}

                        <div className="flex items-center mb-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                              step.status === "active"
                                ? "bg-gray-100 !text-white "
                                : step.status === "completed"
                                ? "bg-green-100"
                                : "bg-gray-100"
                            }`}
                          >
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={20}
                              height={20}
                            />
                          </div>
                          <h4 className="text-lg font-serif">{step.title}</h4>
                        </div>

                        <p className="text-gray-600 font-sans mb-4 text-sm">
                          {step.description}
                        </p>

                        {step.status === "active" && step.buttonText && (
                          <button className="text-[#7C1E49] font-sans flex items-center text-sm font-medium">
                            {step.buttonText}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
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
                          </button>
                        )}

                        {step.status === "blocked" && (
                          <div className="flex items-center text-orange-500 font-sans text-sm">
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
                                d="M12 15v2m0 0v2m0-2h2m-2 0H9"
                              />
                            </svg>
                            Blocked
                          </div>
                        )}

                        {step.status === "completed" && (
                          <div className="flex items-center text-green-600 font-sans text-sm">
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Already Completed
                          </div>
                        )}
                      </div>
                    ))}
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
                    Manage your appointments
                  </h3>
                  <p className="text-gray-700 font-sans mb-8">
                    Our smart scheduling system helps you manage property
                    showings, open houses, and other important appointments.
                    Coordinate with potential buyers and your agent seamlessly,
                    with automatic reminders and real-time calendar updates.
                  </p>

                  <div className="grid grid-cols-4 gap-4 md:gap-6  pb-4">
                    {/* Calendar header - Days of week */}
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base">
                      Monday
                    </div>
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base">
                      Thursday
                    </div>
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base">
                      Saturday
                    </div>
                    <div className="text-center font-medium text-gray-500 font-sans text-sm md:text-base">
                      Sunday
                    </div>

                    {/* Calendar days */}
                    {/* Monday */}
                    <div className="border-gray-200 border rounded-lg p-3 relative bg-white shadow-sm hover:shadow-md transition-shadow">
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
                      <div className="text-right text-sm text-gray-500 mb-2">
                        18
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
                      <div className="text-right text-sm text-gray-500 mb-2">
                        20
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
                      <div className="text-right text-sm text-gray-500 mb-2">
                        21
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
                    Real human agents, always available
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
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/20 border-2 border-white"></div>
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/30 border-2 border-white"></div>
                          <div className="w-10 h-10 rounded-full bg-[#7C1E49]/40 border-2 border-white"></div>
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

                      <div className="mt-8">
                        <button className="bg-[#7C1E49] text-white px-6 py-3 rounded-lg font-sans font-medium hover:bg-[#7C1E49]/90 transition-colors">
                          Chat with an Agent
                        </button>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Discover what makes our selling experience different
            </h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              Spotlight Realty combines cutting-edge AI technology with
              personalized service to create a seamless, efficient, and
              profitable home selling experience.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Card 1 - Tall */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-5 lg:col-span-5 row-span-2 bg-white rounded-lg shadow-md overflow-hidden  border border-gray-200 hover:border hover:border-[#7C1E49] transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-64">
                <Image
                  src="/onboarding-feature.png"
                  alt="Lower Fees"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">
                  Lightning Fast Onboarding
                </h3>
                <p className="text-gray-600 font-sans">
                  Get your listing live in just 4 minutes with our streamlined
                  onboarding process. Reach millions of potential buyers
                  instantly—no waiting, no hassle, just results.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Wide */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 lg:col-span-7 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#7C1E49] h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src="/offers-feature.png"
                    alt="Negotiate Multiple Offers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4">
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
                        d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2zm-6 4h4m-2-2v4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-3">
                    Negotiate Multiple Offers
                  </h3>
                  <p className="text-gray-600 font-sans">
                    Easily review, compare, and negotiate multiple offers at once. Accept, counter, or decline each offer directly from your dashboard.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Wide and Short */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 lg:col-span-7 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#7C1E49] h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src="/staging-feature.jpg"
                    alt="Listing Insights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4">
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
                        d="M9 17v-2a4 4 0 018 0v2M5 10a7 7 0 0114 0v2a7 7 0 01-14 0v-2zm7 8v.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-3">Free Home Staging</h3>
                  <p className="text-gray-600 font-sans">
                  Our home staging service helps you showcase your property at its best. We’ll provide expert recommendations to make your home stand out and appeal to potential buyers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Square */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-5 lg:col-span-12 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#7C1E49] flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative md:w-1/2 h-48 md:h-auto">
                  <iframe
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="xr-spatial-tracking; gyroscope; accelerometer"
                    allowFullScreen={true}
                    scrolling="no"
                    src="https://kuula.co/share/collection/71KKh?logo=0&amp;info=0&amp;fs=1&amp;vr=1&amp;sd=1&amp;thumbs=1"
                    title="Interactive 360° Virtual Tour"
                    className="jsx-ef0774e92723c1d w-full"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-4">
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
                  </div>
                  <h3 className="text-xl font-serif mb-3">Free Interactive 360° Virtual Tours</h3>
                  <p className="text-gray-600 font-sans">
                    Professional photography and 3D virtual tours help showcase
                    your property to potential buyers worldwide, allowing them
                    to explore every detail from anywhere.
                  </p>
                <a
                  href="https://www.hometrack.net/blog/how-does-matterport-work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit mt-4 inline-block text-[#7C1E49] bg-white border border-spotlight-maroon rounded-full font-semibold px-6 py-3 font-sans transition-colors duration-200 hover:bg-[#5a1533]"
                >
                  Learn more about Matterport
                </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">FAQ</h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              Answers to common questions about Spotlight. For all other
              inquires email us at <span className="text-[#7C1E49]">agent@spotlight.realty</span>.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-8 mb-10 border-b border-gray-200">
              <button
                onClick={() => {
                  setActiveTab("sellers");
                  setActiveFaqIndex(0);
                }}
                className={`pb-4 px-4 text-lg font-serif ${
                  activeTab === "sellers"
                    ? "text-[#7C1E49] border-b-2 border-[#7C1E49]"
                    : "text-black hover:text-[#7C1E49]"
                } transition-colors`}
              >
                For Sellers
              </button>

              <button
                onClick={() => {
                  setActiveTab("landlords");
                  setActiveFaqIndex(0);
                }}
                className={`pb-4 px-4 text-lg font-serif ${
                  activeTab === "landlords"
                    ? "text-[#7C1E49] border-b-2 border-[#7C1E49]"
                    : "text-black hover:text-[#7C1E49]"
                } transition-colors`}
              >
                For Landlords
              </button>
            </div>

            {activeTab === "sellers" && (
              <div>
                <div className="space-y-4">
                  {sellerFaqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className={`bg-white rounded-lg shadow-md border p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        activeFaqIndex === index && activeTab === "sellers"
                          ? "border-[#7C1E49]"
                          : "border-gray-200 hover:border-[#7C1E49]"
                      }`}
                      onClick={() => setActiveFaqIndex(index)}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-serif font-medium text-black">
                          {faq.question}
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 text-[#7C1E49] transition-transform duration-300 ${
                            activeFaqIndex === index && activeTab === "sellers"
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {activeFaqIndex === index && activeTab === "sellers" && (
                        <div className="mt-4 text-gray-700 font-sans animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "landlords" && (
              <div>
                <div className="space-y-4">
                  {landlordFaqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className={`bg-white rounded-lg shadow-md border p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        activeFaqIndex === index && activeTab === "landlords"
                          ? "border-[#7C1E49]"
                          : "border-gray-200 hover:border-[#7C1E49]"
                      }`}
                      onClick={() => setActiveFaqIndex(index)}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-serif font-medium text-black">
                          {faq.question}
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 text-[#7C1E49] transition-transform duration-300 ${
                            activeFaqIndex === index && activeTab === "landlords"
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {activeFaqIndex === index && activeTab === "landlords" && (
                        <div className="mt-4 text-gray-700 font-sans animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <CtaSection />
    </>
  );
}
