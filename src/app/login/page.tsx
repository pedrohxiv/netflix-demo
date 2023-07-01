'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/store';
import Image from 'next/image';
import SignIn from '@/components/SignIn';

export default function Page() {
  const user = useSelector((state: ReduxState) => state.userReducer.user);
  const [signIn, setSignIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router]);

  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: 'cover',
        backgroundImage:
          'url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")',
        backgroundPosition: 'center center',
      }}
    >
      <div className="flex justify-between items-center">
        <Image
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
          height={0}
          width={0}
          alt="Netflix Logo"
          priority
          className="fixed z-20 left-5 top-5 w-36 object-contain cursor-pointer"
        />
        <button
          className="fixed z-20 right-5 top-5 py-2 px-4 text-base font-semibold text-white bg-red-600"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="w-full z-10 h-screen bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
      </div>
      <div className="absolute top-1/4 w-full mx-auto text-center z-10 p-20">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1 className="text-5xl font-semibold mb-5 text-white">
              Unlimited films, TV programmes and more.
            </h1>
            <h2 className="text-3xl font-normal mb-7 text-white">
              Watch anywhere. Cancel at any time.
            </h2>
            <h3 className="text-xl font-normal text-white">
              Ready to watch? Enter your email to create or restart your merbership.
            </h3>
            <div className="m-5">
              <form>
                <input
                  className="p-2.5 outline-0 h-14 w-1/3 max-w-xl border-none"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  className="px-5 py-4 text-base text-white bg-red-600 border-none font-semibold"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
