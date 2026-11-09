import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { AttractionsSection } from './components/AttractionsSection';
import { BookingInquiryForm } from './components/BookingInquiryForm';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { RoomUnit } from './data/transientData';
import { MessageCircle, Phone } from 'lucide-react';
import { HOST_CONTACT } from './data/transientData';

export default function App() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('barkada-loft');
  const [activeModalRoom, setActiveModalRoom] = useState<RoomUnit | null>(null);
  const [inquiryDates, setInquiryDates] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroAvailabilityCheck = (details: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  }) => {
    setSelectedRoomId(details.roomType);
    setInquiryDates({
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      guests: details.guests
    });
    scrollToInquiry();
  };

  const handleSelectRoomFromList = (roomId: string) => {
    setSelectedRoomId(roomId);
    scrollToInquiry();
  };

  const handleSelectRoomFromModal = (roomId: string) => {
    setSelectedRoomId(roomId);
    setActiveModalRoom(null);
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar onBookClick={scrollToInquiry} />

      {/* Main Content */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onCheckAvailability={handleHeroAvailabilityCheck} />

        {/* Available Rooms & Rates */}
        <RoomsSection
          onSelectRoom={handleSelectRoomFromList}
          onOpenRoomModal={(room) => setActiveModalRoom(room)}
        />

        {/* Key Amenities */}
        <AmenitiesSection />

        {/* Baguio Tourist Spots Nearby */}
        <AttractionsSection />

        {/* Direct Booking Inquiry Form & Rate Estimator */}
        <BookingInquiryForm
          initialRoomId={selectedRoomId}
          initialCheckIn={inquiryDates.checkIn}
          initialCheckOut={inquiryDates.checkOut}
          initialGuests={inquiryDates.guests}
        />

        {/* Guest Reviews & FAQ */}
        <ReviewsAndFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Room Detail Inspection Modal */}
      <RoomModal
        room={activeModalRoom}
        onClose={() => setActiveModalRoom(null)}
        onSelectForBooking={handleSelectRoomFromModal}
      />

      {/* Floating Fast-Messenger Shortcut (Adheres to 15% mobile cap) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={HOST_CONTACT.facebookUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on Facebook Messenger"
          className="flex items-center gap-2.5 pl-2 pr-4 py-2 bg-[#0b1736] hover:bg-[#152a5e] active:scale-95 text-white text-xs font-semibold rounded-full shadow-xl transition-all border border-amber-200/40"
        >
          <img
            src={HOST_CONTACT.logoUrl}
            alt="Lyn's Transient Homes"
            className="w-7 h-7 rounded-full object-cover border border-amber-200/60"
          />
          <span className="inline">Chat with Host</span>
        </a>
      </div>
    </div>
  );
}
