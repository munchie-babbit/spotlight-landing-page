'use client'
import HeroSection from '@/components/HeroSection';
import SellerTimeline from '@/components/SellerTimeline';
import { useState } from 'react';
import CtaSection from '@/components/CtaSection';

export default function SellersPage() {
  const sellerCarouselProperties = [
    {
      id: 1,
      backgroundImage: '/home9.jpg',
      location: 'LUXURY ESTATE IN BEVERLY HILLS, CALIFORNIA',
      price: '$15,750,000'
    },
  ];

  return (
    <>
      <HeroSection
        title="Sell your home and save on commissions"
        subtitle="Our AI-powered platform helps you maximize your home's value while saving on fees"
        height="h-[70vh]"
        buttonText="Create a Listing Now"
        buttonLink="#get-started"
        properties={sellerCarouselProperties}
        disableCarousel={true}
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Home Selling Made Simple</h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              Our AI-powered platform streamlines the selling process from listing to closing.
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Lower Commissions</h3>
              <p className="text-gray-600 font-sans">
                Our streamlined process allows us to charge just 1.5% commission instead of the traditional 6.5%, saving you thousands on your home sale.
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
              <h3 className="text-xl font-serif mb-3">Professional Marketing</h3>
              <p className="text-gray-600 font-sans">
                We create stunning listings with professional photography, 3D virtual tours, and targeted digital marketing to attract qualified buyers.
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
              <h3 className="text-xl font-serif mb-3">Expert Guidance</h3>
              <p className="text-gray-600 font-sans">
                Our experienced agents provide personalized advice on pricing, staging, and negotiation strategies to help you sell faster and for more money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Timeline Section */}
      <section className="py-16">
        <SellerTimeline />
      </section>
      
      {/* Net Proceeds Calculator */}
      <section className="py-16 bg-gray-100" id="calculator">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Net Proceeds Calculator</h2>
            <p className="text-gray-700 font-sans max-w-3xl mx-auto">
              Estimate how much you&apos;ll walk away with after selling your home. 
              Adjust the values below to get a personalized calculation.
            </p>
          </div>
          
          <NetProceedsCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to maximize your home's value?" 
        subtitle="Our AI-powered platform and expert agents are ready to help you sell your home for more, with lower fees and a streamlined process."
        primaryButtonText="Get Started Now"
        primaryButtonLink="#get-started"
      />
    </>
  );
} 

