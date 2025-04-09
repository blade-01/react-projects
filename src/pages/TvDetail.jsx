import { useParams } from "react-router";
import Btn from "../components/Ui/Btn";
import Details from "../components/Media/Details";
import Search from "../components/Ui/Input/Search";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Ui/Loader";

export default function TvDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `/tv/${id}?append_to_response=videos&language=en-US`
  );

  const { data: casts } = useFetch(`/tv/${id}/credits?language=en-US`);

  // Display loading state or error
  if (loading) return <Loader height={"h-[80vh]"} />;
  if (error) return <p>Something went wrong! {error.message}</p>;

  return (
    <div>
      <Search placeholder={"Search for TV series"} />
      <Btn />

      {/* Only render Details if data is available */}
      {data && (
        <Details
          data={{
            id: data.id,
            poster: data.poster_path
              ? `https://image.tmdb.org/t/p/original/${data.poster_path || ""}`
              : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            title: data.name || "N/A",
            subTitle: data.tagline || data.original_name,
            synopsis: data.overview || "No synopsis available",
            rating: data.vote_average || 0,
            year: `${new Date(data.first_air_date).getFullYear()} - ${new Date(
              data.last_air_date
            ).getFullYear()}`,
            genres: data.genres || [],
            length: data.runtime || "N/A",
            language: data.spoken_languages?.[0]?.name || "N/A",
            status: data.status || "N/A",
            casts: casts?.cast || [],
            type: "tv",
            number_of_seasons: data.number_of_seasons,
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
