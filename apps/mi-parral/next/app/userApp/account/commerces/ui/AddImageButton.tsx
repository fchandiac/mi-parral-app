'use client';
import { Button, Dialog, Typography, Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import AddImageCommerceForm from './AddImageCommerceForm';
import { refreshImagesCommerces } from '@/app/actions/commerces-actions';
// import { refreshImagesServices } from '@/app/actions/services-actions';

interface AddImageButtonProps {
  commerceId: string;
}

const AddImageButton: React.FC<AddImageButtonProps> = ({ commerceId }) => {
  const [openAddImageDialog, setOpenAddImageDialog] = useState(false);

  const handleClose = async () => {
    setOpenAddImageDialog(false);
    await refreshImagesCommerces()
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
            Agregar imágen al comercio
          </Typography>
          <AddImageCommerceForm onClose={handleClose} commerceId={commerceId} />
        </Box>
      </Dialog>
    </>
  );
};

export default AddImageButton;
