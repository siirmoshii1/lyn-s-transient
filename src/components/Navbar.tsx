import React, { useState } from 'react';
import { Menu, X, Phone, Compass } from 'lucide-react';
import { HOST_CONTACT } from '../data/transientData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark with Logo */}
          <a
            href="#"
            className="flex items-center gap-3 text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#0b1736] whitespace-nowrap shrink-0 hover:text-[#162a5c] transition-colors group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#0b1736] shadow-xs shrink-0 bg-[#0b1736] flex items-center justify-center">
              <img
                src={HOST_CONTACT.logoUrl}
                alt="Lyn's Transient Homes Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight">Lyn's Transient Homes</span>
              <span className="text-2xs font-sans font-medium tracking-wider text-stone-500 uppercase">
                Baguio City
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#rooms"
              className="hover:text-[#0b1736] transition-colors whitespace-nowrap shrink-0"
            >
              Rooms & Rates
            </a>
            <a
              href="#amenities"
              className="hover:text-[#0b1736] transition-colors whitespace-nowrap shrink-0"
            >
              Amenities
            </a>
            <a
              href="#attractions"
              className="hover:text-[#0b1736] transition-colors whitespace-nowrap shrink-0"
            >
              Nearby Spots
            </a>
            <a
              href="#reviews"
              className="hover:text-[#0b1736] transition-colors whitespace-nowrap shrink-0"
            >
              Guest Reviews
            </a>
            <a
              href="#faq"
              className="hover:text-[#0b1736] transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOST_CONTACT.phonePrimary}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:text-[#0b1736] transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#0b1736]" />
              <span>0917 582 9140</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#0b1736] hover:bg-[#152a5e] active:scale-95 transition-all rounded-md shadow-xs whitespace-nowrap shrink-0 border border-[#1b2f66]"
            >
              Book Direct / Inquire
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0b1736] rounded-md"
            >
              Inquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#0b1736] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#rooms"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
          >
            Rooms & Rates
          </a>
          <a
            href="#amenities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
          >
            Amenities
          </a>
          <a
            href="#attractions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
          >
            Nearby Baguio Spots
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
          >
            Guest Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
          >
            Frequently Asked Questions
          </a>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:${HOST_CONTACT.phonePrimary}`}
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-md"
            >
              <Phone className="w-4 h-4 text-[#0b1736]" />
              <span>Call Host: 0917 582 9140</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-[#0b1736] rounded-md shadow-xs text-center"
            >
              Book Direct / Inquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
