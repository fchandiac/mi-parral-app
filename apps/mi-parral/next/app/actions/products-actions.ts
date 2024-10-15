'use server';

import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

export interface SetPrincipalProductImageType {
  productId: string;
  imageId: string;
}

export interface CreateProductType {
  name: string;
  description: string;
  price: number;
  userId?: string;
  whatsapp?: string;
  categoryId?: number;
}

export interface ProductType {
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

export interface UpdateProductType {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  whatsapp: string | null;
}

export const listUserProducts = async () => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(
    `${apiUrl}/products/findAllByUserId?id=${user.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};

export const createProduct = async (product: CreateProductType) => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  if (!user || !user.id) {
    throw new Error('User validation failed');
  }

  product.userId = user.id;
  const response = await fetch(`${apiUrl}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  revalidatePath('/userApp/account/products');
  return response.json();
};

export const findProductImages = async (productId: string) => {
  console.log('findProductImages', productId);
  const response = await fetch(
    `${imagesUrl}/product/images?productId=${productId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );


  return response.json();

};

export const refreshImagesProducts = async () => {
  revalidatePath('/userApp/account/products/ui/ProductCard');
  console.log('refreshImagesProducts');
  return;
};

export const deleteProduct = async (productId: string) => {
  const response = await fetch(`${apiUrl}/products?id=${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Error deleting product');
  }
  revalidatePath('/userApp/account/products/ui/ListProducts');
};

export const findAllProducts = async () => {
  const response = await fetch(`${apiUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  revalidatePath('/userApp/products/layout');
  
  return response.json();
};



export const setPrincipalProductImage = async (
  productId: string,
  imageId: string,
) => {

  const response = await fetch(imagesUrl + '/product/setPrincipal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, imageId }),
  });
  revalidatePath('/userApp/account/products/ui/ProductCard');

  return response.json();
};

export const productImage = async (productId: string) => {
  const response = await fetch(
    `${imagesUrl}/product/image?productId=${productId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    },
  );
  revalidatePath('/userApp/account/products/ui/ProductCard');
  return response.json();
};

export const findOneProduct = async (
  productId: string,
): Promise<ProductType> => {
  const response = await fetch(`${apiUrl}/products/findOne?id=${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const findRandomProduct = async (): Promise<ProductType> => {
  const response = await fetch(`${apiUrl}/products/findRandom`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const deleteProductImage = async (imageId: string) => {
  const response = await fetch(
    `${imagesUrl}/product/image?imageId=${imageId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('Error deleting product image');
  }
  revalidatePath('/userApp/account/products/ui/ProductCard');
};

export const updateProduct = async (product: UpdateProductType) => {
  const response = await fetch(`${apiUrl}/products`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  revalidatePath('/userApp/account/products/ui/ProductCard');
  return response.json();
};

// findAllByCategoryName

export const findAllByCategoryName = async (name: string) => {
  const response = await fetch(
    `${apiUrl}/products/findAllByCategoryName?name=${name}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};

export const findAllByCategoryNameOrProductName = async (searchTerm: string) => {
  console.log('searchTerm', searchTerm);
  const response = await fetch(
    `${apiUrl}/products/findAllByCategoryNameOrProductName?searchTerm=${searchTerm}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
};
