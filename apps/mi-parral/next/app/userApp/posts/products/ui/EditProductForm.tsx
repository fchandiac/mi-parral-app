import { Button, Grid, TextField } from '@mui/material';
import { UpdateProductType, updateProduct } from '@/app/actions/products-actions';

interface EditProductFormProps {
  productId: string ;
  onClose: () => void;
  initialData: {
    name: string | null;
    description: string | null;
    whatsapp: string | null;
    price: number | null;
  };
}

export default function EditProductForm({
  productId,
  onClose,
  initialData,
}: EditProductFormProps) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data: UpdateProductType = {
      id: productId,
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      whatsapp: e.target.whatsapp.value,
    };
    await updateProduct(data);
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
            fullWidth
            name="name"
            label="Nombre"
            variant="outlined"
            defaultValue={initialData.name}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            name='description'
            label="Descripción"
            variant="outlined"
            multiline
            rows={3}
            defaultValue={initialData.description}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Precio"
            name='price'
            variant="outlined"
            type="number"
            defaultValue={initialData.price}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            name='whatsapp'
            label="Whatsapp"
            variant="outlined"
            defaultValue={initialData.whatsapp}
          />
        </Grid>
        <Grid item textAlign={'right'}>
          <Button type="submit" variant="contained" color="primary">
            Editar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
