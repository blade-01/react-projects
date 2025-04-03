import Search from "../components/Ui/Input/Search";
import Section from "../components/Media/Section";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Movie() {
  const [genres, setGenre] = useState(undefined);
  const { data, loading, fetchData } = useFetch(
    `/discover/movie?language=en-US${genres ? `&with_genres=${genres}` : ""}`
  );

  function handleGenre(genre) {
    setGenre(genre);
  }

  useEffect(() => {
    if (genres !== undefined) {
      fetchData();
    }
  }, [genres]);

  return (
    <div>
      <Search
        placeholder={"Search for movies"}
        handleGenreSelection={handleGenre}
      />
      <Section
        title="Movies"
        isPaginated={true}
        data={data}
        loading={loading}
        type="movie"
      />
    </div>
  );
}
