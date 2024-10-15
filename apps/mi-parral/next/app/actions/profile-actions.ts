'use server';
const authUrl = process.env.NEXT_PUBLIC_AUTH_BACKEND_URL;

import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';

export interface UpdateProfileType {
  id: string;
  birthdate: string;
  gender: number;
  neighborhood: number;
}


export const findProfileByUser = async () => {
    const session = await auth();
    const user = await validateUser(session?.user?.email);
  const response = await fetch(`${authUrl}/profile?userId=${user.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};


export const isProfileComplete = async (profileId: string) => {
  const response = await fetch(`${authUrl}/profile/isComplete?profileId=${profileId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};


  // @Post('/profile/update')
  // async updateProfile(@Body() dto: UpdateProfileDto): Promise<ProfileEntity> {
  //   return this.authService.updateProfile(dto);
  // }

  export const updateProfile = async (profile: UpdateProfileType ) => {
    const response = await fetch(`${authUrl}/profile/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: profile.id,
        birthdate: profile.birthdate,
        gender: profile.gender,
        neighborhood: profile.neighborhood,
      }),
    });

    revalidatePath('/userApp/profile');
  }
