import { useState } from 'react';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface UseUploadProductImageHook {
  isLoading: boolean;
  error: string | null;
  uploadImage: (file: File, productId: string) => Promise<void>;
}

export const useUploadProductImage = (): UseUploadProductImageHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File, productId: string) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('productId', productId);

    try {
      const response = await fetch(imagesUrl + '/product/upload', {
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
