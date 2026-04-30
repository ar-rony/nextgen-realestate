import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Background image (replace with a real one) */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Luxury home"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          Find Your Home
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
          Discover meticulously crafted homes built with heart and heritage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/properties"
            className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition text-lg"
          >
            Browse Properties
          </Link>
          <Link
            href="/add-listing"
            className="border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition text-lg"
          >
            Sell With Us
          </Link>
        </div>
      </div>
    </section>
  );
}