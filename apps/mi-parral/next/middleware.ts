import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import {findRandomService} from '@/app/actions/services-actions'

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req, secret:process.env.NEXTAUTH_SECRET });

  // Protege las rutas que empiezan con `/userApp`
  if (req.nextUrl.pathname.startsWith('/userApp')) {
    if (!token) {
      // Redirige al usuario no autenticado a la página de inicio de sesión
      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
  }

  //Ramdom Service

  // if (req.nextUrl.pathname.startsWith('/userApp/services')) {
  //   const service = await findRandomService();

  //   return NextResponse.redirect(new URL(`/userApp/services?serviceId=${service.id}`, req.url));
  // }
    

  return NextResponse.next();
}

export const config = {
  matcher: ['/userApp/:path*'],
};
