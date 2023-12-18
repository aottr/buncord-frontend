import type { Metadata } from 'next'
import { getServerSession } from 'next-auth';
import { Providers } from "./providers";
import SessionProvider from "./lib/SessionProvider";
import './globals.css'

export const metadata: Metadata = {
  title: 'Buncord',
  description: 'Backend dashboard for Buncord',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <Providers>
          <SessionProvider session={session}>
            <main className='text-foreground bg-background'>
              {children}
            </main>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  )
}
