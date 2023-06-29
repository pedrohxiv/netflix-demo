import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';

export default function HomeScreen() {
  return (
    <div>
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
    </div>
  );
}
