import { MouseEvent, useState } from 'react';
import { ReduxDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { login } from '@/store/features/userSlice';

export default function SignIn() {
  const [user, setUser] = useState('');
  const dispatch = useDispatch<ReduxDispatch>();

  const register = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    dispatch(login(user));
  };

  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(login(user));
  };

  return (
    <div className="max-w-md p-16 mx-auto bg-black/90">
      <form className="grid flex-col">
        <h1 className="text-4xl font-semibold mb-6 text-start text-white">Sign In</h1>
        <input
          className="outline-0 h-14 mb-3 rounded-md border-none py-1 px-4"
          type="email"
          placeholder="Email"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="outline-0 h-14 mb-3 rounded-md border-none py-1 px-4"
          type="password"
          placeholder="Password"
        />
        <button
          className="px-5 py-4 text-base text-white bg-red-600 border-none font-semibold rounded-md mt-5"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-base text-start mt-5 text-white">
          <span className="text-gray-300/50">New to Netflix? </span>
          <span
            className="font-bold hover:cursor-pointer"
            onClick={register}
          >
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
