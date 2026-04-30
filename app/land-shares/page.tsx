import { getListings } from '@/lib/data';
import ListingCard from '@/components/ListingCard';

export default function LandSharesPage() {
  const listings = getListings('land-share');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Land Shares</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
        {listings.length === 0 && (
          <p className="text-gray-500">No land shares listed yet.</p>
        )}
      </div>
    </div>
  );
}