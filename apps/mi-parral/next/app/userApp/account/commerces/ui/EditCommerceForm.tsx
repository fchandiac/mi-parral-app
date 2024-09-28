import { Grid, TextField, Button } from '@mui/material';

import {
UpdateCommerceType,
updateCommerce,
} from '@/app/actions/commerces-actions';


interface EditCommerceFormProps {
  commerceId: string | null;
  onClose: () => void;
  initialData: {
    name: string | null;
    description: string | null;
    whatsapp: string | null;
    address: string | null;
    location: string | null;
  };
}

export default function EditCommerceForm({ commerceId, onClose, initialData }: EditCommerceFormProps) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const commerce: UpdateCommerceType = {
      id: commerceId,
      name: e.target.name.value,
      description: e.target.description.value,
      whatsapp: e.target.whatsapp.value,
      address: e.target.address.value,
      location: e.target.location.value,
    }

    // console.log(commerce);

    await updateCommerce(commerce);
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
          <TextField 
          fullWidth name="name" 
          label="Nombre" 
          variant="outlined" 
          defaultValue={initialData.name}
          required 
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Descripción"
            variant="outlined"
            name="description"
            multiline
            rows={3}
            defaultValue={initialData.description}
            // required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Dirección"
            name="address"
            variant="outlined"
            defaultValue={initialData.address}
            // required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Google maps"
            name="location"
            variant="outlined"
            defaultValue={initialData.location}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            type="text"
            label="Whatsapp"
            name="whatsapp"
            variant="outlined"
            defaultValue={initialData.whatsapp}
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
