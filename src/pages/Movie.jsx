import Search from "../components/Ui/Input/Search";
import Section from "../components/Media/Section";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Movie() {
  const [genres, setGenre] = useState(undefined);
  const [page, setPage] = useState(undefined);
  const { data, loading, fetchData } = useFetch("", {}, true);

  useEffect(() => {
    if (page || genres) {
      fetchData(
        `/discover/movie?language=en-US${
          genres ? `&with_genres=${genres}` : ""
        }&page=${page}`
      );
    }
  }, [page, genres]);

  return (
    <div>
      <Search
        placeholder={"Search for movies"}
        handleGenreSelection={setGenre}
      />
      <Section
        title="Movies"
        isPaginated={true}
        data={data}
        loading={loading}
        type="movie"
        setPage={setPage}
      />
    </div>
  );
}
