import Link from 'next/link';
import { getListings } from '@/lib/data';
import DeleteButton from './DeleteButton';   // we'll create this

export default async function AdminListingsPage() {
  const listings = getListings();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Listings</h1>
        <Link
          href="/admin/listings/edit/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Listing
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Title</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Type</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Price</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {listings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{listing.id}</td>
                <td className="px-6 py-4 font-medium">{listing.title}</td>
                <td className="px-6 py-4 capitalize">{listing.type.replace('-', ' ')}</td>
                <td className="px-6 py-4">${listing.price.toLocaleString()}</td>
                <td className="px-6 py-4 space-x-2">
                  <Link
                    href={`/admin/listings/edit/${listing.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <DeleteButton id={listing.id} />
                </td>
              </tr>
            ))}
            {listings.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}