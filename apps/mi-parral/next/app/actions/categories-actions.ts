'use server';

import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';

const apiUrl = process.env.API_BACKEND_URL;



export async function findAllCategories() {

  const categories = await fetch(`${apiUrl}/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

    return categories.json();
}