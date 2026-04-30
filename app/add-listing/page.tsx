'use client';

import { useRouter } from 'next/navigation';
import { addListingAction } from '@/actions/addListing';
import { useTransition } from 'react';

export default function AddListingPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await addListingAction(formData);
      // The action itself redirects, so we don’t need to do much else.
    });
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Listing</h1>
      <form action={handleSubmit} className="space-y-4">
        <select name="type" defaultValue="property" className="w-full border p-2 rounded">
          <option value="property">Property</option>
          <option value="land-share">Land Share</option>
          <option value="flat">Flat</option>
          <option value="appliance">Home Appliance</option>
        </select>
        <input
          name="title"
          type="text"
          placeholder="Title"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          className="w-full border p-2 rounded"
        />
        <input
          name="image"
          type="text"
          placeholder="Image URL (optional)"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isPending ? 'Adding...' : 'Submit Listing'}
        </button>
      </form>
    </div>
  );
}