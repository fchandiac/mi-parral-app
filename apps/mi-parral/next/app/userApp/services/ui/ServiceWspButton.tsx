
'use client';
import CollectionsIcon from '@mui/icons-material/Collections';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

type ServiceImagesButtonProps = {
  number: string | null;
};

export default function ServiceImagesButton( {number}: ServiceImagesButtonProps ) {

  const wspUrl = `https://wa.me/${number}`;
  return (
    <>
    <IconButton
      onClick={() => {
        console.log('wspUrl', wspUrl);
        window.open(wspUrl, '_blank');
      }} 
    sx={{
      mt: 1,
      backgroundColor: 'primary.main',
      color: 'background.default',
      ':hover': {
        backgroundColor: 'primary.main',
        color: 'white',
      },
      
    }}
    >
        <FontAwesomeIcon icon={faWhatsapp} />
    </IconButton>
    </>
  )
}
