import { getListingById } from '@/lib/data';
import { notFound } from 'next/navigation';
import ListingForm from './ListingForm';

export default async function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const isNew = id === 'new';
  let listing = null;

  if (!isNew) {
    const numericId = parseInt(id);
    listing = getListingById(numericId);
    if (!listing) notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {isNew ? 'Add New Listing' : 'Edit Listing'}
      </h1>
      <ListingForm listing={listing} />
    </div>
  );
}