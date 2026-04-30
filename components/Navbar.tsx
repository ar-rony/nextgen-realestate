import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Dhaka Landmark<span className="text-accent">Ltd</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/properties" className="text-gray-700 hover:text-accent transition font-medium">
            Find a Home
          </Link>
          <Link href="/land-shares" className="text-gray-700 hover:text-accent transition font-medium">
            Land Shares
          </Link>
          <Link href="/flats" className="text-gray-700 hover:text-accent transition font-medium">
            Flats
          </Link>
          <Link href="/appliances" className="text-gray-700 hover:text-accent transition font-medium">
            Home Appliances
          </Link>
          <Link href="/add-listing" className="bg-accent text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition">
            List a Property
          </Link>
        </div>
      </div>
    </nav>
  );
}