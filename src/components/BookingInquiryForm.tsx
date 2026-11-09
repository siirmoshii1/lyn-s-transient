import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  Home,
  Phone,
  Mail,
  User,
  MessageCircle,
  Copy,
  Check,
  Send,
  HelpCircle,
  Clock,
  Sparkles,
  Car
} from 'lucide-react';
import { ROOMS_DATA, HOST_CONTACT, RoomUnit } from '../data/transientData';

interface BookingInquiryFormProps {
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingInquiryForm: React.FC<BookingInquiryFormProps> = ({
  initialRoomId = 'barkada-loft',
  initialCheckIn,
  initialCheckOut,
  initialGuests = 4
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 3);
  const defaultIn = initialCheckIn || tomorrow.toISOString().split('T')[0];

  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 5);
  const defaultOut = initialCheckOut || dayAfter.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultIn);
  const [checkOut, setCheckOut] = useState(defaultOut);
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId);
  const [adults, setAdults] = useState(initialGuests || 4);
  const [kids, setKids] = useState(0);
  const [hasVehicle, setHasVehicle] = useState(true);
  const [vehicleType, setVehicleType] = useState('1 Van / SUV');

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [facebookProfile, setFacebookProfile] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // States
  const [submittedVoucher, setSubmittedVoucher] = useState<{
    referenceId: string;
    dateSubmitted: string;
    room: RoomUnit;
    nights: number;
    totalEstimate: number;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  // Sync if initial props change
  useEffect(() => {
    if (initialRoomId) setSelectedRoomId(initialRoomId);
  }, [initialRoomId]);

  useEffect(() => {
    if (initialCheckIn) setCheckIn(initialCheckIn);
  }, [initialCheckIn]);

  useEffect(() => {
    if (initialCheckOut) setCheckOut(initialCheckOut);
  }, [initialCheckOut]);

  useEffect(() => {
    if (initialGuests) setAdults(initialGuests);
  }, [initialGuests]);

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const days = Math.round(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const nights = calculateNights();
  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];
  const totalEstimate = selectedRoom.pricePerNight * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `LYN-BGO-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedVoucher({
      referenceId: refCode,
      dateSubmitted: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      room: selectedRoom,
      nights,
      totalEstimate
    });
  };

  const generateSummaryText = () => {
    return `*INQUIRY FOR LYN'S BAGUIO TRANSIENT HOMES*
Guest: ${guestName || 'Valued Guest'}
Contact: ${guestPhone || 'N/A'}
Unit: ${selectedRoom.name}
Check-in: ${checkIn}
Check-out: ${checkOut} (${nights} night/s)
Pax: ${adults} adult/s, ${kids} kid/s
Vehicle: ${hasVehicle ? vehicleType : 'Commuting / None'}
Special Requests: ${specialRequests || 'None'}
Estimated Total: ₱${totalEstimate.toLocaleString()}`;
  };

  const handleCopySummary = () => {
    const text = generateSummaryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(generateSummaryText());
    window.open(`https://wa.me/639175829140?text=${text}`, '_blank');
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#0b1736] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#0b1736]" />
            <span>Direct Host Reservations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Direct Booking Inquiry & Rate Calculator
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Book directly with host Ate Lyn to enjoy our lowest rates with zero online travel agency surcharges. Send your inquiry below or connect instantly through Facebook Messenger and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Inquiry Form */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
            {submittedVoucher ? (
              <div className="space-y-6">
                <div className="p-6 bg-[#0b1736] text-white rounded-xl border border-[#1b2b52] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wider mb-1">
                      <Check className="w-4 h-4" />
                      <span>Official Reservation Inquiry</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      Reference #{submittedVoucher.referenceId}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 italic font-serif">
                      "{HOST_CONTACT.brandMotto}"
                    </p>
                    <p className="text-2xs text-stone-400 mt-0.5">
                      Submitted on {submittedVoucher.dateSubmitted} for {guestName || 'Guest'}.
                    </p>
                  </div>

                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-200/60 shrink-0 bg-[#0b1736] shadow-md">
                    <img
                      src={HOST_CONTACT.logoUrl}
                      alt="Lyn's Transient Homes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-sm">
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-500">Reserved Unit:</span>
                    <span className="font-semibold text-stone-900">{submittedVoucher.room.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-500">Dates of Stay:</span>
                    <span className="font-semibold text-stone-900">
                      {checkIn} to {checkOut} ({submittedVoucher.nights} night/s)
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-500">Guests & Vehicle:</span>
                    <span className="font-semibold text-stone-900">
                      {adults} Adults, {kids} Kids · {hasVehicle ? vehicleType : 'Commute'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-500">Estimated Total:</span>
                    <span className="font-serif font-bold text-lg text-[#0b1736]">
                      ₱{submittedVoucher.totalEstimate.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <span className="font-semibold block mb-1">Next Step to Confirm Your Stay:</span>
                  Please send this reference to Ate Lyn via Facebook Messenger or WhatsApp so we can verify live calendar availability and send GCash / Bank details for your 50% reservation deposit.
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={HOST_CONTACT.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via Facebook Messenger</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 bg-[#0b1736] hover:bg-[#162a5c] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer border border-[#1b2b52]"
                  >
                    <Send className="w-4 h-4 text-amber-200" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="py-3 px-4 border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#0b1736]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setSubmittedVoucher(null)}
                    className="text-xs text-stone-500 underline hover:text-stone-800 cursor-pointer"
                  >
                    Submit another inquiry or edit dates
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Stay Configuration */}
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#0b1736]" />
                    <span>1. Stay Dates & Accommodation</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="inquiry-check-in" className="block text-xs font-medium text-stone-700 mb-1">
                        Check-in Date
                      </label>
                      <input
                        id="inquiry-check-in"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry-check-out" className="block text-xs font-medium text-stone-700 mb-1">
                        Check-out Date
                      </label>
                      <input
                        id="inquiry-check-out"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="inquiry-room-select" className="block text-xs font-medium text-stone-700 mb-1">
                        Select Room / Unit
                      </label>
                      <select
                        id="inquiry-room-select"
                        value={selectedRoomId}
                        onChange={(e) => setSelectedRoomId(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                      >
                        {ROOMS_DATA.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.name} — {r.pricePerNightFormatted} / night ({r.capacity})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="inquiry-adults" className="block text-xs font-medium text-stone-700 mb-1">
                        Adults & Teens
                      </label>
                      <input
                        id="inquiry-adults"
                        type="number"
                        min={1}
                        max={25}
                        value={adults}
                        onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Parking & Transportation */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="inquiry-has-vehicle" className="text-xs font-semibold text-stone-800 flex items-center gap-1.5 cursor-pointer">
                      <Car className="w-4 h-4 text-[#0b1736]" />
                      <span>Are you bringing a private vehicle?</span>
                    </label>
                    <input
                      id="inquiry-has-vehicle"
                      type="checkbox"
                      checked={hasVehicle}
                      onChange={(e) => setHasVehicle(e.target.checked)}
                      className="w-4 h-4 text-[#0b1736] rounded border-stone-300 focus:ring-[#0b1736] cursor-pointer"
                    />
                  </div>
                  {hasVehicle && (
                    <div className="mt-2">
                      <label htmlFor="inquiry-vehicle-type" className="block text-xs text-stone-500 mb-1">
                        Vehicle Type (for garage allocation):
                      </label>
                      <select
                        id="inquiry-vehicle-type"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-md"
                      >
                        <option value="1 Van (Grandia / Urvan)">1 Van (Toyota HiAce Grandia, Nissan Urvan)</option>
                        <option value="2 Vans">2 Vans</option>
                        <option value="1 SUV (Fortuner / Montero / Innova)">1 SUV (Innova, Fortuner, Montero, Everest)</option>
                        <option value="1 Sedan / Compact Car">1 Sedan / Compact Car</option>
                        <option value="Multiple Private Vehicles">Multiple Private Cars (2-3 Vehicles)</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0b1736]" />
                    <span>2. Guest Contact Details</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="inquiry-guest-name" className="block text-xs font-medium text-stone-700 mb-1">
                        Lead Guest Full Name
                      </label>
                      <input
                        id="inquiry-guest-name"
                        type="text"
                        placeholder="e.g., Maria Santos"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-guest-phone" className="block text-xs font-medium text-stone-700 mb-1">
                        Mobile Phone / Viber / WhatsApp
                      </label>
                      <input
                        id="inquiry-guest-phone"
                        type="tel"
                        placeholder="e.g., 0917 123 4567"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="inquiry-guest-email" className="block text-xs font-medium text-stone-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="inquiry-guest-email"
                        type="email"
                        placeholder="e.g., maria@example.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-facebook-profile" className="block text-xs font-medium text-stone-700 mb-1">
                        Facebook / Messenger Name (Optional)
                      </label>
                      <input
                        id="inquiry-facebook-profile"
                        type="text"
                        placeholder="e.g., Maria Santos (Facebook)"
                        value={facebookProfile}
                        onChange={(e) => setFacebookProfile(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-special-requests" className="block text-xs font-medium text-stone-700 mb-1">
                      Special Requests or Notes (Optional)
                    </label>
                    <textarea
                      id="inquiry-special-requests"
                      rows={2}
                      placeholder="e.g. Early arrival around 6:00 AM via Victory Liner, senior citizen in group, extra fleece blankets..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#0b1736] focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#0b1736] hover:bg-[#162a5c] active:scale-98 text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#1b2b52]"
                  >
                    <span>Generate Inquiry & Check Availability</span>
                    <Send className="w-4 h-4 text-amber-200" />
                  </button>
                  <p className="text-center text-xs text-stone-500 mt-2">
                    No immediate credit card payment required. Host will confirm room vacancy and payment details.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Pricing & Fast Channels Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Rate Estimator Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
                Estimated Rate Summary
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Selected Unit:</span>
                  <span className="font-semibold text-stone-900">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Nightly Rate:</span>
                  <span className="tabular-nums font-semibold text-stone-900">
                    {selectedRoom.pricePerNightFormatted}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Duration:</span>
                  <span className="font-semibold text-stone-900">{nights} night(s)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Guests:</span>
                  <span className="font-semibold text-stone-900">{adults} Guests</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Cooking & Gas Fee:</span>
                  <span className="font-semibold text-[#0b1736]">FREE (₱0)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Drinking Water & Wi-Fi:</span>
                  <span className="font-semibold text-[#0b1736]">FREE (₱0)</span>
                </div>

                <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-stone-900">Estimated Total:</span>
                  <div className="text-right">
                    <span className="text-2xl font-serif font-bold text-[#0b1736] tabular-nums">
                      ₱{totalEstimate.toLocaleString()}
                    </span>
                    <span className="block text-2xs text-stone-500">Subject to date availability</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full py-2 px-3 border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#0b1736]" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                  <span>{copied ? 'Summary Copied!' : 'Copy Summary to Clipboard'}</span>
                </button>
              </div>
            </div>

            {/* Direct Connect Buttons with Logo Header */}
            <div className="bg-[#0b1736] text-white rounded-2xl p-6 shadow-md border border-[#1b2b52]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-200/50 bg-[#0b1736] shrink-0">
                  <img
                    src={HOST_CONTACT.logoUrl}
                    alt="Lyn's Transient Homes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-white leading-tight">
                    Prefer to Inquire Directly?
                  </h3>
                  <p className="text-2xs text-amber-200 font-serif italic">
                    "{HOST_CONTACT.brandMotto}"
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Chat directly with host Ate Lyn on our official Facebook Page for real-time video tours, availability confirmation, and instant replies.
              </p>

              <div className="space-y-2.5">
                <a
                  href={HOST_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Facebook: /baguiotransientLYNs</span>
                </a>

                <a
                  href={`tel:${HOST_CONTACT.phonePrimary}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#14234c] hover:bg-[#1c326c] text-stone-100 text-xs font-semibold rounded-lg transition-colors border border-[#233c7a]"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call: {HOST_CONTACT.phonePrimary}</span>
                </a>

                <a
                  href={`sms:${HOST_CONTACT.phoneSecondary}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#14234c] hover:bg-[#1c326c] text-stone-100 text-xs font-semibold rounded-lg transition-colors border border-[#233c7a]"
                >
                  <MessageCircle className="w-4 h-4 text-amber-300" />
                  <span>Text / SMS: {HOST_CONTACT.phoneSecondary}</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 text-2xs text-stone-400 text-center">
                Check-in: 2:00 PM · Check-out: 11:30 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
