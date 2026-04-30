'use server';

import { addListing, ListingType } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addListingAction(formData: FormData) {
  const type = formData.get('type') as ListingType;
  const title = formData.get('title') as string;
  const price = Number(formData.get('price'));
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;

  addListing({ type, title, price, description, image });

  // Revalidate the home page and all category pages so new listing appears.
  revalidatePath('/');
  redirect('/');
}