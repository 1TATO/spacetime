import { Copyright } from '@/components/Copyright';
import { Hero } from '@/components/Hero';
import { Profile } from '@/components/Profile';
import { SignIn } from '@/components/SignIn';
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjuree',
});

export const metadata = {
  title: 'SpaceTime',
  description:
    'Uma cápsula do tempo construída com React, Next.JS, Tailwind e Typescript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}
      >
        <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[288px] w-[526px] translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full" />

            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />

            <Copyright />
          </div>

          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
