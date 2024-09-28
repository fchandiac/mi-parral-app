import { Grid, TextField, Button } from '@mui/material';

import {
  createService,
  CreateServiceType,
} from '@/app/actions/services-actions';

interface NewServiceFormProps {
  onClose: () => void;
}

export default function NewServiceForm({ onClose }: NewServiceFormProps) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const service: CreateServiceType = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      whatsapp: e.target.whatsapp.value,
    };

    await createService(service);
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
            type="number"
            label="Precio"
            name="price"
            variant="outlined"
            required
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
