import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { GrPowerReset } from "react-icons/gr";

export default function Search({ placeholder, handleGenreSelection }) {
  const navigateTo = useNavigate();
  const { data } = useFetch(
    `/genre/${window.location.pathname.slice(1)}/list`,
    {},
    window.location.pathname.slice(1) === "tv" ||
      window.location.pathname.slice(1) === "movie"
      ? false
      : true
  );
  const [selectedGenre, setSelectedGenre] = useState();
  const [genres, setGenres] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data) {
      const genres =
        data?.genres &&
        data.genres.map((genre) => ({
          name: genre.name,
          id: genre.id
        }));
      setGenres(genres);
    }
  }, [data]);

  const handleSearch = () => {
    if (search.trim() === "") {
      return;
    }
    navigateTo(
      `/search?q=${search}${
        window.location.pathname.slice(1) !== "" &&
        window.location.pathname.slice(1) !== "search"
          ? `&source=${window.location.pathname.slice(1)}`
          : ""
      }`
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigateTo(
        `/search?q=${e.target.value}${
          window.location.pathname.slice(1) !== "" &&
          window.location.pathname.slice(1) !== "search"
            ? `&source=${window.location.pathname.slice(1)}`
            : ""
        }`
      );
    }
  };

  return (
    <div>
      <div className="relative bg-transparent p-2 flex items-center gap-2 mb-4 basis-[80%]">
        <FiSearch className="text-white text-[25px] md:text-3xl" />

        <input
          type="text"
          className="bg-transparent text-white placeholder:text-placeholder placeholder:text-[15px] md:placeholder:text-2xl h-8 py-2 w-full outline-none caret-caret focus:border-b focus:border-b-main-text"
          placeholder={placeholder || "Search for movies or TV series"}
          value={search}
          onInput={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />

        <button
          className="bg-sidebar-bg text-white py-2 w-24 flex justify-center gap-2.5 items-center rounded-md cursor-pointer"
          onClick={handleSearch}
        >
          <span>Search</span>
        </button>
      </div>

      {(window.location.pathname.slice(1) === "tv" ||
        window.location.pathname.slice(1) === "movie") && (
        <div className="flex items-center justify-end gap-2 mb-5">
          <MultiSelect
            value={selectedGenre}
            onChange={(e) => {
              setSelectedGenre(e.value);
              handleGenreSelection(e.value.join(","));
            }}
            options={genres}
            optionLabel="name"
            optionValue="id"
            placeholder="Select Genre"
            maxSelectedLabels={3}
            className="w-full md:w-[180px] h-10 grid place-items-center"
          />

          {selectedGenre?.length ? (
            <button
              className="grid place-items-center w-10 h-10 bg-sidebar-bg rounded-md text-white shadow-md cursor-pointer clear-icon"
              onClick={() => {
                setSelectedGenre([]);
                handleGenreSelection("");
              }}
            >
              <GrPowerReset size="20px" />
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
  handleGenreSelection: PropTypes.func
};
