import Link from 'next/link';

export default function SmoothMove() {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Introducing Smooth Move</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-200">
          Our Smooth Move Package has been created to ease that pressure –
          helping you focus on your new beginning, not the upfront expenses.
          If you’re ready to complete within 8 weeks, we’ll contribute towards
          the costs that matter most, so you can step into your new home feeling
          prepared, not stretched.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <h3 className="text-2xl font-serif font-bold mb-2">Stamp Duty</h3>
            <p className="text-sm text-gray-300">A contribution towards your stamp duty liability (value is plot‑specific).</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <h3 className="text-2xl font-serif font-bold mb-2">£1,500</h3>
            <p className="text-sm text-gray-300">Towards removals via our chosen partner, in the form of a gift voucher.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <h3 className="text-2xl font-serif font-bold mb-2">£1,500</h3>
            <p className="text-sm text-gray-300">Towards legal fees to support your conveyancing costs.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <h3 className="text-2xl font-serif font-bold mb-2">£500</h3>
            <p className="text-sm text-gray-300">Towards mortgage fees, covering lender application & valuation charges.</p>
          </div>
        </div>
        <Link
          href="/smooth-move"
          className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}