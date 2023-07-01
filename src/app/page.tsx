'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/store';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from '../components/Row';

export default function Home() {
  const user = useSelector((state: ReduxState) => state.userReducer.user);
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
    <main className="bg-neutral-900">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={`/discover/tv?api_key=${process.env.api_key}&with_networks=213`}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={`/trending/all/week?api_key=${process.env.api_key}&language=en-US`}
      />
      <Row
        title="Top Rated"
        fetchUrl={`/movie/top_rated?api_key=${process.env.api_key}&language=en-US`}
      />
      <Row
        title="Action Movies"
        fetchUrl={`/discover/movie?api_key=${process.env.api_key}&with_genres=28`}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={`/discover/movie?api_key=${process.env.api_key}&with_genres=35`}
      />
      <Row
        title="Horror Movies"
        fetchUrl={`/discover/movie?api_key=${process.env.api_key}&with_genres=27`}
      />
      <Row
        title="Romance Movies"
        fetchUrl={`/discover/movie?api_key=${process.env.api_key}&with_genres=10749`}
      />
      <Row
        title="Documentaries"
        fetchUrl={`/discover/movie?api_key=${process.env.api_key}&with_genres=99`}
      />
    </main>
  );
}
