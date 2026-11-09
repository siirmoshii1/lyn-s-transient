export interface RoomUnit {
  id: string;
  name: string;
  category: 'couple' | 'family' | 'barkada' | 'whole-house';
  capacity: string;
  minPax: number;
  maxPax: number;
  pricePerNight: number;
  pricePerNightFormatted: string;
  beds: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  amenities: string[];
  kitchenDetails: string;
  bathroomDetails: string;
  idealFor: string;
}

export interface Attraction {
  id: string;
  name: string;
  category: 'landmarks' | 'nature' | 'food' | 'shopping';
  driveTime: string;
  distance: string;
  highlight: string;
  proTip: string;
  mustTry: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  groupType: string;
  unitStayed: string;
  rating: number;
  text: string;
}

export const ROOMS_DATA: RoomUnit[] = [
  {
    id: 'pine-studio',
    name: 'Pine Ridge Couple Studio',
    category: 'couple',
    capacity: '2 to 3 Guests',
    minPax: 2,
    maxPax: 3,
    pricePerNight: 1600,
    pricePerNightFormatted: '₱1,600',
    beds: '1 Queen Bed + 1 Single Pull-out Bed',
    image: '/src/assets/images/room_cozy_bedroom_pines_1794202273480.jpg',
    tagline: 'Intimate mountain sanctuary with private pine-view balcony',
    description: 'Designed for couples and solo travelers looking for a restful mountain retreat. Wake up to cool Baguio fog drifting past your private balcony glass door, wrapped in thick thermal blankets.',
    features: [
      'Private balcony with mountain & pine views',
      'Plush queen bed with warm fleece duvets',
      'Dedicated hot & cold shower bathroom',
      'Smart TV with Netflix & high-speed Wi-Fi',
      'Mini-kitchenette with electric kettle & mini-fridge'
    ],
    amenities: [
      'Hot & Cold Rain Shower',
      'High-Speed Fiber Wi-Fi',
      'Electric Kettle & Mugs',
      'Mini Refrigerator',
      'Dining Nook for 2',
      'Wardrobe & Clothes Hangers',
      'Complimentary Benguet Coffee'
    ],
    kitchenDetails: 'Equipped with electric kettle, mini refrigerator, mugs, and basic cutlery. Perfect for quick breakfasts and late night hot drinks.',
    bathroomDetails: 'Private en-suite bathroom with 24/7 strong pressurized instant water heater, bidet spray, and fresh towels.',
    idealFor: 'Couples, newlyweds, solo telecommuting travelers, and small weekend getaways'
  },
  {
    id: 'barkada-loft',
    name: 'Barkada Pines Loft & Suite',
    category: 'barkada',
    capacity: '4 to 7 Guests',
    minPax: 4,
    maxPax: 7,
    pricePerNight: 2800,
    pricePerNightFormatted: '₱2,800',
    beds: '2 Double Beds + 2 Twin Bunk Beds',
    image: '/src/assets/images/room_barkada_loft_beds_1794202273155.jpg',
    tagline: 'Spacious pine-paneled retreat for friends and road-trippers',
    description: 'Our most popular unit for barkadas and friends! Featuring sturdy natural Benguet pine wood bunk beds and double beds, ample luggage space, and a dining corner where you can share stories over hot ramen and Baguio strawberries.',
    features: [
      'Sturdy pine wood double & bunk bed setup',
      'Private hot & cold pressurized shower',
      'Complete cooking area with gas stove & cookware',
      'Free purified hot & cold drinking water dispenser',
      'Scenic windows with cool cross-ventilation'
    ],
    amenities: [
      '24/7 Hot Shower (Heavy-duty)',
      'Free High-Speed Wi-Fi',
      'Gas Stove & Complete Cookware',
      'Rice Cooker & Refrigerator',
      'Hot & Cold Mineral Water',
      'Dining Table for 6',
      'Smart TV for YouTube & Netflix'
    ],
    kitchenDetails: 'Full kitchenette with LPG gas stove, rice cooker, frying pans, soup pots, dinnerware, knives, and dishwashing soap. Cook your market haul freely!',
    bathroomDetails: 'Clean, tiled bathroom with high-capacity water heater, shower curtain, and hygienic bidet.',
    idealFor: 'College friends, road trip barkadas, and visiting colleagues'
  },
  {
    id: 'mountain-apartment',
    name: 'Mountain Crest 2-Bedroom Suite',
    category: 'family',
    capacity: '6 to 10 Guests',
    minPax: 6,
    maxPax: 10,
    pricePerNight: 4200,
    pricePerNightFormatted: '₱4,200',
    beds: '2 Queen Beds + 2 Double Sofa Beds + Extra Floor Mattresses',
    image: '/src/assets/images/room_spacious_living_kitchen_1794202271281.jpg',
    tagline: 'Homey 2-bedroom vacation flat with full living and dining hall',
    description: 'The premier choice for families with kids and elderly relatives. A complete home-away-from-home featuring two private bedrooms, a sunlit living room with wide pine windows, and a full-size kitchen where you can prepare family banquets.',
    features: [
      '2 Private bedrooms with hotel-grade mattresses',
      'Generous open living room with cozy sectional sofa',
      'Full kitchen with 2-door refrigerator & cooking range',
      'Spacious 8-seater dining table',
      'Dedicated parking slot right next to the entrance'
    ],
    amenities: [
      '24/7 Hot & Cold Shower',
      '55" 4K Smart TV with Netflix',
      'High-Speed 100Mbps Wi-Fi',
      'Full Kitchen with Complete Utensils',
      'Microwave Oven & Toaster',
      'Free Mineral Drinking Water',
      'Gated Garage Parking'
    ],
    kitchenDetails: 'Spacious family kitchen with full gas range, 2-door refrigerator, microwave, rice cooker, electric kettle, chopping boards, cooking utensils, and complete tableware.',
    bathroomDetails: 'Modern bathroom with continuous instant water heater, hot basin tap, bidet, and anti-slip mats.',
    idealFor: 'Families with kids and grandparents, multi-generational vacations'
  },
  {
    id: 'grand-villa',
    name: 'Grand Pine Villa (Whole House)',
    category: 'whole-house',
    capacity: '12 to 18 Guests',
    minPax: 12,
    maxPax: 18,
    pricePerNight: 6800,
    pricePerNightFormatted: '₱6,800',
    beds: '3 Large Bedrooms, Multiple Queen & Bunk Beds + Daybeds',
    image: '/src/assets/images/hero_baguio_transient_villa_1794202270809.jpg',
    tagline: 'Exclusive private multi-story lodge for grand family reunions',
    description: 'Book the entire private property for unforgettable reunions, corporate retreats, or big family celebrations. Enjoy total privacy, wrap-around pine verandas, outdoor dining & barbecue grill, and parking for up to 3 vans.',
    features: [
      'Full exclusive use of the multi-level house',
      '3 Spacious bedrooms with plush bedding & warm blankets',
      '2 Dedicated hot & cold shower bathrooms',
      'Outdoor mountain-view veranda with BBQ grill area',
      'Gated secure parking fits 2-3 vans or SUVs'
    ],
    amenities: [
      '2 Bathrooms with Heavy-Duty Hot Water',
      'High-Speed Fiber Wi-Fi throughout house',
      'Huge Living Hall with 65" Smart TV',
      'Commercial-Grade Cooking Facilities',
      'Outdoor BBQ Charcoal Grill',
      '24/7 Overhead Water Tank Storage',
      'Free Gated Multi-Vehicle Parking'
    ],
    kitchenDetails: 'Fully appointed large family kitchen with heavy-duty cooking burners, large refrigerator, multiple rice cookers, water dispenser, and party-sized cookware.',
    bathroomDetails: '2 separate full bathrooms with high-flow instant water heaters so big groups never have to wait long in the chilly morning.',
    idealFor: 'Big family reunions, company team building, wedding entourages, church retreats'
  }
];

