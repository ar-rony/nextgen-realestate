const team = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    img: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Bob Smith',
    role: 'Head of Sales',
    img: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Clara Lee',
    role: 'Lead Developer',
    img: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'David Chen',
    role: 'Marketing Manager',
    img: 'https://i.pravatar.cc/150?img=4',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}