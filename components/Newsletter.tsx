export default function Newsletter() {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Stay up to date with Verity & Co. Homes</h2>
        <p className="text-gray-200 mb-8">Be the first to know about new developments and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-full text-gray-900 flex-1"
            required
            suppressHydrationWarning   // ← add this
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}