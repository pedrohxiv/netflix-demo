'use client';

import HomeScreen from '@/components/HomeScreen';

// import { ReduxDispatch, ReduxState } from '@/store';
// import { increment } from '@/store/features/counterSlice';
// import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  // const dispatch = useDispatch<ReduxDispatch>();
  // const count = useSelector((state: ReduxState) => state.counterReducer.value);

  return (
    <main className='bg-neutral-900'>
      <HomeScreen />
      {/* <button
        onClick={() => dispatch(increment())}
      >
        +
      </button> */}
    </main>
  );
}
