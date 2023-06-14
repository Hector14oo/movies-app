import { Header } from '@components';
import { SessionProvider } from '@context/SessionContext';
import '@styles/globals.css';

import { Montserrat as Font } from 'next/font/google';

const inter = Font({ subsets: ['latin'], weight: ['300', '500', '700'] });

export const metadata = {
  title: 'This is the title',
  description: 'Make with 💜 by Hector14oo',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
