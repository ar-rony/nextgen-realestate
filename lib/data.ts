export type ListingType = 'property' | 'land-share' | 'flat' | 'appliance';

export interface Listing {
  id: number;
  type: ListingType;
  title: string;
  price: number;
  description: string;
  image: string;
}

let listings: Listing[] = [
  {
    id: 1,
    type: 'property',
    title: 'Stunning 4‑Bed Detached House',
    price: 650000,
    description: 'Spacious family home with large garden, driveway and modern kitchen.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    type: 'property',
    title: 'Charming Victorian Terrace',
    price: 425000,
    description: 'Beautifully restored period home in a sought‑after Yorkshire town.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    type: 'property',
    title: 'Modern 3‑Bed Semi with Garage',
    price: 350000,
    description: 'Built in 2022, energy‑efficient home with open‑plan living.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    type: 'property',
    title: 'Elegant Georgian Townhouse',
    price: 780000,
    description: 'Grade II listed beauty with original fireplaces and a walled garden.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    type: 'property',
    title: 'Rural Cottage with Stunning Views',
    price: 550000,
    description: 'Peaceful countryside retreat with exposed beams and wood burner.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18f6b005e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    type: 'property',
    title: 'New‑Build Luxury Apartment',
    price: 295000,
    description: 'Top‑floor apartment with balcony and panoramic city views.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    type: 'land-share',
    title: 'Farmland Share – 2 Acres, Yorkshire',
    price: 18000,
    description: 'Own a share of productive arable land. Ideal for investment.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    type: 'land-share',
    title: 'Woodland Share – 1 Acre',
    price: 12000,
    description: 'Co‑own a mature broadleaf woodland with year‑round access.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    type: 'land-share',
    title: 'Pasture Land Share – 3 Acres',
    price: 25000,
    description: 'Perfect for grazing or rewilding, located near the Pennines.',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    type: 'land-share',
    title: 'Community Allotment Share',
    price: 5000,
    description: 'Quarter‑acre plot with water supply, great for organic growing.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    type: 'land-share',
    title: 'Vineyard Share – Lancashire',
    price: 30000,
    description: 'Invest in a boutique vineyard; includes annual wine dividends.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    type: 'flat',
    title: 'City Centre Studio Flat',
    price: 110000,
    description: 'Compact and modern studio, walking distance to the train station.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 13,
    type: 'flat',
    title: 'Spacious 2‑Bed Flat with Parking',
    price: 185000,
    description: 'First‑floor flat with allocated parking and communal garden.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 14,
    type: 'flat',
    title: 'Penthouse Suite – River View',
    price: 425000,
    description: 'Luxurious 3‑bed penthouse with floor‑to‑ceiling windows.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 15,
    type: 'flat',
    title: 'New‑Build 1‑Bed with Concierge',
    price: 165000,
    description: 'Modern flat in a development with gym, concierge and rooftop terrace.',
    image: 'https://images.unsplash.com/photo-1560185007-5c0f9d9ce3c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 16,
    type: 'flat',
    title: 'Converted Warehouse Loft',
    price: 275000,
    description: 'Industrial‑chic open‑plan living with high ceilings and exposed brick.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 17,
    type: 'appliance',
    title: 'Bosch Series 6 Washing Machine',
    price: 450,
    description: 'Energy efficient, 9kg load, used only 6 months – like new.',
    image: 'https://images.unsplash.com/photo-1626806780560-2b7995e1f6a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 18,
    type: 'appliance',
    title: 'Samsung American Fridge Freezer',
    price: 950,
    description: 'Stainless steel, plumbed water & ice, in perfect working order.',
    image: 'https://images.unsplash.com/photo-1584568694247-3a0c35dbb8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 19,
    type: 'appliance',
    title: 'Dyson V15 Detect Cordless Vacuum',
    price: 400,
    description: 'Laser reveals microscopic dust, 60 min runtime, with accessories.',
    image: 'https://images.unsplash.com/photo-1558617320-4f5e7a4cfd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 20,
    type: 'appliance',
    title: 'Electric Substation – Industrial Unit',
    price: 9000,
    description: 'Heavy‑duty 3‑phase transformer, suitable for commercial use.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function getListings(type?: ListingType): Listing[] {
  if (type) return listings.filter(l => l.type === type);
  return listings;
}

export function getListingById(id: number): Listing | undefined {
  return listings.find(l => l.id === id);
}

export function addListing(listing: Omit<Listing, 'id'>): Listing {
  const id = listings.length + 1;
  const newListing = { id, ...listing };
  listings.push(newListing);
  return newListing;
}