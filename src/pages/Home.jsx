import Search from "../components/Ui/Input/Search";
import useFetch from "../hooks/useFetch";
import Section from "../components/Media/Section";

export default function Home() {
  // Movie API Calls
  const { data: trendingMovies, loading: trendingLoading } = useFetch(
    "/trending/movie/day?language=en-US"
  );
  const { data: popularMovies, loading: popularLoading } = useFetch(
    "/movie/popular?language=en-US"
  );
  const { data: nowPlayingMovies, loading: nowPlayingLoading } = useFetch(
    "/movie/now_playing?language=en-US"
  );
  const { data: upcomingMovies, loading: upcomingLoading } = useFetch(
    "/movie/upcoming?language=en-US"
  );
  const { data: topRatedMovies, loading: topRatedLoading } = useFetch(
    "/movie/top_rated?language=en-US"
  );

  // TV Show API Calls
  const { data: trendingTv, loading: trendingTvLoading } = useFetch(
    "/trending/tv/day?language=en-US"
  );
  const { data: popularTv, loading: popularTvLoading } = useFetch(
    "/tv/popular?language=en-US"
  );
  const { data: airingTodayTv, loading: airingTodayTvLoading } = useFetch(
    "/tv/airing_today?language=en-US"
  );
  const { data: onAirTv, loading: onAirTvLoading } = useFetch(
    "/tv/on_the_air?language=en-US"
  );
  const { data: topRatedTv, loading: topRatedTvLoading } = useFetch(
    "/tv/top_rated?language=en-US"
  );

  return (
    <div>
      <Search />

      {/* Movies Section */}
      <Section
        title="Trending"
        data={trendingMovies}
        loading={trendingLoading}
        type="movie"
        link="/movie/trending/list"
        isTrending
      />
      <Section
        title="Popular"
        data={popularMovies}
        loading={popularLoading}
        type="movie"
        link="/movie/popular/list"
      />
      <Section
        title="Now Playing"
        data={nowPlayingMovies}
        loading={nowPlayingLoading}
        type="movie"
        link="/movie/now_playing/list"
      />
      <Section
        title="Upcoming"
        data={upcomingMovies}
        loading={upcomingLoading}
        type="movie"
        link="/movie/upcoming/list"
      />
      <Section
        title="Top Rated"
        data={topRatedMovies}
        loading={topRatedLoading}
        type="movie"
        link="/movie/top_rated/list"
      />

      {/* TV Shows Section */}
      <Section
        title="Trending TV"
        data={trendingTv}
        loading={trendingTvLoading}
        type="tv"
        isTrending
        link="/tv/trending/list"
      />
      <Section
        title="Popular TV"
        data={popularTv}
        loading={popularTvLoading}
        type="tv"
        link="/tv/popular/list"
      />
      <Section
        title="Airing Today"
        data={airingTodayTv}
        loading={airingTodayTvLoading}
        type="tv"
        link="/tv/airing_today/list"
      />
      <Section
        title="On Air"
        data={onAirTv}
        loading={onAirTvLoading}
        type="tv"
        link="/tv/on_the_air/list"
      />
      <Section
        title="Top Rated TV"
        data={topRatedTv}
        loading={topRatedTvLoading}
        type="tv"
        link="/tv/top_rated/list"
      />
    </div>
  );
}
