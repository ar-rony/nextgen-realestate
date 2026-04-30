export default function Values() {
  const values = [
    { title: 'Craftsmanship', description: 'Every detail is considered, every finish perfected.' },
    { title: 'Heritage', description: 'Over 35 years of family tradition in homebuilding.' },
    { title: 'Community', description: 'We build places people are proud to call home.' },
    { title: 'Trust', description: 'Transparent and honest relationships with every buyer.' },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">✨</span> {/* replace with icons */}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}