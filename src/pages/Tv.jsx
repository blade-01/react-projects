import Search from "../components/Ui/Input/Search";
import Section from "../components/Media/Section";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Tv() {
  const [genres, setGenre] = useState(undefined);
  const { data, loading, fetchData } = useFetch(
    `/discover/tv?language=en-US${genres ? `&with_genres=${genres}` : ""}`
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
        placeholder={"Search for TV series"}
        handleGenreSelection={handleGenre}
      />
      <Section
        title="TV Series"
        isPaginated={true}
        data={data}
        loading={loading}
        type="tv"
      />
    </div>
  );
}
