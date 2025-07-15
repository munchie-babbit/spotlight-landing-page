'use client';

import Image from 'next/image';
import CtaSection from '@/components/CtaSection';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homebackground.jpg"
            alt="About Spotlight Realty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              About Spotlight Realty
            </h1>
            <p className="text-xl text-white/90 font-sans">
              Revolutionizing real estate with AI-powered solutions and human expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-700 font-sans mb-6">
                Spotlight Realty was founded in 2020 with a simple mission: to make real estate transactions more efficient, transparent, and affordable. We recognized that the traditional real estate model was outdated and ripe for innovation.
              </p>
              <p className="text-gray-700 font-sans mb-6">
                By combining cutting-edge AI technology with the expertise of seasoned real estate professionals, we&apos;ve created a platform that streamlines the entire process—from listing to closing—while dramatically reducing costs for our clients.
              </p>
              <p className="text-gray-700 font-sans">
                Today, we&apos;re proud to have helped thousands of homeowners sell their properties faster and with higher returns than traditional agencies, all while charging a fraction of the standard commission.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/home6.jpg"
                alt="Spotlight Realty Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#7C1E49]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Trust</h3>
              <p className="text-gray-700 font-sans">
                We believe in complete transparency throughout the real estate process. Our clients always know exactly what&apos;s happening with their transaction and why we&apos;re recommending specific strategies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#7C1E49]"
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
              <h3 className="text-2xl font-serif mb-4">Innovation</h3>
              <p className="text-gray-700 font-sans">
                We constantly push the boundaries of what&apos;s possible in real estate. Our AI-powered platform evolves with each transaction, becoming smarter and more effective at matching buyers with their ideal properties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#7C1E49]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#7C1E49]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Human Touch</h3>
              <p className="text-gray-700 font-sans">
                While we leverage technology to improve efficiency, we never forget the human element of real estate. Our experienced agents are always available to provide personalized guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Meet Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/home1.jpg"
                  alt="CEO Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Sarah Johnson</h3>
              <p className="text-[#7C1E49] font-medium mb-4">CEO & Founder</p>
              <p className="text-gray-700 font-sans">
                Former tech executive with 15+ years in real estate. Pioneer in applying AI to property transactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/home2.jpg"
                  alt="CTO Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Michael Chen</h3>
              <p className="text-[#7C1E49] font-medium mb-4">CTO</p>
              <p className="text-gray-700 font-sans">
                AI researcher and software architect who built our proprietary matching algorithm and virtual tour platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/home3.jpg"
                  alt="COO Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Olivia Rodriguez</h3>
              <p className="text-[#7C1E49] font-medium mb-4">Chief Real Estate Officer</p>
              <p className="text-gray-700 font-sans">
                20+ years in luxury real estate with expertise in market analysis and property valuation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Join the real estate revolution" 
        subtitle="Experience the future of buying, selling, and renting property with our AI-powered platform and expert human support."
        primaryButtonText="Get Started"
        primaryButtonLink="/sellers"
      />
    </>
  );
} 