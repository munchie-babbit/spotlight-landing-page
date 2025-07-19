"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function LandlordTimeline() {
  const landlordJourney = [
    {
      title: "Step 1: Intake Form",
      description: "We assess your property and establish your leasing goals",
      image: "/onboarding-feature.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our AI-powered platform collects information about your property and
            your leasing goals through a simple questionnaire. You&apos;ll
            receive an initial valuation estimate.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Property assessment questionnaire
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ AI-generated valuation estimate
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Customized selling strategy
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Timeline and expectations overview
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Listing Creation",
      description: "Your property is marketed to qualified tenants",
      image: "/lease-listing.png",
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
      title: "Step 3: Tenant Screening",
      description: "We help you select the ideal tenant with AI summarization",
      image: "/renters.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            When applications come in, our AI screens each one, comparing rental history, financial stability, and tenant profiles. We then provide you with a summary of the applications and help you select the ideal tenant.
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
      title: "Step 4: Lease Generation",
      description: "We generate the lease and handle the paperwork",
      image: "/lease.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Once a tenant is selected, our system guides you through the leasing process with digital document generation and signing.
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
        <div className="bg-white py-4 px-2 sm:p-6 md:p-10 rounded-lg">
          <div>
            <Timeline data={landlordJourney} />
          </div>
        </div>
      </div>
    </div>
  );
} 