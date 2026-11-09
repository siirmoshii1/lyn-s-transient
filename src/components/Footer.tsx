import React from 'react';
import { Compass, Phone, MapPin, MessageCircle, ExternalLink, Heart } from 'lucide-react';
import { HOST_CONTACT } from '../data/transientData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070e22] text-stone-300 border-t border-[#14234c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-200/50 bg-[#0b1736] shrink-0 shadow-sm">
                <img
                  src={HOST_CONTACT.logoUrl}
                  alt="Lyn's Transient Homes Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-white tracking-tight">
                  Lyn's Transient Homes
                </div>
                <div className="text-xs text-amber-200 font-serif italic">
                  "{HOST_CONTACT.brandMotto}"
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              Your home away from home in Baguio City. Featuring spacious vacation units with complete kitchens, strong hot showers, high-speed Wi-Fi, and scenic pine surroundings.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Baguio City, Benguet, Philippines (Near Burnham Park & Session Road)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Pine Ridge Couple Studio (2-3 Pax)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Barkada Pines Loft & Suite (4-7 Pax)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Mountain Crest 2-Bedroom Suite (6-10 Pax)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Grand Pine Villa Whole House (12-18 Pax)
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Facebook */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact & Socials
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={HOST_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Facebook: @baguiotransientLYNs</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={`tel:${HOST_CONTACT.phonePrimary}`}
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>{HOST_CONTACT.phonePrimary}</span>
              </a>

              <a
                href={`tel:${HOST_CONTACT.phoneSecondary}`}
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>{HOST_CONTACT.phoneSecondary}</span>
              </a>

              <div className="text-stone-400 text-xs pt-1">
                Open for booking inquiries: 7:00 AM – 10:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#14234c] text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lyn's Baguio Transient Homes. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#rooms" className="hover:text-stone-300 transition-colors">Rates</a>
            <span>·</span>
            <a href="#amenities" className="hover:text-stone-300 transition-colors">Amenities</a>
            <span>·</span>
            <a href="#attractions" className="hover:text-stone-300 transition-colors">Baguio Spots</a>
            <span>·</span>
            <a href="#faq" className="hover:text-stone-300 transition-colors">Policies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
