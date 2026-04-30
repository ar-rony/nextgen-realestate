import Link from 'next/link';
import { Listing } from '@/lib/data';

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col">
      <h2 className="text-xl font-bold">{listing.title}</h2>
      <p className="text-gray-500 capitalize">{listing.type.replace('-', ' ')}</p>
      <p className="text-green-600 font-semibold text-lg mt-1">
        ${listing.price.toLocaleString()}
      </p>
      <Link
        href={`/listings/${listing.id}`}
        className="text-blue-500 hover:underline mt-auto pt-2"
      >
        View Details →
      </Link>
    </div>
  );
}