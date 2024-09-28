import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton } from '@mui/material';

export default function EditServiceButton() {
  return (
    <>

        <IconButton
            aria-label="edit"
            color="primary"
            size='small'
            sx={{
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.5)',
                ml: 1.5,
            
            }}

        >
            <EditIcon 
            sx={{
                fontSize: 20,
            }}
             />
        </IconButton>
    </>
  )
}
