import Image from 'next/image';
import { useEffect, useState } from 'react';

async function getMovies(fetchUrl: string) {
  const response = await fetch(`https://api.themoviedb.org/3/${fetchUrl}`);
  return response.json();
}

export default function Row({ title, fetchUrl, isLargeRow = false }: any) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies(fetchUrl);
      setMovies(data.results);
      return data;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white ml-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide p-5">
        {movies.map((movie: any) => (
          <Image
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            width={160}
            height={160}
            className="object-contain mr-3 transform transition duration-500 ease-out hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}
