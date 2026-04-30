import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { logout, isAdminAuthenticated } from '@/actions/admin';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect the entire /admin route
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          🏠 Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/listings"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            All Listings
          </Link>
          <Link
            href="/admin/listings/edit/new"   // or use add page
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Add New
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <form action={logout}>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-red-600 transition">
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}