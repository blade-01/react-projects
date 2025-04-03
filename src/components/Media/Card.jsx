import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export default function Card({ data }) {
  const navigateTo = useNavigate();
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 10, // Adds 3D tilt
        rotateX: -5,
        // boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", // Soft shadow effect
        transition: { type: "spring", stiffness: 200, damping: 10 }
      }}
      className="relative cursor-pointer"
      onClick={() => {
        navigateTo(`/${data.type}/${data.id}`);
      }}
    >
      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-[#10141e80] hover:bg-white transition-all ease-linear duration-200 grid place-items-center group cursor-pointer">
        <IoBookmarkOutline className="text-white group-hover:text-black" />
      </div>
      <img
        src={data.poster}
        alt={data.title}
        className="h-[110px] md:h-[140px] xl:h-[174px] w-full object-cover rounded-lg mb-2"
      />
      <div className="p-0.5">
        <div className="flex gap-0.5 items-center text-xs text-gray-100 pb-0.5">
          <p>{new Date(data.year).getFullYear()}</p>
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
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};
