import Navbar from '@/components/Navbar';   // already global if placed in layout
import Footer from '@/components/Footer';
import { getListings } from '@/lib/data';
import ListingCard from '@/components/ListingCard';
import Link from 'next/link';

export default function AppliancesPage() {
  const listings = getListings('appliance');

  return (
    <div className="bg-warm min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Home Appliances</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Explore our collection of high-quality home appliances.
        </p>
      </section>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
          {listings.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">No appliances listed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}