/**
 * ✅ PRICING TOGGLE COMPONENT
 * 
 * Interactive Monthly/Yearly toggle for pricing section
 * - Toggle between billing periods
 * - Shows "Save 30%" label on Yearly option
 * - Smooth animations
 * 
 * Usage in Astro:
 * ---
 * import PricingToggle from './PricingToggle.jsx';
 * ---
 * <PricingToggle client:load />
 */

import React, { useState } from 'react';

export default function PricingToggle() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div className="flex items-center justify-center gap-4 mb-20 border border-gray-200 opacity-100 p-2 rounded-4xl">
      {/* Monthly Button */}
      <button
        onClick={() => setBillingPeriod('monthly')}
        className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
          billingPeriod === 'monthly'
            ? 'bg-gray-300 text-gray-900'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Monthly
      </button>

      {/* Yearly Button with Badge */}
      <button
  onClick={() => setBillingPeriod('yearly')}
  className={`flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
    billingPeriod === 'yearly'
      ? 'bg-gray-300 text-gray-900'
      : 'text-gray-500 hover:text-gray-700'
  }`}
>
  Yearly
  {/* ✅ INLINE badge (NOT absolute anymore) */}
  <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
    Save 30%
  </span>
</button>

      {/* Hidden data attribute for pricing section to use */}
      <input
        type="hidden"
        id="billingPeriod"
        value={billingPeriod}
        readOnly
      />
    </div>
  );
}
