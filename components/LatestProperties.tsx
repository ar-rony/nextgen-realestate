'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Listing } from '@/lib/data';   // adjust path if needed
import ListingCard from './ListingCard';

export default function LatestProperties() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  // Load all listings
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/listings');   // assuming you kept the API route
      const data = await res.json();
      setListings(data);
      setLoading(false);
    };
    fetchData();
  }, []);



  // Get current filter values from URL
  const typeFilter = searchParams.get('type') || '';
  const searchFilter = searchParams.get('search') || '';

  // Apply filters locally
 const filtered = listings.filter((item) => {
  const matchesType = !typeFilter || item.type === typeFilter;
  const matchesSearch = !searchFilter || item.title.toLowerCase().includes(searchFilter.toLowerCase());
  return matchesType && matchesSearch;
});

  // Update URL when filters change
  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="latest">
      <h2 className="text-3xl font-bold mb-8">Latest Properties</h2>

      {/* Filter controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select
          value={typeFilter}
          onChange={(e) => updateFilter('type', e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="">All Types</option>
          <option value="property">Properties</option>
          <option value="land-share">Land Shares</option>
          <option value="flat">Flats</option>
          <option value="appliance">Appliances</option>
        </select>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchFilter}
          onChange={(e) => updateFilter('search', e.target.value)}
          className="border rounded px-4 py-2 flex-1"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
          {filtered.length === 0 && (
            <p className="text-gray-500 col-span-full">No listings match your filters.</p>
          )}
        </div>
      )}
    </section>
  );
}