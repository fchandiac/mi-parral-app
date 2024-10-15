import { useState } from 'react';
const authUrl = process.env.NEXT_PUBLIC_AUTH_BACKEND_URL;


// Hook para manejar el registro de usuario
export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  // Validar que las contraseñas coincidan
  const validatePassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  // Función para realizar el fetch
  const registerUser = async (
    name: string,
    email: string,
    password: string,
  ) => {
    try {
      const data = { name, email, password };
      const response = await fetch(authUrl + '/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  // Función que se llamará al enviar el formulario de registro
  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    setLoading(true);
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Validar contraseñas
    const isValid = validatePassword(password, confirmPassword);
    if (!isValid) {
      setLoading(false);
      setError('Passwords do not match');
      return;
    }

    try {
      // Llamar a la función independiente para realizar el fetch
      const response = await registerUser(name, email, password);
      if (response.error) {
        if (response.statusCode === 401) {
          setError('Email ya registrado');
        }
      }
    } catch (error) {
      setError('Error en el registro');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
