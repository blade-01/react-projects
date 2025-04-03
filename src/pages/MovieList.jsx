import Search from "../components/Ui/Input/Search";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Btn from "../components/Ui/Btn";
import Section from "../components/Media/Section";

export default function MovieList() {
  const { type } = useParams();

  const { data, loading } = useFetch(
    `/${
      type === "trending" ? "trending/movie/day" : `movie/${type}`
    }?language=en-US`
  );

  return (
    <div>
      <Search placeholder={"Search for movies"} />
      <Btn />
      <div className="mt-5">
        <Section
          title={`${type?.split("_").join(" ")} Movies`}
          isPaginated={true}
          data={data}
          loading={loading}
          type="movie"
        />
      </div>
    </div>
  );
}