export const AMENITIES_DATA = [
  {
    title: '24/7 Hot & Cold Water',
    description: 'Heavy-duty water heaters in every bathroom so chilly 14°C Baguio mornings feel refreshing and comfortable.',
    icon: 'Flame'
  },
  {
    title: 'Complete Kitchen & Cooking',
    description: 'Gas stove, refrigerator, rice cooker, pots, pans, and tableware provided. Cook fresh Baguio veggies and save on food expenses.',
    icon: 'Utensils'
  },
  {
    title: 'High-Speed Fiber Wi-Fi',
    description: 'Dependable fast internet across all rooms. Seamless remote work, video calls, Netflix bingeing, and social media posting.',
    icon: 'Wifi'
  },
  {
    title: 'Free Gated Parking',
    description: 'Secure on-premise parking for vans, SUVs, and sedans. No stressful hunting for narrow street parking along Baguio hills.',
    icon: 'Car'
  },
  {
    title: 'Free Purified Drinking Water',
    description: 'Complimentary hot and cold mineral water dispenser. Enjoy fresh hot coffee, tea, and noodles anytime without buying water jugs.',
    icon: 'Droplets'
  },
  {
    title: 'Scenic Mountain Balconies',
    description: 'Relax with views of misty Baguio pine trees, vibrant mountain terrain, and peaceful cool mountain breezes right outside your door.',
    icon: 'Trees'
  },
  {
    title: 'Warm Thermal Beddings',
    description: 'Clean, sanitized hotel-quality mattresses paired with thick fleece blankets to keep everyone cozy throughout chilly nights.',
    icon: 'BedDouble'
  },
  {
    title: 'Warm Hospitality from Ate Lyn',
    description: 'Friendly on-site family host ready with honest travel tips, shortcut routes, taxi booking assistance, and pasalubong advice.',
    icon: 'HeartHandshake'
  }
];

