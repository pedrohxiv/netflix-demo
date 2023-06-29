import { useEffect, useState } from 'react';

async function getMoviesNetflixOriginals() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.api_key}&with_networks=213`,
  );
  return response.json();
}

export default function Banner() {
  const [movie, setMovie] = useState<{
    backdrop_path: string;
    title: string;
    name: string;
    original_name: string;
    overview: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMoviesNetflixOriginals();
      setMovie(movies.results[Math.floor(Math.random() * movies.results.length)]);
    };
    fetchData();
  }, []);

  const truncate = (string: string, n: number) =>
    string?.length > n ? string.substring(0, n - 1) + '...' : string;

  return (
    <header
      className="relative h-[448px] text-white object-contain"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${
          movie ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : ''
        })`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="ml-8 pt-36 h-48">
        <h1 className="text-5xl font-extrabold pb-1">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button className="text-white font-bold px-8 py-2 mr-4 bg-neutral-700 bg-opacity-50 hover:text-black hover:bg-neutral-100 transition duration-200">
            Play
          </button>
          <button className="text-white font-bold px-8 py-2 mr-4 bg-neutral-700 bg-opacity-50 hover:text-black hover:bg-neutral-100 transition duration-200">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] text-base pt-4 max-w-sm h-20">
          {truncate(movie?.overview ?? '', 150)}
        </h1>
      </div>
      <div className="h-64 bg-gradient-to-t from-neutral-900" />
    </header>
  );
}
