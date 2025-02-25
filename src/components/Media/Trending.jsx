import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { LuDot } from "react-icons/lu";

export default function Trending({ data }) {
  return (
    <div className="relative cursor-pointer">
      <div className="bookmark-icon group">
        <IoBookmarkOutline className="text-white group-hover:text-black" />
      </div>
      <div className="relative overflow-hidden rounded-md">
        <div className="home-media--card  transition duration-300 transform hover:scale-105">
          <img
            src="https://image.tmdb.org/t/p/original//xuLA0pii2IMJW2puT7EvJtgpg0H.jpg"
            alt="banner"
            className="w-full h-full rounded-md object-cover "
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-10">
        <div className="flex gap-0.5 items-center text-sm text-gray-100 pb-0.5">
          <p>{data.year}</p>
          <LuDot />
          <div className="flex items-start gap-1">
            {data.type === "movie" ? (
              <RiFilmFill size={18} />
            ) : (
              <TbDeviceTvOld size={18} />
            )}
            <p>{data.type === "movie" ? "Movie" : "TV Series"}</p>
          </div>
          <LuDot />
          <p>18+</p>
        </div>
        <p className="text-xl md:text-2xl font-medium text-white ">
          {data.title}
        </p>
      </div>
    </div>
  );
}

Trending.propTypes = {
  data: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};
