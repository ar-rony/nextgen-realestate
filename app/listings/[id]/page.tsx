import { getListingById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ListingDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListingById(Number(id));

  if (!listing) notFound();

  return (
    <div className="bg-warm min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <Link href="/properties" className="text-accent hover:underline mb-4 inline-block">
            &larr; Back to listings
          </Link>
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">{listing.title}</h1>
          <p className="text-gray-500 capitalize text-lg">{listing.type.replace('-', ' ')}</p>
          <p className="text-3xl font-bold text-accent my-4">£{listing.price.toLocaleString()}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{listing.description}</p>
          {listing.image && (
            <img src={listing.image} alt={listing.title} className="mt-6 w-full rounded-xl" />
          )}
        </div>
      </div>
    </div>
  );
}