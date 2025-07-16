'use client'

import { useState } from 'react';

export default function RentalIncomeCalculator() {
  const [rentalValue, setRentalValue] = useState(3000);
  const [vacancyRate, setVacancyRate] = useState(5);
  const [propertyManagementFee, setPropertyManagementFee] = useState(4);
  const [maintenanceCosts, setMaintenanceCosts] = useState(2);
  const [propertyTaxes, setPropertyTaxes] = useState(500);
  const [utilities, setUtilities] = useState(0);
  const [spotlightExpanded, setSpotlightExpanded] = useState(false);
  const [traditionalExpanded, setTraditionalExpanded] = useState(false);
  
  // Calculate income
  const traditionalManagementFee = rentalValue * (10 / 100);
  const spotlightManagementFee = rentalValue * (propertyManagementFee / 100);
  const vacancyLoss = rentalValue * (vacancyRate / 100);
  const maintenanceCostsAmount = rentalValue * (maintenanceCosts / 100);
  
  const totalCostsTraditional = traditionalManagementFee + vacancyLoss + maintenanceCostsAmount + propertyTaxes + utilities;
  const totalCostsSpotlight = spotlightManagementFee + vacancyLoss + maintenanceCostsAmount + propertyTaxes + utilities;
  
  const annualRentalIncome = rentalValue * 12;
  const netIncomeTraditional = annualRentalIncome - (totalCostsTraditional * 12);
  const netIncomeSpotlight = annualRentalIncome - (totalCostsSpotlight * 12);
  const savings = netIncomeSpotlight - netIncomeTraditional;
  
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
            {/* Monthly Rental Value */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="rentalValue" className="block text-gray-700 font-medium">
                    Monthly Rental Value
                  </label>
                  <Tooltip text="The estimated monthly rental income for your property based on current market rates." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(rentalValue)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="rentalValueInput"
                  value={rentalValue.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setRentalValue)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Vacancy Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="vacancyRate" className="block text-gray-700 font-medium">
                    Vacancy Rate
                  </label>
                  <Tooltip text="The percentage of time your property might be vacant between tenants. The industry average is 5-10%." />
                </div>
                <span className="text-gray-700 font-medium">{vacancyRate}% ({formatCurrency(vacancyLoss)})</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="vacancyRateInput"
                  value={vacancyRate}
                  onChange={(e) => handleInputChange(e, setVacancyRate)}
                  className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
              </div>
            </div>
            
            {/* Spotlight Management Fee */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="propertyManagementFee" className="block text-gray-700 font-medium">
                    Spotlight Management Fee
                  </label>
                  <Tooltip text="The percentage fee paid to Spotlight Realty for managing your rental property. This is typically 4%, significantly lower than the traditional management fee of 10%." />
                </div>
                <span className="text-gray-700 font-medium">{propertyManagementFee}% ({formatCurrency(spotlightManagementFee)})</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="propertyManagementFeeInput"
                  value={propertyManagementFee}
                  onChange={(e) => handleInputChange(e, setPropertyManagementFee)}
                  className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
              </div>
            </div>
            
            {/* Maintenance Costs */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="maintenanceCosts" className="block text-gray-700 font-medium">
                    Maintenance Costs
                  </label>
                  <Tooltip text="Estimated monthly expenses for property maintenance and repairs. Industry standard is 1-3% of monthly rental value." />
                </div>
                <span className="text-gray-700 font-medium">{maintenanceCosts}% ({formatCurrency(maintenanceCostsAmount)})</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="maintenanceCostsInput"
                  value={maintenanceCosts}
                  onChange={(e) => handleInputChange(e, setMaintenanceCosts)}
                  className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
              </div>
            </div>
                
            {/* Property Taxes */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="propertyTaxes" className="block text-gray-700 font-medium">
                    Monthly Property Taxes
                  </label>
                  <Tooltip text="The monthly property tax amount. This is typically your annual property tax divided by 12." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(propertyTaxes)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="propertyTaxesInput"
                  value={propertyTaxes.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setPropertyTaxes)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
                
            {/* Utilities */}
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <label htmlFor="utilities" className="block text-gray-700 font-medium">
                    Monthly Utilities
                  </label>
                  <Tooltip text="Monthly utilities costs that you as the landlord will cover. Leave at $0 if tenants will pay all utilities." />
                </div>
                <span className="text-gray-700 font-medium">{formatCurrency(utilities)}</span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="utilitiesInput"
                  value={utilities.toLocaleString()}
                  onChange={(e) => handleInputChange(e, setUtilities)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C1E49] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-gray-50 rounded-lg p-6 h-full">
            <h3 className="text-xl font-serif mb-6 text-center">Your Annual Rental Income</h3>
            
            <div className="space-y-6">
              {/* With Spotlight Realty */}
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50"
                  onClick={() => setSpotlightExpanded(!spotlightExpanded)}
                >
                  <h4 className="text-lg font-medium">With Spotlight Realty</h4>
                  <div className="flex items-center">
                    <span className="font-bold text-[#7C1E49] mr-3">{formatCurrency(netIncomeSpotlight)}</span>
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
                        <span className="text-gray-600">Annual Rental Income</span>
                        <span className="font-medium">{formatCurrency(annualRentalIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Management Fee ({propertyManagementFee}%)</span>
                        <span className="font-medium text-red-600">-{formatCurrency(spotlightManagementFee * 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vacancy Loss</span>
                        <span className="font-medium text-red-600">-{formatCurrency(vacancyLoss * 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maintenance</span>
                        <span className="font-medium text-red-600">-{formatCurrency(maintenanceCostsAmount * 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Taxes & Utilities</span>
                        <span className="font-medium text-red-600">-{formatCurrency((propertyTaxes + utilities) * 12)}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2">
                        <span>Total Annual Expenses</span>
                        <span className="text-red-600">-{formatCurrency(totalCostsSpotlight * 12)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* With Traditional Management */}
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50"
                  onClick={() => setTraditionalExpanded(!traditionalExpanded)}
                >
                  <h4 className="text-lg font-medium">With Traditional Management</h4>
                  <div className="flex items-center">
                    <span className="font-bold mr-3">{formatCurrency(netIncomeTraditional)}</span>
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
                        <span className="text-gray-600">Annual Rental Income</span>
                        <span className="font-medium">{formatCurrency(annualRentalIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Management Fee (10%)</span>
                        <span className="font-medium text-red-600">-{formatCurrency(traditionalManagementFee * 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vacancy Loss</span>
                        <span className="font-medium text-red-600">-{formatCurrency(vacancyLoss * 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maintenance</span>
                        <span className="font-medium text-red-600">-{formatCurrency(maintenanceCostsAmount * 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Taxes & Utilities</span>
                        <span className="font-medium text-red-600">-{formatCurrency((propertyTaxes + utilities) * 12)}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2">
                        <span>Total Annual Expenses</span>
                        <span className="text-red-600">-{formatCurrency(totalCostsTraditional * 12)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-[#7C1E49]/10 p-4 rounded-lg mt-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Your Annual Savings with Spotlight</span>
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