import Link from 'next/link';

const categories = [
  { name: 'Properties', type: 'property', href: '/properties' },
  { name: 'Land Shares', type: 'land-share', href: '/land-shares' },
  { name: 'Flats', type: 'flat', href: '/flats' },
  { name: 'Home Appliances', type: 'appliance', href: '/appliances' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">🏡 Real Estate Marketplace</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat.type}
            href={cat.href}
            className="p-6 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition font-medium"
          >
            {cat.name}
          </Link>
        ))}
      </div>
      <Link
        href="/add-listing"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        + Add New Listing
      </Link>
    </main>
  );
}