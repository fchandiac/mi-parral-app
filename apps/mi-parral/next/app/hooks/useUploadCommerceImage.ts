import { useState } from 'react';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface UseUploadCommerceImageHook {
  isLoading: boolean;
  error: string | null;
  uploadImage: (file: File, commerceId: string) => Promise<void>;
}

export const useUploadCommerceImage = (): UseUploadCommerceImageHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File, commerceId: string) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('commerceId', commerceId);

    try {
      const response = await fetch(imagesUrl + '/commerce/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al subir la imagen');
      }
    } catch (err: any) {
      setError(err?.message || 'Error al subir la imagen');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    uploadImage,
  };
};
