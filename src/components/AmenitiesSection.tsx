import React from 'react';
import {
  Flame,
  Utensils,
  Wifi,
  Car,
  Droplets,
  Trees,
  BedDouble,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { AMENITIES_DATA } from '../data/transientData';

export const AmenitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-emerald-700" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-sky-700" />;
      case 'Car':
        return <Car className="w-5 h-5 text-indigo-700" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-800" />;
      case 'BedDouble':
        return <BedDouble className="w-5 h-5 text-stone-700" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold text-[#0b1736] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-[#0b1736]" />
              <span>Thoughtfully Equipped</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              Everything You Need for a Relaxing Mountain Stay
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Unlike cramped hotel rooms where cooking is forbidden and parking is a hassle, our Baguio transient homes give you the full freedom of a spacious, fully equipped mountain residence.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1.5 w-full">
              <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b1736]" />
                <span>Zero Hidden Utility Charges</span>
              </div>
              <p>Free cooking LPG gas, free drinking water dispenser, and free Wi-Fi included in every reservation.</p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((amenity, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-50/80 rounded-xl border border-stone-200/80 hover:border-[#0b1736]/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-stone-200 flex items-center justify-center mb-4">
                  {getIcon(amenity.icon)}
                </div>
                <h3 className="text-base font-semibold text-stone-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transient vs Hotel Feature Comparison Banner */}
        <div className="mt-16 bg-[#0b1736] text-white rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden relative border border-[#1b2b52]">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <div className="text-xs uppercase tracking-wider text-amber-200 font-semibold flex items-center gap-2">
                <span>The Lyn's Transient Standard</span>
                <span>·</span>
                <span className="italic font-serif">"Now, come to the best."</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Save Big on Food & Travel Expenses While Enjoying Private Living Spaces
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Visiting Baguio with family or barkada can get expensive with restaurant dining for every meal. Shop fresh broccoli, strawberries, sayote, and meats at Baguio Public Market and cook hearty family meals in your private kitchen!
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-start md:items-end justify-center">
              <div className="text-right text-xs text-stone-400">
                Avg. Savings per family:
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-200 tabular-nums">
                ₱4,500+ / trip
              </div>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-amber-400 hover:bg-amber-300 active:scale-98 text-[#0b1736] text-xs font-bold rounded-md transition-all whitespace-nowrap shadow-sm"
              >
                Book Your Dates Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
