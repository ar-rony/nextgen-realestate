'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const COOKIE_NAME = 'admin_token';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// ===================== AUTH =====================
export async function login(password: string) {
  if (password === ADMIN_PASSWORD) {
    (await cookies()).set(COOKIE_NAME, 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    redirect('/admin');
  }
  return { error: 'Invalid password' };
}

export async function logout() {
  (await cookies()).delete(COOKIE_NAME);
  redirect('/admin/login');
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const token = (await cookies()).get(COOKIE_NAME);
  return token?.value === 'true';
}

// ===================== CRUD =====================
// Works with in-memory store (data.ts) or MongoDB (see comments)

import { getListings, getListingById, Listing, addListing } from '@/lib/data';

export async function deleteListing(id: number) {
  // For in-memory: manipulate the array directly
  const { getListings: getAll } = await import('@/lib/data');
  const listings = getAll();
  const index = listings.findIndex(l => l.id === id);
  if (index !== -1) {
    listings.splice(index, 1);
  }
  revalidatePath('/admin/listings');
  redirect('/admin/listings');
}

export async function adminAddListing(formData: FormData) {
  const type = formData.get('type') as Listing['type'];
  const title = formData.get('title') as string;
  const price = Number(formData.get('price'));
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;

  addListing({ type, title, price, description, image });

  revalidatePath('/admin/listings');
  redirect('/admin/listings');
}

export async function updateListing(id: number, formData: FormData) {
  const title = formData.get('title') as string;
  const price = Number(formData.get('price'));
  const description = formData.get('description') as string;
  const type = formData.get('type') as Listing['type'];
  const image = formData.get('image') as string;

  const listing = getListingById(id);
  if (listing) {
    listing.title = title;
    listing.price = price;
    listing.description = description;
    listing.type = type;
    listing.image = image;
  }

  revalidatePath('/admin/listings');
  redirect('/admin/listings');
}

// If using MongoDB: replace the above with Mongoose calls
// (see the full code at the end of this answer)