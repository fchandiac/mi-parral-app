'use client';

import { useState } from 'react';
import { Grid, TextField, Button, Box, Skeleton } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useUploadServiceImage } from '@/app/hooks/useUploadServiceImage';
import ImageSkeleton from '@/components/ImageSkeleton';

interface AddImageServiceFormProps {
  onClose: () => void;
  serviceId: string;
}

export default function AddImageServiceForm({
  onClose,
  serviceId,
}: AddImageServiceFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const { isLoading, error, uploadImage } = useUploadServiceImage();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (file && serviceId) {
      const upload = await uploadImage(file, serviceId);
      onClose();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFile(file); // Guardar el archivo
      setImagePreview(imageUrl); // Guardar la URL para la vista previa

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} direction="column">
        <Grid item>
          {imagePreview ? (
            <Box
              component="img"
              src={imagePreview}
              alt="Vista previa"
              borderRadius={1}
              maxWidth={'100%'}
              maxHeight={'50vh'}
              sx={{marginTop: '10px', backgroundSize: 'cover' }}
            />
          ) : (
            <Box>
              <ImageSkeleton />
            </Box>

            
          )}
        </Grid>

        <Grid
          item
          textAlign="right"
          justifyContent={'space-between'}
          display={'flex'}
        >
          <Box>
            <input
              accept="image/jpeg, image/png, image/webp"
              style={{ display: 'none' }}
              id="upload-file"
              type="file"
              onChange={handleImageChange} // Manejar el cambio de imagen
            />
            <label htmlFor="upload-file">
              <Button
                variant="outlined"
                color="primary"
                component="span"
                startIcon={<UploadFileIcon />}
                sx={{ padding: '8px 16px', textTransform: 'none' }}
              >
                Selecciona Imagen
              </Button>
            </label>
          </Box>

          <Button type="submit" variant="contained" color="primary">
            Subir
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
