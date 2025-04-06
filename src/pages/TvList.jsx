import Search from "../components/Ui/Input/Search";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Btn from "../components/Ui/Btn";
import Section from "../components/Media/Section";

export default function TvList() {
  const { type } = useParams();

  function pageName(name) {
    switch (name) {
      case "airing_today":
        return "TV series airing today";
      case "on_the_air":
        return "TV series on the air";
      default:
        return `${name?.split("_").join(" ")} TV series`;
    }
  }

  const [page, setPage] = useState(undefined);
  const { data, loading, fetchData } = useFetch("", {}, true);

  useEffect(() => {
    if (page) {
      fetchData(
        `/${
          type === "trending" ? "trending/tv/day" : `tv/${type}`
        }?language=en-US&page=${page}`
      );
    }
  }, [page]);

  return (
    <div>
      <Search placeholder={"Search for TV series"} />
      <Btn />
      <div className="mt-5">
        <Section
          title={pageName(type)}
          isPaginated={true}
          data={data}
          loading={loading}
          type="tv"
          setPage={setPage}
        />
      </div>
    </div>
  );
}
