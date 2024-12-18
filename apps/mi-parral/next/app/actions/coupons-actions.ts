'use server';
import { revalidatePath } from 'next/cache';
import { auth } from '../../auth';
import { validateUser } from './auth-actions';
const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const couponsUrl = process.env.NEXT_PUBLIC_COUPONS_BACKEND_URL;

export async function couponsSelection(age: number) {
  const response = await fetch(`${couponsUrl}/coupons/couponsSelection`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ age }),
  });

  return response.json();
}

export async function deleteCoupon(id: string) {
  const response = await fetch(`${couponsUrl}/coupons/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Error deleting Coupon');
  }
  revalidatePath('/userApp/posts/campaigns');
}

export async function updateCouponStatus(id: string, status: number) {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(`${couponsUrl}/coupons/updateStatus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, status, userId: user.id }),
  });

  if (!response.ok) {
    throw new Error('Error updating Coupon status');
  }
  revalidatePath('/userApp/posts/campaigns');
}

export async function findAllCouponsByUserId() {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(
    `${couponsUrl}/coupons/findAllByUserId?userId=${user.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
}

// @Post('validateCoupon')
// async validateCoupon(@Body() dto: ValidateCouponDto) {
//   return await this.couponService.validateCoupon(dto);
// }

export async function validateCoupon(id: string) {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(`${couponsUrl}/coupons/validateCoupon`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, validationUserId: user.id }),
  });

  if (!response.ok) {
    throw new Error('Error validating Coupon');
  }
}

export async function revalidateMyCoupons() {
  revalidatePath('/userApp/posts/coupons');
}
