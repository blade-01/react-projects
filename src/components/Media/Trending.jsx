import PropTypes from "prop-types";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Trending({ data, openModal, loading, bookmarked }) {
  const navigateTo = useNavigate();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => {
        navigateTo(`/${data.type}/${data.id}`);
      }}
    >
      <div
        className="bookmark-icon group"
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
      >
        {loading ? (
          <TbLoader className="animate-spin" />
        ) : bookmarked ? (
          <IoBookmark className="text-white group-hover:text-black" />
        ) : (
          <IoBookmarkOutline className="text-white group-hover:text-black" />
        )}
      </div>
      <div className="relative overflow-hidden rounded-md">
        <div className="home-media--card transition duration-300 transform hover:scale-105">
          <LazyLoadImage
            src={data.poster}
            alt={data.title}
            effect="blur"
            placeholderSrc="https://miro.medium.com/v2/resize:fit:832/format:webp/1*wyI7Pb_WLjVry95xLx93eg.gif"
            className="w-full h-full rounded-md object-cover"
            wrapperClassName="min-w-[260px] sm:min-w-[480px] lg:min-w-[600px] xl:min-w-[440px] 1xl:!min-w-[500px] h-[120px] md:h-[180px] xl:h-[224px] rounded-md overflow-hidden"
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-10">
        <div className="flex gap-0.5 items-center text-sm text-gray-100 pb-0.5">
          <p>{new Date(data.year).getFullYear()}</p>
          <LuDot />
          <div className="flex items-start gap-1">
            {data.type === "movie" ? (
              <RiFilmFill size={18} />
            ) : (
              <TbDeviceTvOld size={18} />
            )}
            <p>{data.type === "movie" ? "Movie" : "TV Series"}</p>
          </div>
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
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  openModal: PropTypes.func,
  loading: PropTypes.bool,
  bookmarked: PropTypes.bool
};
