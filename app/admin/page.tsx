import { getListings } from '@/lib/data';   // or from MongoDB

export default async function AdminDashboard() {
  const listings = getListings();   // if using MongoDB: const listings = await Listing.find()
  const stats = {
    total: listings.length,
    properties: listings.filter(l => l.type === 'property').length,
    landShares: listings.filter(l => l.type === 'land-share').length,
    flats: listings.filter(l => l.type === 'flat').length,
    appliances: listings.filter(l => l.type === 'appliance').length,
  };

  const cards = [
    { label: 'Total Listings', value: stats.total, color: 'bg-blue-500' },
    { label: 'Properties', value: stats.properties, color: 'bg-green-500' },
    { label: 'Land Shares', value: stats.landShares, color: 'bg-yellow-500' },
    { label: 'Flats', value: stats.flats, color: 'bg-purple-500' },
    { label: 'Appliances', value: stats.appliances, color: 'bg-red-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`${card.color} text-white rounded-xl p-6 shadow`}
          >
            <h2 className="text-lg font-semibold">{card.label}</h2>
            <p className="text-4xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}