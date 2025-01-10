'use server';


const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;


import { time } from 'console';
import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';
import { setTimeout } from 'timers/promises';

export interface SetPrincipalCommerceImageType {
  commerceId: string;
  imageId: string;
}

export interface CreateCommerceType {
  name: string;
  description: string;
  userId?: string;
  whatsapp?: string;
  address?: string;
  location?: string;
  categoryId?: string;
}

export interface UpdateCommerceType {
  id: string | null;
  name: string | null;
  description: string | null;
  address: string | null;
  location: string | null;
  whatsapp: string | null;
}

export interface CommerceType {
  id: string;
  name: string | null;
  description: string | null;
  userId: string | null;
  address: string | null;
  location: string | null;
  whatsapp: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
  category: { id: string; name: string; };
}

export const listUserCommerces = async () => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(
    `${apiUrl}/commerces/findAllByUserId?id=${user.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};

export const createCommerce = async (commerce: CreateCommerceType) => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  if (!user || !user.id) {
    throw new Error('User validation failed');
  }
  commerce.userId = user.id;
  const response = await fetch(`${apiUrl}/commerces`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commerce),
  });

  revalidatePath('/userApp/account/commerces');
  return response.json();
};

export const findCommerceImages = async (commerceId: string) => {
 
  const response = await fetch(`${imagesUrl}/commerce/images?commerceId=${commerceId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidatePath('/userApp/account/commerces/ui/CommerceCard');
  return response.json();
}

export const refreshImagesCommerces = async () => {
  revalidatePath('/userApp/account/commerces/ui/CommerceCard');
  console.log('refreshImagesCommerces');
  return;
}

export const deleteCommerce = async (commerceId: string) => {
  const response = await fetch(`${apiUrl}/commerces?id=${commerceId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Error deleting commerce');
  }
  revalidatePath('/userApp/account/commerces/ui/ListCommerces');
}

export const findAllCommerces = async () => {
  const response = await fetch(`${apiUrl}/commerces`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidatePath('/userApp/commerces/layout');
  return response.json();
}


export const setPrincipalCommerceImage = async (commerceId: string, imageId: string) => {

  const response = await fetch(`${imagesUrl}/commerce/setPrincipal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ commerceId, imageId }),
  });
  revalidatePath('/userApp/account/commerces/ui/CommerceCard');
  return response.json();
}

export const deleteCommerceImage = async (imageId: string) => {
  const response = await fetch(`${imagesUrl}/commerce?imageId=${imageId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok){
    revalidatePath('/userApp/account/commerces/ui/CommerceCard');
  }
}


export const updateCommerce = async (commerce: UpdateCommerceType) => {
  const response = await fetch(`${apiUrl}/commerces`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commerce),
  });
  revalidatePath('/userApp/account/commerces/ui/CommerceCard');
  return response.json();
}

export const findOneCommerce = async (commerceId: string) => {
  const response = await fetch(`${apiUrl}/commerces/findOne?id=${commerceId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}


export const findAllByCategoryNameOrCommerceName = async (searchTerm: string) => {
  const response = await fetch(`${apiUrl}/commerces/findAllByCategoryNameOrCommerceName?searchTerm=${searchTerm}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

export const commerceImages = async (commerceId: string) => {
  const response = await fetch(`${imagesUrl}/commerce/images?commerceId=${commerceId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

export const commerceImage = async (commerceId: string) => {
  const response = await fetch(`${imagesUrl}/commerce/image?commerceId=${commerceId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  return response.json();
}

export const findRandomCommerce = async () => {
  const response = await fetch(`${apiUrl}/commerces/findRandom`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}
