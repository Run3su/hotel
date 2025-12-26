
import { Room, Experience, CulinaryFeature } from './types';

export const ROOMS: Room[] = [
  {
    id: 'double-sea',
    name: 'Double Room with Ocean View',
    description: 'Wake up to the sound of crashing waves and golden horizons in our premium double rooms.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    price: 'From 1,850 NOK',
    features: ['Ocean Front', 'King Bed', 'Rain Shower', 'Balcony'],
    type: 'room'
  },
  {
    id: 'family-apt',
    name: 'Spacious Family Apartment',
    description: 'Perfect for groups or families. Fully equipped kitchen and multiple bedrooms with pier access.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    price: 'From 3,200 NOK',
    features: ['Kitchen', '2 Bedrooms', 'Pier Access', '60m²'],
    type: 'apartment'
  },
  {
    id: 'superior-suite',
    name: 'Superior Panorama Suite',
    description: 'Our most luxurious offering, featuring 180-degree glass walls overlooking the Lindesnes coast.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    price: 'From 4,500 NOK',
    features: ['Panoramic View', 'Private Sauna', 'Lounge Area', 'Mini Bar'],
    type: 'room'
  }
];

export const CULINARY: CulinaryFeature[] = [
  {
    id: 'restaurant',
    title: 'À la Carte Restaurant',
    subtitle: 'Seasonal & Local',
    description: "Chef Bernt Sætre's team crafts masterpieces from the morning's catch and local harvests.",
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    link: '#dine'
  },
  {
    id: 'laboratory',
    title: 'The Laboratory',
    subtitle: 'Interactive Kitchen',
    description: 'An exclusive culinary theater for groups of 8–32. Watch as food transforms before your eyes.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    link: '#dine'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'lighthouse',
    title: 'Lindesnes Lighthouse',
    description: 'Complimentary access for all overnight guests. Visit the southernmost point of Norway.',
    image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&q=80&w=800',
    category: 'culture'
  },
  {
    id: 'kayaking',
    title: 'Coastal Kayaking',
    description: 'Navigate the archipelago with our high-end rental equipment or guided tours.',
    image: 'https://images.unsplash.com/photo-1544551763-47a0159f9234?auto=format&fit=crop&q=80&w=800',
    category: 'adventure'
  },
  {
    id: 'sauna',
    title: 'Pier Sauna & Cold Plunge',
    description: 'The ultimate Norwegian relaxation. Sweat it out then dive straight into the refreshing sea.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800',
    category: 'wellness'
  }
];
