import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';


export async function middleware(req: NextRequest) {
  // @ts-ignore
  const token = await getToken({
    req, secret:process.env.NEXTAUTH_SECRET || 'default_secret',
  });

  // Protege las rutas que empiezan con `/userApp`
  if (req.nextUrl.pathname.startsWith('/userApp')) {

    return NextResponse.redirect(new URL('/information', req.url));

    // if (!token) {
    //   // Redirige al usuario no autenticado a la página de inicio de sesión
    //   return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/userApp/:path*'],
};
