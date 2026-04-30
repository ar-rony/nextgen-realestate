export default function Stats() {
  return (
    <section className="bg-warm py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-8">
          We’ve built almost 4,000 homes in Yorkshire & Lancashire
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div>
            <p className="text-5xl font-bold text-accent">3,926</p>
            <p className="text-gray-600 mt-2">Homes Completed</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-accent">37</p>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-accent">12</p>
            <p className="text-gray-600 mt-2">Current Developments</p>
          </div>
        </div>
      </div>
    </section>
  );
}