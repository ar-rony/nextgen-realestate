'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { updateListing, adminAddListing } from '@/actions/admin';   // we'll adapt
// We need an add action; we can reuse the one from the public form or create an admin version.
// Let's create an admin add action separately.

export default function ListingForm({
  listing,
}: {
  listing: { id: number; title: string; price: number; description: string; type: string; image: string } | null;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      if (listing) {
        await updateListing(listing.id, formData);
      } else {
        // Use a dedicated admin add action
        await adminAddListing(formData);
      }
      router.refresh();   // then redirect
      router.push('/admin/listings');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-2xl space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Type</label>
        <select name="type" defaultValue={listing?.type || 'property'} className="w-full border px-3 py-2 rounded">
          <option value="property">Property</option>
          <option value="land-share">Land Share</option>
          <option value="flat">Flat</option>
          <option value="appliance">Appliance</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input name="title" defaultValue={listing?.title || ''} required className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input name="price" type="number" defaultValue={listing?.price || ''} required className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea name="description" rows={4} defaultValue={listing?.description || ''} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input name="image" defaultValue={listing?.image || ''} className="w-full border px-3 py-2 rounded" />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? 'Saving...' : listing ? 'Update Listing' : 'Create Listing'}
      </button>
    </form>
  );
}

// Temporary admin add action (or import from actions/admin)
async function adminAddListing(formData: FormData) {
  // For in-memory store:
  const { addListing } = await import('@/lib/data');
  addListing({
    type: formData.get('type') as any,
    title: formData.get('title') as string,
    price: Number(formData.get('price')),
    description: formData.get('description') as string,
    image: formData.get('image') as string,
  });
}

// We'll move this into actions/admin.ts properly below.