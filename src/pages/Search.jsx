import Search from "../components/Ui/Input/Search";
import { useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Card from "../components/Media/Card";
// import Section from "../components/Media/Section";
import { useEffect } from "react";

export default function SearchPage() {
  let [searchParams] = useSearchParams();
  const queryParams = searchParams.get("q");
  const sourceParams = searchParams.get("source");
  const { data, loading, fetchData } = useFetch(
    sourceParams
      ? `/search/${sourceParams}?query=${queryParams}`
      : `/search/multi?query=${queryParams}`,
    {},
    true
  );

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  return (
    <div>
      <Search
        placeholder={
          sourceParams
            ? `Search for ${sourceParams === "tv" ? "TV series" : "movies"}`
            : `Search for movies or TV series`
        }
      />

      <h2 className="text-white font-normal text-xl md:text-3xl capitalize mb-5">
        Found 196 results for &quot;{queryParams}&quot;
      </h2>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
          {data?.results
            ?.slice(0, data.results.length)
            .filter((item) => item.media_type !== "person")
            .map((item) => (
              <Card
                key={item.id}
                data={{
                  id: item.id,
                  poster:
                    item.backdrop_path || item.poster_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.poster_path
                        }`
                      : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                  title: item.original_title || item.name,
                  year: item.release_date || item.first_air_date,
                  type: item.media_type || sourceParams
                }}
              />
            ))}
        </div>
      )}

      {/* <Section
        title={`Found 196 results for "${queryParams}"`}
        isPaginated={true}
        data={{
          ...data,
          results: data?.results
            ?.filter((item) => item.media_type !== "person")
            .map((item) => {
              return {
                ...item,
                poster:
                  item.backdrop_path || item.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        item.backdrop_path || item.poster_path
                      }`
                    : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                title: item.original_title || item.name,
                year: item.release_date || item.first_air_date,
                type: item.media_type || sourceParams
              };
            })
        }}
        loading={loading}
        type={
          {
            
          }
        }
      /> */}
    </div>
  );
}
