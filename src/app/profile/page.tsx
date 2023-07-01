'use client';

import Nav from '@/components/Nav';
import OrderButton from '@/components/OrderButton';
import { ReduxDispatch, ReduxState } from '@/store';
import { logout } from '@/store/features/userSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const user = useSelector((state: ReduxState) => state.userReducer.user);
  const dispatch = useDispatch<ReduxDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="bg-neutral-900 h-screen text-white">
      <Nav />
      <div className="flex flex-col w-1/2 mx-auto pt-12 max-w-3xl">
        <h1 className="text-6xl font-normal border-b-2 border-b-black mb-5">
          Edit Profile
        </h1>
        <div className="flex">
          <div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              height={100}
              width={100}
              alt="Netflix Avatar"
              className="cursor-pointer"
            />
          </div>
          <div className="text-white ml-6 flex-1">
            <h2 className="bg-gray-500 p-4 text-sm pl-5 font-semibold">{user}</h2>
            <div className="mt-5">
              <h3 className="border-b-2 border-b-black pb-2.5 text-lg font-semibold">
                Plans
              </h3>
              <div className="">
                <div className="flex justify-between p-5 opacity-80 hover:opacity-100">
                  <div className="flex flex-col">
                    <h5 className="text-base font-medium">Basic Plan</h5>
                    <h6 className="text-sm font-light">720p</h6>
                  </div>
                  <OrderButton priceId="price_1NOp7FD2sRIh7IKOvAB70J9P" />
                </div>
                <div className="flex justify-between p-5 opacity-80 hover:opacity-100">
                  <div className="flex flex-col">
                    <h5 className="text-base font-medium">Standard Plan</h5>
                    <h6 className="text-sm font-light">1080p</h6>
                  </div>
                  <OrderButton priceId="price_1NOp7uD2sRIh7IKOSpJa5lRp" />
                </div>
                <div className="flex justify-between p-5 opacity-80 hover:opacity-100">
                  <div className="flex flex-col">
                    <h5 className="text-base font-medium">Premium Plan</h5>
                    <h6 className="text-sm font-light">4K + HDR</h6>
                  </div>
                  <OrderButton priceId="price_1NOp8UD2sRIh7IKOD36fStdI" />
                </div>
              </div>
              <button
                className="py-2.5 px-5 text-base mt-2 w-full text-white bg-red-500 font-semibold"
                onClick={() => dispatch(logout())}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
