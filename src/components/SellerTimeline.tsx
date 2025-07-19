"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function SellerTimeline() {
  const sellerJourney = [
    {
      title: "Step 1: Intake Form",
      description: "We assess your property and establish your selling goals",
      image: "/onboarding-feature.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our AI-powered platform collects information about your property and
            your selling goals through a simple questionnaire. You&apos;ll
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
      title: "Step 2: Preparation & Staging",
      description: "We help make your property look its absolute best",
      image: "/home2.jpg",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our team helps prepare your property for the market. This includes
            professional photography, virtual staging, and recommendations for
            minor improvements that can significantly increase your home&apos;s
            value.
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
      title: "Step 3: Market Listing",
      description: "Your property is showcased to the right buyers",
      image: "/listing.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Your property is strategically listed across multiple platforms to
            maximize exposure. Our AI targeting ensures your listing reaches the
            most likely buyers, and our dynamic pricing strategy keeps your
            property competitive.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Multi-platform listing distribution
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ SEO-optimized property description
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ AI-powered buyer targeting
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Real-time market competition analysis
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Human Agent Showings",
      description: "We coordinate viewings and gather valuable insights",
      image: "/tour.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Our AI scheduling system manages viewing appointments efficiently,
            while screening potential buyers to ensure only serious prospects
            visit your property. Our human agents will then showcase your property to the buyer.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Digital showing calendar
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Buyer pre-qualification screening
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Automated feedback collection
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Strategy refinement based on viewer input
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 5: Offer Management",
      description: "We help you evaluate and negotiate the best offers",
      image: "/offers-feature.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            When offers come in, our AI system analyzes each one, comparing
            terms, contingencies, and financial strength of buyers. Our team
            provides guidance on negotiations to help you secure the best
            possible deal.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Side-by-side offer comparison
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Buyer financial qualification assessment
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ AI-powered negotiation suggestions
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Risk analysis of contingencies
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 6: Closing & Beyond",
      description: "We guide you through closing and your next steps",
      image: "/key-handoff.png",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-700 md:text-base">
            Once an offer is accepted, our system guides you through the closing
            process with digital document management and escrow coordination.
            After closing, we continue to provide resources for your next steps,
            whether buying a new home or investing your proceeds.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Digital document preparation and e-signatures
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Escrow and closing coordination
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Secure fund transfer management
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              ✓ Post-sale guidance and resources
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7C1E49] to-[#968F62]"></div>

      {/* Content Card */}
      <div className="relative z-10 container mx-auto py-18">
        <div className="max-w-7xl mx-auto pb-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white pb-4">
            Your Home Selling Journey
          </h2>
          <p className="text-white font-sans max-w-3xl mx-auto text-center pb-8">
            Our AI-powered platform helps you sell your home for more, with lower fees and a streamlined process.
          </p>
        </div>
        <div className="bg-white py-4 px-2 sm:p-6 md:p-10 rounded-lg">
          <div>
            <Timeline data={sellerJourney} />
          </div>
        </div>
      </div>
    </div>
  );
}