export const ATTRACTIONS_DATA: Attraction[] = [
  {
    id: 'burnham-park',
    name: 'Burnham Park & Swan Lake',
    category: 'landmarks',
    driveTime: '8 - 10 mins',
    distance: '3.2 km',
    highlight: 'Iconic swan paddle boats, tandem bicycle rentals, rose garden strolls, and open green picnic lawns.',
    proTip: 'Rent a bicycle or four-wheeler early morning around 7:00 AM before crowds arrive for peaceful riding.',
    mustTry: 'Strawberry taho by the lake and picnic on the open grass'
  },
  {
    id: 'session-road',
    name: 'Session Road & Baguio Night Market',
    category: 'food',
    driveTime: '9 - 11 mins',
    distance: '3.5 km',
    highlight: 'The bustling cultural heartbeat of Baguio with heritage bakeries, homegrown coffee shops, and the famous Harrison Road night market.',
    proTip: 'The Night Market opens at 9:00 PM along Harrison Road. Bring cash and keep backpacks in front while browsing ukay-ukay clothes.',
    mustTry: 'Vizco’s Strawberry Shortcake and night market grilled street food'
  },
  {
    id: 'camp-john-hay',
    name: 'Camp John Hay & Bell House',
    category: 'nature',
    driveTime: '12 - 15 mins',
    distance: '4.8 km',
    highlight: 'Lush historical pine reserve featuring scenic hiking along the Yellow Trail, Bell Amphitheater, and duty-free outlet shopping.',
    proTip: 'Head to the Technohub or Mile Hi Center for lunch surrounded by towering pine trees and cool mountain breeze.',
    mustTry: 'Hot chocolate de batirol and walking barefoot in the pine needles'
  },
  {
    id: 'the-mansion-wright',
    name: 'The Mansion & Wright Park',
    category: 'landmarks',
    driveTime: '12 - 14 mins',
    distance: '4.6 km',
    highlight: 'The official summer residence of the President of the Philippines, fronted by the scenic pine reflecting pool and horse-riding grounds.',
    proTip: 'Great photo spot by the grandiose mansion gates. Head down the stone steps for guided horseback riding for kids and adults.',
    mustTry: 'Posing in front of the ornate Mansion gates and renting Igorot traditional attire for souvenir photos'
  },
  {
    id: 'mines-view',
    name: 'Mines View Park & Good Shepherd',
    category: 'shopping',
    driveTime: '15 - 18 mins',
    distance: '5.4 km',
    highlight: 'Breathtaking panoramic overlook of the Benguet gold and copper mountain mines, plus Cordillera handicraft stalls.',
    proTip: 'Good Shepherd Convent is just 3 minutes walk from Mines View Park. Buy your authentic Mountain Maid ube jam early as it sells out quickly!',
    mustTry: 'Good Shepherd Ube Jam, grilled corn with butter, and strawberry wine'
  },
  {
    id: 'mirador-park',
    name: 'Mirador Heritage & Eco Park',
    category: 'nature',
    driveTime: '9 - 12 mins',
    distance: '3.8 km',
    highlight: 'Sprawling eco-sanctuary with Japanese-inspired Torii Gate, peaceful bamboo grove, stone labyrinth, and sweeping mountain sunset vistas.',
    proTip: 'Visit around 4:00 PM to catch golden hour and unobstructed panoramic views of Baguio and the West Philippine Sea horizon.',
    mustTry: 'Taking photos at the Red Torii Gate and ringing the historic Mirador Peace Bell'
  },
  {
    id: 'strawberry-farm',
    name: 'La Trinidad Strawberry Farm',
    category: 'shopping',
    driveTime: '20 - 25 mins',
    distance: '7.5 km',
    highlight: 'Expansive strawberry and fresh vegetable fields where visitors can personally harvest sweet red strawberries straight from the plots.',
    proTip: 'Wear comfortable rubber shoes or boots as soil can be muddy after morning dew. Pick darker red berries for the sweetest flavor.',
    mustTry: 'Strawberry picking experience, fresh strawberry ice cream, and strawberry wine'
  },
  {
    id: 'botanical-garden',
    name: 'Baguio Botanical Garden',
    category: 'nature',
    driveTime: '12 - 14 mins',
    distance: '4.4 km',
    highlight: 'Vast garden sanctuary with Japanese World War II tunnels, traditional Cordillera huts, blooming azaleas, and sculptures.',
    proTip: 'Walk inside the cool underground Japanese tunnel for a quick fascinating glimpse into wartime Baguio history.',
    mustTry: 'Walking along the pine-shaded stone trails and photographing native highland flora'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Maria Cristina Santos',
    location: 'Quezon City, Metro Manila',
    date: 'February 2026',
    groupType: 'Family with Grandparents & 3 Kids',
    unitStayed: 'Mountain Crest 2-Bedroom Suite',
    rating: 5,
    text: 'Sobrang ganda and linis ng transient ni Ate Lyn! The hot shower was our savior during the chilly 13-degree weather. Complete ang gamit sa kusina kaya nakapagluto kami ng sinigang after buying fresh gulay sa Baguio market. Maluwag din ang parking for our Grandia van. We will definitely book again next Christmas!'
  },
  {
    id: 'rev-2',
    name: 'Engr. Jerome Alcantara',
    location: 'San Fernando, Pampanga',
    date: 'January 2026',
    groupType: 'Barkada Group of 7',
    unitStayed: 'Barkada Pines Loft & Suite',
    rating: 5,
    text: 'Best transient experience in Baguio! Tahimik ang area, malamig ang simoy ng hangin at amoy pine trees pag gising. Ate Lyn was very accommodating—tinulungan pa kami mag-navigate para maiwasan ang traffic papuntang Mines View. Fast Wi-Fi and comfortable matibay na bunk beds!'
  },
  {
    id: 'rev-3',
    name: 'Dr. Raymond & Bea Velasco',
    location: 'Makati City',
    date: 'March 2026',
    groupType: 'Couple Anniversary Trip',
    unitStayed: 'Pine Ridge Couple Studio',
    rating: 5,
    text: 'A romantic, cozy little gem. We loved having our morning coffee at the balcony overlooking the misty pine trees. Very clean beddings, super responsive host, and only 10 minutes to Session Road and Good Shepherd. Highly recommended for couples looking for peaceful relaxation.'
  },
  {
    id: 'rev-4',
    name: 'Grace Tan & Relatives',
    location: 'Cebu City & Singapore',
    date: 'December 2025',
    groupType: 'Grand Reunion of 15 Pax',
    unitStayed: 'Grand Pine Villa (Whole House)',
    rating: 5,
    text: 'We rented the whole house for our family vacation. It had everything we needed—2 bathrooms with strong hot showers, giant TV for movies, and a gated garage for our 2 rented vans. Ate Lyn treated us like family. Salamat po Ate Lyn for making our Baguio holiday unforgettable!'
  }
];

