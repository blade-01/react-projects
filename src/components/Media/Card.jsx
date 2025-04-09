import PropTypes from "prop-types";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import { TbLoader } from "react-icons/tb";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Card({ data, openModal, loading, bookmarked }) {
  const navigateTo = useNavigate();
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          rotateX: -5,
          transition: { type: "spring", stiffness: 200, damping: 10 }
        }}
        className="relative cursor-pointer"
        onClick={() => {
          navigateTo(`/${data.type}/${data.id}`);
        }}
      >
        <div
          className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-[#10141e80] hover:bg-white transition-all ease-linear duration-200 grid place-items-center group cursor-pointer z-20"
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
        <LazyLoadImage
          src={data.poster}
          alt={data.title}
          effect="blur"
          placeholderSrc="https://miro.medium.com/v2/resize:fit:832/format:webp/1*wyI7Pb_WLjVry95xLx93eg.gif"
          className="h-[110px] md:h-[140px] xl:h-[174px] w-full object-cover rounded-lg mb-2"
          wrapperClassName="h-[110px] md:h-[140px] xl:h-[174px] w-full mb-2 rounded-lg overflow-hidden"
        />
        <div className="p-0.5">
          <div className="flex gap-0.5 items-center text-xs text-gray-100 pb-0.5">
            <p>{data.year ? new Date(data.year).getFullYear() : "N/A"}</p>
            <LuDot />
            <div className="flex gap-1">
              {data.type === "movie" ? (
                <RiFilmFill size={15} />
              ) : (
                <TbDeviceTvOld size={15} />
              )}
              <p>{data.type === "movie" ? "Movie" : "TV Series"}</p>
            </div>
          </div>
          <p className="text-lg font-medium text-white">{data.title}</p>
        </div>
      </motion.div>
    </>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  openModal: PropTypes.func,
  loading: PropTypes.bool,
  bookmarked: PropTypes.bool
};
