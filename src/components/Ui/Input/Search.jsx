import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
// import { MultiSelect } from "primereact/multiselect";
// import { useState } from "react";

export default function Search({ placeholder }) {
  // const [selectedCities, setSelectedCities] = useState(null);
  // const cities = [
  //   { name: "New York", code: "NY" },
  //   { name: "Rome", code: "RM" },
  //   { name: "London", code: "LDN" },
  //   { name: "Istanbul", code: "IST" },
  //   { name: "Paris", code: "PRS" }
  // ];

  return (
    <>
      <div className="relative bg-transparent p-2 flex items-center gap-2 mb-4">
        <FiSearch className="text-white text-[25px] md:text-3xl" />
        <input
          type="text"
          className="bg-transparent text-white placeholder:text-placeholder placeholder:text-[15px] md:placeholder:text-2xl h-8 py-2 w-full outline-none caret-caret focus:border-b focus:border-b-main-text"
          placeholder={placeholder || "Search for movies or TV series"}
        />
      </div>
      {/* <MultiSelect
        value={selectedCities}
        onChange={(e) => setSelectedCities(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select Cities"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
      /> */}
    </>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string
};
