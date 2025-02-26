import PropTypes from "prop-types";
import { Rating } from "primereact/rating";
import { FaImdb } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

export default function Details({ data }) {
  return (
    <div className="my-5 md:flex gap-x-10">
      <div className="grid place-items-center md:place-items-start md:basis-1/2 lg:basis-[40%] xl:basis-[25%]">
        <div className=" rounded-lg h-[250px] w-[180px] md:h-[500px] lg:h-[520px] md:w-full object-cover col-span-1">
          <img
            src={data.poster}
            alt=""
            className="rounded-lg h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:basis-1/2 lg:basis-[60%] xl:basis-[75%]">
        <div className="text-center md:text-left flex flex-col gap-2">
          <h1 className="text-white font-normal text-3xl md:text-5xl">
            {data.title}
          </h1>
          <p className="text-placeholder text-base md:text-xl font-normal">
            {data.subTitle}
          </p>
          <div className="md:flex gap-2 items-start mt-2">
            <p className="text-4xl md:text-5xl text-white font-medium">
              {data.rating}
            </p>
            <div className="flex justify-center mt-1.5 md:mt-2.5">
              <Rating
                value={data.rating.toPrecision(1)}
                readOnly
                cancel={false}
                className="text-white text-center"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 mt-5 max-w-[700px]">
          <div className="flex flex-col gap-1">
            <p className="text-placeholder font-medium text-sm md:text-lg">
              Length
            </p>
            <p className="text-white font-medium text-base md:text-lg">
              118 min.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-placeholder font-medium text-sm md:text-lg">
              Language
            </p>
            <p className="text-white font-medium text-base md:text-lg">
              English
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-placeholder font-medium text-sm md:text-lg">
              Year
            </p>
            <p className="text-white font-medium text-base md:text-lg">2022</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-placeholder font-medium text-sm md:text-lg">
              Status
            </p>
            <p className="text-white font-medium text-base md:text-lg">N/A</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-1.5">
            <p className="text-white font-semibold text-base md:text-lg">
              Genres
            </p>
            <div className="flex items-center flex-wrap gap-2 ">
              {data.genres.map((genre) => (
                <p
                  className="text-sm text-main-bg bg-white rounded-md font-semibold py-0.5 px-1.5"
                  key={genre}
                >
                  {genre}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-white font-semibold text-base md:text-lg">
              Synopsis
            </p>
            <p className="text-white text-sm lg:text-base font-normal">
              {data.synopsis}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-white font-semibold text-base md:text-lg">
              Casts
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {data.casts.map((cast) => (
                <p
                  className="text-sm text-white border border-white rounded-md font-semibold py-0.5 px-1.5"
                  key={cast}
                >
                  {cast}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-8 flex-wrap">
          <a
            href="https://youtube.com"
            target="_blank"
            className="px-4 py-2.5 w-40 bg-sidebar-text rounded-md text-white flex justify-center items-center gap-2 font-semibold"
          >
            <span>Watch Trailer</span>
            <FaYoutube />
          </a>
          <a
            href="https://netflix.com"
            target="_blank"
            className="px-4 py-2.5 w-40 bg-sidebar-text rounded-md text-white flex justify-center items-center gap-2 font-semibold"
          >
            <span>Website</span>
            <FiLink />
          </a>
          <a
            href="https://imdb.com"
            target="_blank"
            className="px-4 py-2.5 w-40 bg-sidebar-text rounded-md text-white flex justify-center items-center gap-2 font-semibold"
          >
            <span>IMDB</span> <FaImdb />
          </a>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    casts: PropTypes.array.isRequired
  }).isRequired
};
