import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-serif font-bold text-white mb-4">Dhaka Landmark Ltd</h3>
          <p className="text-sm leading-relaxed">
            Building family homes across Mirpur & Uttara since 2023.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/properties" className="hover:text-accent">Find a Home</Link></li>
            <li><Link href="/land-shares" className="hover:text-accent">Land Shares</Link></li>
            <li><Link href="/flats" className="hover:text-accent">Flats</Link></li>
            <li><Link href="/appliances" className="hover:text-accent">Appliances</Link></li>
            <li><Link href="/add-listing" className="hover:text-accent">Sell With Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Nannu tower, Mirpur DOHS, Dhaka-1206</li>
            <li>📞 01756 123456</li>
            <li>✉️ hello@dhakalandmarltd.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <span className="hover:text-accent cursor-pointer">FB</span>
            <span className="hover:text-accent cursor-pointer">IG</span>
            <span className="hover:text-accent cursor-pointer">LI</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        <span suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Dhaka Landmark ltd. All rights reserved.
        </span>
      </div>
    </footer>
  );
}