function NetProceedsCalculator() {
  const [homeValue, setHomeValue] = useState(750000);
  const [mortgageBalance, setMortgageBalance] = useState(450000);
  const [agentCommission, setAgentCommission] = useState(1.5);
  const [closingCosts, setClosingCosts] = useState(2);
  const [repairCosts, setRepairCosts] = useState(5000);
  const [sellerConcessions, setSellerConcessions] = useState(0);
  const [spotlightExpanded, setSpotlightExpanded] = useState(false);
  const [traditionalExpanded, setTraditionalExpanded] = useState(false);
  
  // Calculate proceeds
  const traditionalAgentFee = homeValue * (5.5 / 100);
  const spotlightAgentFee = homeValue * (agentCommission / 100);
  const closingCostsAmount = homeValue * (closingCosts / 100);
  const totalCostsTraditional = traditionalAgentFee + closingCostsAmount + repairCosts + sellerConcessions;
  const totalCostsSpotlight = spotlightAgentFee + closingCostsAmount + repairCosts + sellerConcessions;
  const netProceedsTraditional = homeValue - mortgageBalance - totalCostsTraditional;
  const netProceedsSpotlight = homeValue - mortgageBalance - totalCostsSpotlight;
  const savings = netProceedsSpotlight - netProceedsTraditional;
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value === '') {
      setter(0);
    } else {
      setter(Number(value));
    }
  };

  // Tooltip component
  const Tooltip = ({ text }: { text: string }) => (
    <div className="group relative inline-block ml-2">
      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs cursor-help">
        ?
      </div>
      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity absolute z-10 w-64 p-3 bg-gray-800 text-white text-sm rounded-md shadow-lg -translate-x-1/2 left-1/2 bottom-full mb-2">
        {text}
        <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5"></div>
      </div>
    </div>
  );
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="mb-6">
            <h3 className="text-xl font-serif">Input Values</h3>
          </div>

          <div className="space-y-6">
            {/* Home Value */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="homeValue" className="block text-gray-700 font-medium">
                    Home Value
                  </label>
                  <Tooltip text="The estimated market value of your home. This is the expected selling price before any costs or fees are deducted." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(homeValue)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="homeValueInput"
                  value={homeValue.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setHomeValue)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Mortgage Balance */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="mortgageBalance" className="block text-gray-700 font-medium">
                    Mortgage Balance
                  </label>
                  <Tooltip text="The remaining balance on your mortgage that will need to be paid off when you sell your home. If you own your home outright, you can leave this as $0." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(mortgageBalance)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="mortgageBalanceInput"
                  value={mortgageBalance.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setMortgageBalance)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Agent Commission with Spotlight */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="agentCommission" className="block text-gray-700 font-medium">
                    Spotlight Agent Commission
                  </label>
                  <Tooltip text="The percentage fee paid to Spotlight Realty for selling your home. This is typically 1.5%, significantly lower than the traditional agent commission of 5.5%." />
                </div>
                <span className="text-gray-700 font-medium">{agentCommission}% ({formatCurrency(spotlightAgentFee)})</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="agentCommissionInput"
                  value={agentCommission}
                  onChange={(e) => handleInputChange(e, setAgentCommission)}
                  className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
              </div>
            </div>
            
            {/* Closing Costs */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="closingCosts" className="block text-gray-700 font-medium">
                    Closing Costs
                  </label>
                  <Tooltip text="Additional expenses incurred when transferring property ownership. These typically include title insurance, escrow fees, transfer taxes, and attorney fees. Usually ranges from 1-4% of the sale price." />
                </div>
                <span className="text-gray-700 font-medium">{closingCosts}% ({formatCurrency(closingCostsAmount)})</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="closingCostsInput"
                  value={closingCosts}
                  onChange={(e) => handleInputChange(e, setClosingCosts)}
                  className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
              </div>
            </div>
            
            {/* Repair Costs */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="repairCosts" className="block text-gray-700 font-medium">
                    Repair Costs
                  </label>
                  <Tooltip text="Estimated expenses for any repairs or improvements needed before selling your home. This might include fixing structural issues, updating appliances, painting, or other improvements to increase your home's value." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(repairCosts)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="repairCostsInput"
                  value={repairCosts.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setRepairCosts)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Seller Concessions */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="sellerConcessions" className="block text-gray-700 font-medium">
                    Seller Concessions
                  </label>
                  <Tooltip text="Money you agree to pay toward the buyer's costs. These might include contributing to closing costs, paying for inspections, or offering credits for repairs. Often used as a negotiation tool in competitive markets." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(sellerConcessions)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="sellerConcessionsInput"
                  value={sellerConcessions.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setSellerConcessions)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-gray-50 rounded-lg p-6 h-full">
            <h3 className="text-xl font-serif mb-6 text-center">Your Net Proceeds</h3>
            
            <div className="space-y-6">
              {/* With Spotlight Realty */}
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50"
                  onClick={() => setSpotlightExpanded(!spotlightExpanded)}
                >
                  <h4 className="text-lg font-medium">With Spotlight Realty</h4>
                  <div className="flex items-center">
                    <span className="font-bold text-[#7C1E49] mr-3">{formatCurrency(netProceedsSpotlight)}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-gray-500 transition-transform ${spotlightExpanded ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {spotlightExpanded && (
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home Sale Price</span>
                        <span className="font-medium">{formatCurrency(homeValue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mortgage Payoff</span>
                        <span className="font-medium text-red-600">-{formatCurrency(mortgageBalance)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Agent Commission ({agentCommission}%)</span>
                        <span className="font-medium text-red-600">-{formatCurrency(spotlightAgentFee)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Closing Costs</span>
                        <span className="font-medium text-red-600">-{formatCurrency(closingCostsAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Repairs & Concessions</span>
                        <span className="font-medium text-red-600">-{formatCurrency(repairCosts + sellerConcessions)}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2">
                        <span>Total Costs</span>
                        <span className="text-red-600">-{formatCurrency(totalCostsSpotlight)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* With Traditional Agent */}
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50"
                  onClick={() => setTraditionalExpanded(!traditionalExpanded)}
                >
                  <h4 className="text-lg font-medium">With Traditional Agent</h4>
                  <div className="flex items-center">
                    <span className="font-bold mr-3">{formatCurrency(netProceedsTraditional)}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-gray-500 transition-transform ${traditionalExpanded ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {traditionalExpanded && (
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home Sale Price</span>
                        <span className="font-medium">{formatCurrency(homeValue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mortgage Payoff</span>
                        <span className="font-medium text-red-600">-{formatCurrency(mortgageBalance)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Agent Commission (5.5%)</span>
                        <span className="font-medium text-red-600">-{formatCurrency(traditionalAgentFee)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Closing Costs</span>
                        <span className="font-medium text-red-600">-{formatCurrency(closingCostsAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Repairs & Concessions</span>
                        <span className="font-medium text-red-600">-{formatCurrency(repairCosts + sellerConcessions)}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2">
                        <span>Total Costs</span>
                        <span className="text-red-600">-{formatCurrency(totalCostsTraditional)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-[#7C1E49]/10 p-4 rounded-lg mt-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Your Savings with Spotlight</span>
                  <span className="font-bold text-[#7C1E49] text-xl">{formatCurrency(savings)}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#get-started" 
                  className="block w-full bg-[#7C1E49] text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-[#7C1E49]/90 transition-colors"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 