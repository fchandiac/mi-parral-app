'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { CreateCampaignType } from '../actions/campaigns-actions';

const couponsUrl = process.env.NEXT_PUBLIC_COUPONS_BACKEND_URL;
const authUrl = process.env.NEXT_PUBLIC_AUTH_BACKEND_URL;

export const useNewCampaign = () => {
  const { data: session } = useSession(); // Obtiene la sesión desde next-auth
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createCampaign = async (data: CreateCampaignType) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!session?.user?.email) {
        throw new Error('User is not authenticated');
      }

      // Valida el usuario usando el endpoint de autenticación
      const userValidationResponse = await fetch(`${authUrl}/validateUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: session.user.email }),
      });

      if (!userValidationResponse.ok) {
        const error = await userValidationResponse.text();
        throw new Error(`Error validating user: ${error}`);
      }

      const user = await userValidationResponse.json();

      if (!user || !user.id) {
        throw new Error('User validation failed');
      }

      const campaign = {
        ...data,
        userId: user.id,
      };

      const response = await fetch(`${couponsUrl}/campaigns/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaign),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Error creating campaign: ${error}`);
      }

      console.log('Campaign created successfully');

      setSuccess(true);
      setIsLoading(false);
      return response.json();

    } catch (error) {
      console.error(error);
      setError('Failed to create campaign. Please try again.');
      throw new Error('Failed to create campaign. Please try again.');
    }
  };

  return {
    createCampaign,
    isLoading,
    error,
    success,
  };
};
