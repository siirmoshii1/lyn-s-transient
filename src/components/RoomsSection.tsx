import React, { useState } from 'react';
import { Users, Bed, Sparkles, Check, ArrowRight, Eye } from 'lucide-react';
import { ROOMS_DATA, RoomUnit } from '../data/transientData';

interface RoomsSectionProps {
  onSelectRoom: (roomId: string) => void;
  onOpenRoomModal: (room: RoomUnit) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoom,
  onOpenRoomModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredRooms = activeCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  return (
    <section id="rooms" className="py-20 sm:py-28 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#0b1736] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#0b1736]" />
            <span>Accommodations & Suites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Comfortable Mountain Units for Every Group Size
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you are on a cozy couple's holiday, traveling with high school barkada, or bringing the whole family to Baguio, our units offer private living spaces, complete kitchens, and soothing mountain pine views.
          </p>
        </div>

        {/* Filter Controls (Segmented functional buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-lg max-w-xl mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Units ({ROOMS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('couple')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'couple'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Couples (2-3 Pax)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('barkada')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'barkada'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Barkada (4-7 Pax)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('family')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'family'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Family Flat (6-10 Pax)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('whole-house')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'whole-house'
                ? 'bg-[#0b1736] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Whole House (12-18 Pax)
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1736]/80 via-transparent to-transparent" />
                  
                  {/* Unboxed Metadata over image */}
                  <div className="absolute top-4 left-4 text-xs font-medium text-white/95 bg-[#0b1736]/75 backdrop-blur-xs px-2.5 py-1 rounded border border-white/20">
                    <span>{room.capacity}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">
                        {room.pricePerNightFormatted}
                      </span>
                      <span className="text-xs text-stone-300 ml-1.5 font-normal">/ night</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenRoomModal(room)}
                      className="inline-flex items-center gap-1.5 text-xs text-stone-200 hover:text-white bg-white/20 hover:bg-white/30 backdrop-blur-xs px-3 py-1.5 rounded transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Gallery & Specs</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata with subtle dots */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#0b1736]" />
                      {room.capacity}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-[#0b1736]" />
                      {room.beds}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-[#0b1736] transition-colors">
                    {room.name}
                  </h3>

                  <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {room.tagline}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#0b1736] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenRoomModal(room)}
                  className="w-1/2 py-2.5 px-3 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 active:scale-98 rounded-lg transition-all text-center cursor-pointer"
                >
                  Room Details
                </button>
                <button
                  type="button"
                  onClick={() => onSelectRoom(room.id)}
                  className="w-1/2 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#0b1736] hover:bg-[#152a5e] active:scale-98 rounded-lg shadow-xs transition-all text-center cursor-pointer border border-[#1b2f66]"
                >
                  <span>Select for Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
