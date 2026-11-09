import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight, ShieldCheck, Sparkles, Coffee } from 'lucide-react';
import { ROOMS_DATA, HOST_CONTACT } from '../data/transientData';

interface HeroProps {
  onCheckAvailability: (details: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 3);
  const checkInDefault = tomorrow.toISOString().split('T')[0];

  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 5);
  const checkOutDefault = dayAfter.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(checkInDefault);
  const [checkOut, setCheckOut] = useState(checkOutDefault);
  const [guests, setGuests] = useState(4);
  const [roomType, setRoomType] = useState('barkada-loft');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      roomType
    });
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_baguio_transient_villa_1794202270809.jpg"
          alt="Lyn's Baguio Transient Home surrounded by misty pine trees"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl">
          {/* Brand Logo & Motto Lockup */}
          <div className="inline-flex items-center gap-3 p-1.5 pr-4 bg-[#0b1736]/90 backdrop-blur-md rounded-full border border-amber-200/30 text-white mb-6 shadow-lg">
            <img
              src={HOST_CONTACT.logoUrl}
              alt="Lyn's Transient Homes"
              className="w-9 h-9 rounded-full object-cover border border-amber-200/50"
            />
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="text-amber-200 italic font-serif tracking-wide">
                "{HOST_CONTACT.brandMotto}"
              </span>
            </div>
          </div>

          {/* Unboxed editorial kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-200/90 uppercase mb-4">
            <span>City of Pines</span>
            <span aria-hidden="true">·</span>
            <span>Baguio City, Philippines</span>
            <span aria-hidden="true">·</span>
            <span>Family & Barkada Sanctuary</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight sm:leading-tight text-balance mb-6">
            Your Peaceful Mountain Home in Baguio City
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal mb-8">
            Wake up to cool pine-scented breezes, misty mountain views, and the comforting warmth of family hospitality. Complete private kitchens, 24/7 strong hot showers, fast fiber Wi-Fi, and safe parking just minutes from Burnham Park.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-300 mb-10">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Registered & Verified Transient</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-amber-200" />
              <span>Full Kitchen Cooking Allowed</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>Hot Showers Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Quick Booking Strip (Functional Booking Bar) */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-2xl border border-stone-200/80 text-stone-900 max-w-5xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label htmlFor="hero-check-in" className="block text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0b1736]" />
                Check-in Date
              </label>
              <input
                id="hero-check-in"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                required
              />
            </div>

            <div>
              <label htmlFor="hero-check-out" className="block text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0b1736]" />
                Check-out Date
              </label>
              <input
                id="hero-check-out"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                required
              />
            </div>

            <div>
              <label htmlFor="hero-guests" className="block text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#0b1736]" />
                Number of Pax
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
              >
                <option value={2}>2 Guests (Couples)</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests (Small Family)</option>
                <option value={6}>6 Guests (Barkada)</option>
                <option value={8}>8 Guests (Family)</option>
                <option value={10}>10 Guests</option>
                <option value={14}>14 Guests (Big Group)</option>
                <option value={18}>18+ Guests (Whole House)</option>
              </select>
            </div>

            <div>
              <label htmlFor="hero-unit" className="block text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#0b1736]" />
                Accommodation Unit
              </label>
              <select
                id="hero-unit"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
              >
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.pricePerNightFormatted}/nt)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0b1736] hover:bg-[#152a5e] active:scale-98 text-white text-sm font-semibold rounded-md shadow-sm transition-all whitespace-nowrap cursor-pointer border border-[#1b2f66]"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>
            </div>
          </form>
        </div>

        {/* Adjacency Proof Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-800/80 mt-10">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white tabular-nums">
              850+
            </div>
            <div className="text-xs text-stone-400 mt-1">
              Happy Families & Barkadas Hosted
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white tabular-nums">
              10 Mins
            </div>
            <div className="text-xs text-stone-400 mt-1">
              To Burnham Park & Session Road
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white tabular-nums">
              24 / 7
            </div>
            <div className="text-xs text-stone-400 mt-1">
              High-Flow Pressurized Hot Showers
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white tabular-nums">
              ₱0
            </div>
            <div className="text-xs text-stone-400 mt-1">
              Cooking Corkage or Gas Fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
