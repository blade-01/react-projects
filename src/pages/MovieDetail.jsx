import { useParams } from "react-router";
import Btn from "../components/Ui/Btn";
import Details from "../components/Media/Details";
import Search from "../components/Ui/Input/Search";
import useFetch from "../hooks/useFetch";

export default function MovieDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `/movie/${id}?append_to_response=casts,videos&language=en-US`
  );

  // Display loading state or error
  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>Something went wrong! {error.message}</p>;

  return (
    <div>
      <Search placeholder={"Search for movies"} />
      <Btn />

      {/* Only render Details if data is available */}
      {data && (
        <Details
          data={{
            id: data.id,
            poster: data.poster_path
              ? `https://image.tmdb.org/t/p/original/${data.poster_path || ""}`
              : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            title: data.original_title || "N/A",
            subTitle: data.tagline,
            synopsis: data.overview || "No synopsis available",
            rating: data.vote_average || 0,
            year: new Date(data.release_date).getFullYear() || "N/A",
            genres: data.genres || [],
            length: data.runtime || "N/A",
            language: data.spoken_languages?.[0]?.name || "N/A",
            status: data.status || "N/A",
            casts: data.casts?.cast || [],
            link: {
              website: data.homepage,
              imdb: data.imdb_id,
              youtube: data.videos?.results[0]?.key
            }
          }}
        />
      )}
    </div>
  );
}
