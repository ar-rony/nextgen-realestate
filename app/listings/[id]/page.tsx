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

  if (!listing) {
    notFound();   // shows the default Next.js 404 page
  }

  return (
    <div className="p-8">
      <Link href="/" className="text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mt-4">{listing.title}</h1>
      <p className="text-gray-500 capitalize">{listing.type.replace('-', ' ')}</p>
      <p className="text-2xl font-semibold text-green-600">
        ${listing.price.toLocaleString()}
      </p>
      <p className="mt-4 max-w-2xl">{listing.description}</p>
      {listing.image && (
        <img
          src={listing.image}
          alt={listing.title}
          className="mt-4 max-w-full h-auto rounded-lg shadow"
        />
      )}
    </div>
  );
}