'use client';

import {
  Grid,
  Select,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Alert,
  Box,
  Button,
} from '@mui/material';

interface ProfileFormProps {
  userId: string;
  profileId: string;
  birthdate: Date;
  neighborhood: number;
  gender: number;
}

const genders = [
  { value: 1, label: 'Masculino' },
  { value: 2, label: 'Femenino' },
  { value: 3, label: 'Otro' },
];

const neighborhoods = [
  { value: 1, label: 'Centro' },
  { value: 2, label: 'Buenos Aires' },
  { value: 3, label: 'Arrau Méndez' },
  { value: 4, label: 'Igualdad Sur' },
  { value: 5, label: 'Los Olivos' },
  { value: 6, label: 'Viña del Mar' },
  { value: 7, label: 'Camino a Catillo' },
  { value: 8, label: 'Camino a Bullileo' },
  { value: 9, label: 'Talquita' },
  { value: 10, label: 'Otro' },
];

import {
  isProfileComplete,
  updateProfile,
} from '../../../actions/profile-actions';

export default async function ProfileForm({
  userId,
  profileId,
  birthdate,
  gender,
  neighborhood,
}: ProfileFormProps) {
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const profile = {
      id: profileId,
      birthdate: formData.get('birthdate') as string,
      gender: formData.get('gender') as unknown as number,
      neighborhood: formData.get('neighborhood') as unknown as number,
    };

    updateProfile(profile);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction={'column'}>
          <Grid item>
            <TextField
              name="birthdate"
              label="Fecha de nacimiento"
              fullWidth
              type="date"
              defaultValue={birthdate} // Asegúrate de formatear la fecha correctamente
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="gender-select-label">Género</InputLabel>
              <Select
                labelId="gender-select-label"
                name="gender"
                label="Género"
                defaultValue={gender}
              >
                {genders.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="neighborhood-select-label">Barrio</InputLabel>
              <Select
                labelId="neighborhood-select-label"
                name="neighborhood"
                label="Barrio"
                defaultValue={neighborhood}
              >
                {neighborhoods.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item textAlign={'right'}>
            <Button variant="contained" color="primary" type="submit">
              Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
