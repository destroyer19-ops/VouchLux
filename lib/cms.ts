// lib/cms.ts

// This file would contain your actual CMS API client (e.g., using Axios, GraphQL client, etc.)
// For demonstration, we'll use mock data.

export interface Property {
  id: string;
  slug: string;
  name: string;
  description: string;
  location: string;
  images: string[]; // URLs to images
  videoUrl?: string;
  floorPlans?: string[]; // URLs to floor plan images
  roi?: number; // Return on Investment
  deliveryDate?: string;
  status: 'For Sale' | 'Under Construction' | 'Sold Out';
  amenities?: string[];
  price?: number;
}

const mockProperties: Property[] = [
  {
    id: 'prop1',
    slug: 'ascenda-luxury-terraces',
    name: 'Ascenda Luxury Terraces',
    description: 'Exclusive 3-bedroom smart terraces with modern amenities. Located in a serene environment.',
    location: 'Ajah, Lagos',
    images: [
      '/media/project-1-exterior.jpg',
      '/media/project-1-interior-1.jpg',
      '/media/project-1-interior-2.jpg',
    ],
    videoUrl: '/media/project-walkthrough-1.mp4',
    roi: 0.36,
    deliveryDate: '2026-12-31',
    status: 'For Sale',
    amenities: ['Smart Home System', '24/7 Security', 'Swimming Pool', 'Gym'],
    price: 150000000, // Example price in Naira
  },
  {
    id: 'prop2',
    slug: 'grand-pinnacle-estates',
    name: 'Grand Pinnacle Estates',
    description: 'Modern apartments designed for luxury living. Currently under construction.',
    location: 'Ikoyi, Lagos',
    images: [
      '/media/project-2-exterior.jpg',
      '/media/project-2-render.jpg',
    ],
    status: 'Under Construction',
    deliveryDate: '2027-06-30',
    amenities: ['Panoramic Views', 'Concierge Service', 'Private Parking'],
    price: 300000000,
  },
  {
    id: 'prop3',
    slug: 'golden-villa-gardens',
    name: 'Golden Villa Gardens',
    description: 'Premium detached villas with expansive gardens. Sold out.',
    location: 'Lekki, Lagos',
    images: [
      '/media/project-3-exterior.jpg',
      '/media/project-3-garden.jpg',
    ],
    status: 'Sold Out',
    deliveryDate: '2024-03-15',
    amenities: ['Private Garden', 'Backup Power', 'Kids Play Area'],
    price: 200000000,
  },
];

export async function getAllPropertySlugs(): Promise<string[]> {
  // In a real CMS, this would fetch all property slugs from the API
  return mockProperties.map(p => p.slug);
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  // In a real CMS, this would fetch a single property by slug from the API
  return mockProperties.find(p => p.slug === slug);
}

export async function getAllProperties(): Promise<Property[]> {
  // In a real CMS, this would fetch all properties from the API
  return mockProperties;
}
