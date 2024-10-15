'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
const authUrl = process.env.NEXT_PUBLIC_AUTH_BACKEND_URL;

export const loginAction = async (email: string, password: string) => {
  try {
    const login = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });
    return { succes: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
  } finally {
    redirect('/userApp');
  }
};

export const registerAction = async (
  email: string,
  password: string,
  name: string,
  role: string = 'user', // Si quieres tener un valor por defecto
) => {
  try {
    const data = {
      email,
      password,
      name,
      role,
    };

    const response = await fetch(`${authUrl}/registerUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      // Extrae el mensaje de error si la respuesta no es exitosa
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error en la solicitud');
    }

    // Si la respuesta fue exitosa, regresa los datos
    console.log('response', response.json());
    return response.json();
  } catch (error) {
    // Imprimir el error para facilitar el debug
    console.error('Error en registerAction:', error);

    // Puedes devolver el error o lanzar una excepción según tu lógica
    throw error;
  }
};

export const validateUser = async (email: any ) => {
  const response =  await fetch(`${authUrl}/validateUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });


    return response.json();



};

export const registerGoogleUser = async (googleId: any , email: any, name: any, image: any) => {
  const response = await fetch(`${authUrl}/registerUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ googleId, email, name, image }),
  });

  return response.json();
}


export const logoutAction = async () => {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Error al cerrar sesión');
};
