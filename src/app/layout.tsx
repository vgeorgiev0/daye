import type { Metadata, Viewport } from 'next';
import { Domine, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import RecoilProvider from '@/providers/RecoilProvider';

const domine = Domine({ subsets: ['latin'], variable: '--domine' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--poppins',
});

export const metadata: Metadata = {
  title: 'VG Technical Task',
  description: 'A technical task for Daye',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-poppins antialiased',
          domine.variable,
          poppins.variable
        )}
      >
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
