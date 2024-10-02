import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import {
  createProduct,
  CreateProductType,
} from '@/app/actions/products-actions';

interface Categorytype {
  id: string;
  name: string;
}


interface NewProductFormProps {
  onClose: () => void;
  categories: Categorytype[];
}

export default function NewProductForm({ onClose, categories }: NewProductFormProps) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const product: CreateProductType = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      whatsapp: e.target.whatsapp.value,
      categoryId: e.target.category.value,
    };

    await createProduct(product);
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
        <Grid item>
        <FormControl fullWidth>
        <InputLabel id="category-select-label">Catgoría</InputLabel>
          <Select
            labelId="category-select-label"
            fullWidth
            label="Categoría"
            variant="outlined"
            name="category"
          >
            {categories.map((category: any) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
