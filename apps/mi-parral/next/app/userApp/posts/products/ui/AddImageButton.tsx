'use client';
import { Button, Dialog, Typography, Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import AddImageProductForm from './AddImageProductForm';
import { refreshImagesServices } from '@/app/actions/services-actions';

interface AddImageButtonProps {
  serviceId: string;
}

const AddImageButton: React.FC<AddImageButtonProps> = ({ serviceId }) => {
  const [openAddImageDialog, setOpenAddImageDialog] = useState(false);

  const handleClose = async () => {
    setOpenAddImageDialog(false);
    await refreshImagesServices();
  };
  return (
    <>
      <Button
        size="small"
        variant="outlined"
        onClick={() => setOpenAddImageDialog(true)}
        sx={{
          borderRadius: 20,
        }}
      >
        <AddIcon />
        <CameraAltIcon />
      </Button>
      <Dialog
        open={openAddImageDialog}
        onClose={() => setOpenAddImageDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Agregar imágen al servicio
          </Typography>
          <AddImageProductForm onClose={handleClose} serviceId={serviceId} />
        </Box>
      </Dialog>
    </>
  );
};

export default AddImageButton;
