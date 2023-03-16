import './globals.css';
import {Outfit} from 'next/font/google';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'QR Code Component',
  description: 'QR Code Component inspired by Frontend Mentor',
  icons: [{url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', rel: 'apple-touch-icon'}, {url: 'favicon-32x32.png', sizes: '32x32', type: 'image/png', rel: 'icon'}, {url: 'favicon-16x16.png', sizes: '16x16', type: 'image/png', rel: 'icon'}, {url: '/safari-pinned-tab.svg'}],
  manifest: '/site.webmanifest'
};

const outfit = Outfit({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-outfit'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className='flex h-screen w-full items-center justify-center bg-qrLightGray'>
        <main className={outfit.className}>{children}</main>
      </body>
    </html>
  );
}
