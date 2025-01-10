import { useState } from 'react';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;



interface UseUploadServiceImageHook {
  isLoading: boolean;
  error: string | null;
  uploadImage: (file: File, serviceId: string) => Promise<void>;
}

export const useUploadServiceImage = (): UseUploadServiceImageHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File, serviceId: string) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('serviceId', serviceId);

    try {
      const response = await fetch(imagesUrl + '/service/upload', {
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
