'use server';

import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';
import { setTimeout } from 'timers/promises';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

export interface SetPrincipalServiceImageType {
  serviceId: string;
  imageId: string;
}

export interface CreateServiceType {
  name: string;
  description: string;
  price: number;
  userId?: string;
  whatsapp?: string;
  categoryId?: number;
}

export interface ServiceType {
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  userId: string | null;
  whatsapp: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
  category: {
    id: number;
    name: string;
  };
}

export interface UpdataServiceType {
  id: string
  name: string;
  description: string | null;
  price: number | null;
  whatsapp: string | null;
}

export const listUserServices = async () => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(
    `${apiUrl}/services/findAllByUserId?id=${user.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};

export const createService = async (service: CreateServiceType) => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  if (!user || !user.id) {
    throw new Error('User validation failed');
  }
  service.userId = user.id;
  const response = await fetch(`${apiUrl}/services`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(service),
  });


  revalidatePath('/userApp/posts/services');
  return response.json();
};

export const findServiceImages = async (serviceId: string) => {
  const response = await fetch(
    `${imagesUrl}/service/images?serviceId=${serviceId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  revalidatePath('/userApp/posts/services/ui/ServiceCard');
  return response.json();
};

export const refreshImagesServices = async () => {
  revalidatePath('/userApp/posts/services/ui/ServiceCard');
  console.log('refreshImagesServices');
  return;
};

export const deleteService = async (serviceId: string) => {
  const response = await fetch(`${apiUrl}/services?id=${serviceId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Error deleting service');
  }
  revalidatePath('/userApp/account/services/ui/ListServices');
};

export const findAllServices = async () => {
  const response = await fetch(`${apiUrl}/services`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });

  revalidatePath('/userApp/services/layout');
  
  return response.json();
};

export const setPrincipalServiceImage = async (
  serviceId: string,
  imageId: string,
) => {
  const response = await fetch(imagesUrl + '/service/setPrincipal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ serviceId, imageId }),
  });
  revalidatePath('/userApp/account/services/ui/ServiceCard');
  return response.json();
};

export const serviceImage = async (serviceId: string) => {
  const response = await fetch(
    `${imagesUrl}/service/image?serviceId=${serviceId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    },
  );
  revalidatePath('/userApp/account/services/ui/ServiceCard');
  return response.json();
};

export const findOneService = async (
  serviceId: string,
): Promise<ServiceType> => {
  const response = await fetch(`${apiUrl}/services/findOne?id=${serviceId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const findRandomService = async (): Promise<ServiceType> => {
  const response = await fetch(`${apiUrl}/services/findRandom`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const deleteServiceImage = async (imageId: string) => {

  const response = await fetch(
    `${imagesUrl}/service?imageId=${imageId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('Error deleting service image');
  }
  revalidatePath('/userApp/account/services/ui/ServiceCard');

};

export const updateService = async (service: UpdataServiceType) => {
  const response = await fetch(`${apiUrl}/services`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(service),
  });
  revalidatePath('/userApp/posts/services/ui/ServiceCard');
  return response.json();
};


//findAllByCategoryName

export const findAllByCategoryName = async (name: string) => {
  const response = await fetch(
    `${apiUrl}/services/findAllByCategoryName?name=${name}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};


export const findAllByCategoryNameOrServiceName = async (searchTerm: string) => {
  console.log('searchTerm', searchTerm);
  const response = await fetch(
    `${apiUrl}/services/findAllByCategoryNameOrServiceName?searchTerm=${searchTerm}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};