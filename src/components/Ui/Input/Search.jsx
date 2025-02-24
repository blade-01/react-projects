import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

export default function Search({ placeholder }) {
  return (
    <div className="relative bg-transparent p-2 flex items-center gap-2">
      <FiSearch className="text-white text-[25px] md:text-3xl" />
      <input
        type="text"
        className="bg-transparent text-white placeholder:text-placeholder placeholder:text-[15px] md:placeholder:text-2xl h-8 py-2 w-full outline-none caret-caret focus:border-b focus:border-b-main-text"
        placeholder={placeholder || "Search for movies or TV series"}
      />
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string
};
