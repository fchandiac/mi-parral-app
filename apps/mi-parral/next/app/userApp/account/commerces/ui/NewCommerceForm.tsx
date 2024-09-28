import { Grid, TextField, Button } from '@mui/material';

import {
CreateCommerceType,
CommerceType,
createCommerce
  
} from '@/app/actions/commerces-actions';

interface NewCommerceFormProps {
  onClose: () => void;
}

export default function NewCommerceForm({ onClose }: NewCommerceFormProps) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const commerce: CreateCommerceType = {
      name: e.target.name.value,
      description: e.target.description.value,
      whatsapp: e.target.whatsapp.value,
      address: e.target.address.value,
      location: e.target.location.value,
    };

    await createCommerce(commerce);
    onClose();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Grid container spacing={1} direction={'column'}>
        <Grid item>
          <TextField fullWidth name="name" label="Nombre" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Descripción"
            variant="outlined"
            name="description"
            multiline
            rows={3}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Dirección"
            name="address"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Google maps"
            name="location"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            type="text"
            label="Whatsapp"
            name="whatsapp"
            variant="outlined"
          />
        </Grid>
        <Grid item textAlign={'right'}>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
