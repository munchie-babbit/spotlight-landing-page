"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function LandlordTimeline() {
  const landlordJourney = [
    {
      title: "Step 1: Property Assessment",
      description: "We evaluate your property's rental potential",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our AI-powered platform collects information about your rental property and your leasing goals through a simple questionnaire. You&apos;ll receive a rental valuation estimate and personalized leasing strategy.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Property assessment questionnaire
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ AI-generated rental valuation
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Customized leasing strategy
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Timeline and expectations overview
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Property Preparation",
      description: "We optimize your property to attract quality tenants",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our team helps prepare your property for the rental market. This includes professional photography, virtual staging, and recommendations for improvements that can increase your rental income and attract quality tenants.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Professional photography and videography
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Virtual staging of key rooms
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ 3D virtual tour creation
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Pre-listing improvement recommendations
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3: Listing Creation",
      description: "Your property is marketed to qualified tenants",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Your property is strategically listed across multiple rental platforms to maximize exposure. Our AI targeting ensures your listing reaches the most qualified tenants, and our dynamic pricing strategy helps you optimize rental income.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Multi-platform listing distribution
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ SEO-optimized property description
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ AI-powered tenant targeting
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Real-time market competition analysis
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Tenant Screening",
      description: "We find reliable tenants for your property",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our AI scheduling system manages viewing appointments efficiently, while our comprehensive screening process ensures only qualified tenants visit your property. We handle background checks, credit reports, and income verification.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Digital showing calendar
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Tenant pre-qualification screening
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Background and credit checks
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Income and employment verification
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 5: Application Management",
      description: "We help you select the ideal tenant",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            When applications come in, our AI system analyzes each one, comparing rental history, financial stability, and tenant profiles. Our team provides guidance on selecting the best tenant for your property.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Side-by-side application comparison
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Tenant financial qualification assessment
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ AI-powered tenant matching
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Risk analysis of each applicant
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 6: Lease & Management",
      description: "We handle the paperwork and ongoing management",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Once a tenant is selected, our system guides you through the leasing process with digital document management and move-in coordination. We offer ongoing property management services to handle maintenance, rent collection, and tenant communication.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Digital lease preparation and e-signatures
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Move-in inspection and documentation
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Secure rent collection system
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Ongoing maintenance and tenant support
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7C1E49] to-[#968F62]">
      </div>
      
      {/* Content Card */}
      <div className="relative z-10 container mx-auto py-12">
        <div className="max-w-7xl mx-auto pb-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white pb-4">
            Your Landlord Journey
          </h2>
          <p className="text-white font-sans max-w-3xl mx-auto text-center pb-8">
            Our AI-powered platform helps you find quality tenants and manage your properties with minimal effort.
          </p>
        </div>
        <div className="bg-white p-6 md:p-10 rounded-lg">
          <div>
            <Timeline data={landlordJourney} />
          </div>
        </div>
      </div>
    </div>
  );
} 