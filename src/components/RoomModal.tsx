import React from 'react';
import { X, Users, Bed, Flame, Utensils, Wifi, Check, ArrowRight } from 'lucide-react';
import { RoomUnit } from '../data/transientData';

interface RoomModalProps {
  room: RoomUnit | null;
  onClose: () => void;
  onSelectForBooking: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({
  room,
  onClose,
  onSelectForBooking
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-700 bg-white/80 hover:bg-white rounded-full shadow-sm hover:text-stone-950 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-100">
          <img
            src={room.image}
            alt={room.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider text-amber-200 font-semibold">
              {room.capacity}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              {room.name}
            </h3>
            <p className="text-stone-200 text-sm mt-0.5">{room.tagline}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Rate & Key Quick Specs */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
            <div>
              <span className="text-xs text-stone-500 font-medium">Nightly Rate</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-serif font-bold text-[#0b1736] tabular-nums">
                  {room.pricePerNightFormatted}
                </span>
                <span className="text-xs text-stone-600">/ night</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#0b1736]" />
                <span>{room.capacity}</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#0b1736]" />
                <span>{room.beds}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              About This Accommodation
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Highlights & Features */}
          <div>
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Included Amenities & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-[#0b1736] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cooking & Bathroom details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#0b1736]/5 rounded-lg border border-[#0b1736]/15">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0b1736] mb-1.5">
                <Utensils className="w-4 h-4 text-[#0b1736]" />
                <span>Kitchen & Cooking</span>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                {room.kitchenDetails}
              </p>
            </div>

            <div className="p-4 bg-stone-100/70 rounded-lg border border-stone-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 mb-1.5">
                <Flame className="w-4 h-4 text-amber-700" />
                <span>Hot Water & Bathroom</span>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                {room.bathroomDetails}
              </p>
            </div>
          </div>

          {/* Ideal For */}
          <div className="text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Recommended for: </span>
            <span>{room.idealFor}</span>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            No advance credit card needed for inquiry. 50% downpayment via GCash/Bank after confirmation.
          </div>
          <button
            onClick={() => onSelectForBooking(room.id)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0b1736] hover:bg-[#152a5e] text-white text-sm font-semibold rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap border border-[#1b2f66]"
          >
            <span>Inquire This Room</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </button>
        </div>
      </div>
    </div>
  );
};
