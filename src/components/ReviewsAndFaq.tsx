import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote, MessageSquareQuote } from 'lucide-react';
import { REVIEWS_DATA, FAQS_DATA } from '../data/transientData';

export const ReviewsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guest Reviews Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-[#0b1736] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-[#0b1736]" />
              <span>Guest Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              Loved by Barkadas, Couples & Families Across the Philippines
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Read how travelers from Manila, Pampanga, Cebu, and overseas enjoyed peaceful mornings, hot showers, and home-cooked meals during their Baguio holiday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {/* Unboxed date metadata */}
                    <span className="text-xs text-stone-400">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-stone-900 not-italic">
                      {rev.name}
                    </h4>
                    <span className="text-stone-500">{rev.location}</span>
                  </div>
                  <div className="text-right text-stone-500">
                    <span className="block font-medium text-[#0b1736]">{rev.unitStayed}</span>
                    <span className="text-2xs text-stone-400">{rev.groupType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div id="faq" className="pt-8 border-t border-stone-200">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-[#0b1736] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-[#0b1736]" />
              <span>Helpful Travel Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Everything you need to know about booking policies, amenities, cooking, and arrival in Baguio City.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 border border-stone-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-stone-900 hover:text-[#0b1736] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded bg-white text-stone-500 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
