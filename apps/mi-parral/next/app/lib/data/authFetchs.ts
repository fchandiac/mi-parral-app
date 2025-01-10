const authUrl = process.env.AUTH_BACKEND_URL;

export async function registerUser(email: string, password: string, name: string, role: string = 'user') {
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error en la solicitud');
    }

    return response.json();
  } catch (error) {
    console.error('Error en registerUser:', error);
    throw error;
  }
}