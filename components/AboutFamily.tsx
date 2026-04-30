import Image from 'next/image';

export default function AboutFamily() {
  return (
    <section className="bg-warm py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Our Family
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            For generations, homebuilding has been part of our family story.
            Founded in Yorkshire in 1986 by Brian Verity as Skipton Properties,
            and now led by his daughters and the team beside them, we create new
            homes across Yorkshire and Lancashire with care and character.
            Each development is shaped to belong, thoughtfully communities built
            to last, rooted in craftsmanship and a sense of place.
          </p>
        </div>
        <div className="flex-1 relative h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Family photo"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}