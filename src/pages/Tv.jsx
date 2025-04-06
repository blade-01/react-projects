import Search from "../components/Ui/Input/Search";
import Section from "../components/Media/Section";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Tv() {
  const [genres, setGenre] = useState(undefined);
  const [page, setPage] = useState(undefined);
  const { data, loading, fetchData } = useFetch("", {}, true);

  useEffect(() => {
    if (page || genres) {
      fetchData(
        `/discover/tv?language=en-US${
          genres ? `&with_genres=${genres}` : ""
        }&page=${page}`
      );
    }
  }, [page, genres]);

  return (
    <div>
      <Search
        placeholder={"Search for TV series"}
        handleGenreSelection={setGenre}
      />
      <Section
        title="TV Series"
        isPaginated={true}
        data={data}
        loading={loading}
        type="tv"
        setPage={setPage}
      />
    </div>
  );
}
