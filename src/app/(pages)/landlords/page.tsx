'use client';

import HeroSection from '@/components/HeroSection';
import CtaSection from '@/components/CtaSection';
import LandlordTimeline from '@/components/LandlordTimeline';
import RentalIncomeCalculator from '@/components/RentalIncomeCalculator';

export default function LandlordsPage() {
  const landlordCarouselProperties = [
    {
      id: 1,
      backgroundImage: '/home3.jpg',
      location: 'MANAGED PROPERTY IN MANHATTAN, NEW YORK',
      price: '$4,500/month revenue'
    },
  ];

  return (
    <>
      <HeroSection
        title="Maximize your rental income"
        subtitle="Our AI-powered platform helps you find quality tenants and manage your properties with minimal effort"
        height="h-[70vh]"
        buttonText="Create a Listing Now"
        buttonLink="#calculator"
        properties={landlordCarouselProperties}
        disableCarousel={true}
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Property Management Made Simple</h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              Our AI-powered platform streamlines the rental management process from tenant screening to lease renewal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Save on costs</h3>
              <p className="text-gray-600 font-sans">
                Our AI-powered platform helps you find quality tenants while charging 4% instead of a traditional 10% on your rental income.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
              <h3 className="text-xl font-serif mb-3">Virtual Property Tours</h3>
              <p className="text-gray-600 font-sans">
                We create professional 3D virtual tours of your property that prospective tenants can access 24/7, reducing unnecessary in-person showings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Thorough Screening</h3>
              <p className="text-gray-600 font-sans">
                Our comprehensive tenant screening includes credit checks, income verification, rental history, and background checks to find reliable tenants.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* For Landlords Section */}
      <section className="py-16">
        <LandlordTimeline />
      </section>

      {/* Rental Income Calculator */}
      <section className="py-16 bg-gray-100" id="calculator">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Rental Income Calculator</h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              Estimate how much you&apos;ll earn from your rental property with Spotlight&apos;s management versus traditional property management.
              Adjust the values below to get a personalized calculation.
            </p>
          </div>
          
          <RentalIncomeCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Start maximizing your rental income today" 
        subtitle="Join thousands of property owners who've increased their returns with our AI-powered management platform and industry-low 1.5% fee."
        primaryButtonText="Get Started"
        primaryButtonLink="#calculator"
      />
    </>
  );
} 