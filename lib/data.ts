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
    title: 'Beautiful Villa',
    price: 500000,
    description: 'A lovely villa with a pool.',
    image: 'https://picsum.photos/seed/villa/400/300',
  },
  {
    id: 2,
    type: 'land-share',
    title: 'Farmland Share - 1 Acre',
    price: 20000,
    description: 'Own a share of productive farmland.',
    image: 'https://picsum.photos/seed/farm/400/300',
  },
  {
    id: 3,
    type: 'flat',
    title: 'Modern 2BHK Flat',
    price: 120000,
    description: 'City centre flat with great views.',
    image: 'https://picsum.photos/seed/flat/400/300',
  },
  {
    id: 4,
    type: 'appliance',
    title: 'Samsung Refrigerator',
    price: 800,
    description: 'Energy efficient, 2 years old.',
    image: 'https://picsum.photos/seed/fridge/400/300',
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