export const FAQS_DATA = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is 2:00 PM and check-out is 11:30 AM. If you are arriving early via night bus (e.g., Victory Liner or JoyBus arriving at 5:00 AM - 7:00 AM), please notify us in advance. We provide complimentary safe luggage drop-off while your room is prepared, or early check-in if the unit was vacant the prior night.'
  },
  {
    question: 'Is cooking allowed and are kitchen utensils provided?',
    answer: 'Yes, absolutely! Cooking is 100% allowed in all suites and apartments (excluding our couple studio which has an electric kettle and mini-fridge). We provide LPG gas stoves, pots, frying pans, rice cookers, knives, chopping boards, dinnerware, and dishwashing soap at zero extra charge. We only ask guests to clean as they go.'
  },
  {
    question: 'Is there a guaranteed hot shower and 24/7 water supply?',
    answer: 'Yes! Baguio mornings can drop to 12°C - 15°C, so every unit is equipped with dedicated, heavy-duty pressurized instant water heaters. We also maintain large dedicated overhead water storage tanks to ensure steady, uninterrupted water supply even during peak holiday seasons.'
  },
  {
    question: 'Is parking available and what vehicle types can fit?',
    answer: 'We have free, safe, gated on-premise parking. Our driveway and garage can comfortably accommodate Toyota HiAce Grandia vans, Urvan, SUVs (Fortuner, Montero), and sedans. Please let us know your vehicle model upon inquiry so we can reserve your designated bay.'
  },
  {
    question: 'How do we get around Baguio from Lyn’s Transient?',
    answer: 'Our location is easily accessible by both private car and public transport. Taxis pass by nearby, or you can flag down a local jeepney straight to Burnham Park / Harrison Road. We are also pinned on Waze and Google Maps for easy driving navigation.'
  },
  {
    question: 'What is the booking deposit policy?',
    answer: 'To secure your dates, a standard 50% reservation deposit via GCash, Maya, or BDO/BPI bank transfer is required. The remaining 50% balance is payable upon check-in in cash or online transfer.'
  }
];

export const HOST_CONTACT = {
  name: "Lyn's Transient Homes",
  brandMotto: "You've come to the rest. Now, come to the best.",
  logoUrl: "/assets/aistudio/image_7e89bc87.png",
  hostName: "Ate Lyn & Family",
  phonePrimary: "+63 917 582 9140",
  phoneSecondary: "+63 928 411 7329",
  phoneDisplay: "0917 582 9140 / 0928 411 7329",
  facebookUrl: "https://www.facebook.com/baguiotransientLYNs/",
  locationAddress: "Baguio City, Benguet, Philippines (10 Mins from Burnham Park / Session Road)",
  googleMapsPin: "Baguio City, Philippines",
  checkInTime: "2:00 PM",
  checkOutTime: "11:30 AM"
};
