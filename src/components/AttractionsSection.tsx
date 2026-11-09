import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Compass,
  Sparkles,
  CloudSun,
  Navigation,
  Car,
  ExternalLink
} from 'lucide-react';
import { ATTRACTIONS_DATA, Attraction } from '../data/transientData';

export const AttractionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredAttractions = activeTab === 'all'
    ? ATTRACTIONS_DATA
    : ATTRACTIONS_DATA.filter((item) => item.category === activeTab);

  return (
    <section id="attractions" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scenic Panorama Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-lg border border-stone-200">
          <div className="h-64 sm:h-80 w-full relative">
            <img
              src="/src/assets/images/attractions_baguio_landscape_1794202273807.jpg"
              alt="Scenic Baguio City mountain landscape framed by pine trees"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                <Compass className="w-4 h-4" />
                <span>Prime Baguio Location</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Explore Baguio's Top Attractions Minutes Away
              </h2>
              <p className="mt-2 text-stone-200 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                Lyn's Baguio Transient is situated in a peaceful, pine-covered neighborhood with swift, convenient access to the city's most beloved parks, food hubs, and scenic view decks.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Travel & Weather Advice Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 bg-white rounded-xl border border-stone-200 flex items-start gap-4 shadow-xs">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">
                8–15 Mins to Most Spots
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Skip staying in crowded downtown traffic. Reach Burnham Park, Session Road, and Camp John Hay quickly via scenic backroads.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 flex items-start gap-4 shadow-xs">
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
              <CloudSun className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">
                14°C – 22°C Highland Breeze
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Enjoy authentic Baguio sweater weather. Morning fog and evening chills are perfect for hot coffee and bonding.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 flex items-start gap-4 shadow-xs">
            <div className="p-2.5 rounded-lg bg-sky-50 text-sky-800 shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">
                Easy Taxi & Jeepney Access
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Taxis and jeepneys pass right along the main road. Host Ate Lyn also provides honest navigation tips for your itinerary.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs for Attractions */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-lg max-w-xl mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Destinations ({ATTRACTIONS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('landmarks')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'landmarks'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Top Landmarks
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nature')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'nature'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Parks & Nature
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('food')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'food'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Food & Nightlife
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shopping')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'shopping'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Souvenirs & Pasubalong
          </button>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAttractions.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-xl border border-stone-200/90 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Distance & Travel time unboxed header */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-1 font-medium text-[#0b1736]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{spot.driveTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-stone-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{spot.distance}</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                  {spot.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {spot.highlight}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-stone-100 text-xs">
                <div className="bg-[#0b1736]/5 p-2.5 rounded-lg border border-[#0b1736]/15">
                  <span className="font-semibold text-[#0b1736] block mb-0.5">
                    Host Recommendation:
                  </span>
                  <span className="text-stone-600">{spot.mustTry}</span>
                </div>

                <div className="text-stone-500 italic">
                  <span className="font-medium text-stone-700 not-italic">Tip: </span>
                  {spot.proTip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
