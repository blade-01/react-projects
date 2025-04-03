import PropTypes from "prop-types";
import { NavLink } from "react-router";
import Card from "./Card";
import Trending from "./Trending";

export default function Section({
  title,
  data,
  loading,
  type,
  isTrending = false,
  isPaginated = false,
  link
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1.5">
          <h2 className="text-white font-normal text-xl md:text-3xl capitalize">
            {title}
          </h2>
          {!isPaginated && (
            <p
              className={`text-xs uppercase text-white border border-white rounded-md font-semibold px-1.5 mt-1.5 ${
                type === "tv" ? "bg-white !text-main-bg " : "bg-transparent"
              }`}
            >
              {type}
            </p>
          )}
        </div>
        {link && (
          <NavLink to={link} className="uppercase font-semibold text-sm">
            See more
          </NavLink>
        )}
      </div>
      {loading ? (
        <p>Loading {title.toLowerCase()}...</p>
      ) : (
        <div
          className={`${
            isTrending
              ? "flex gap-5 md:gap-7 w-full overflow-auto no-scrollbar relative"
              : "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7"
          }`}
        >
          {data?.results
            ?.slice(0, isPaginated ? data.results.length : 8)
            .map((item) =>
              isTrending ? (
                <Trending
                  key={item.id}
                  data={{
                    id: item.id,
                    poster: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                    title: item.original_title || item.name,
                    year:
                      type === "movie"
                        ? item.release_date
                        : item.first_air_date,
                    type
                  }}
                />
              ) : (
                <Card
                  key={item.id}
                  data={{
                    id: item.id,
                    poster: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                    title: item.original_title || item.name,
                    year:
                      type === "movie"
                        ? item.release_date
                        : item.first_air_date,
                    type
                  }}
                />
              )
            )}
        </div>
      )}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["movie", "tv"]).isRequired,
  isTrending: PropTypes.bool,
  isPaginated: PropTypes.bool,
  link: PropTypes.string
};
