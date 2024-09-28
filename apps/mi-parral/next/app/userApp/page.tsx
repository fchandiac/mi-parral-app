import { SessionProvider } from 'next-auth/react';


export default function Page() {
  return (
    <SessionProvider>
      <div>page</div>
    </SessionProvider>
  );
}
