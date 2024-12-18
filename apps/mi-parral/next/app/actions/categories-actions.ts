'use server';

import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;



export async function findAllCategories() {

  const categories = await fetch(`${apiUrl}/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });

    return categories.json();
}