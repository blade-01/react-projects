import Search from "../components/Ui/Input/Search";
import { useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Card from "../components/Media/Card";
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";
import Loader from "../components/Ui/Loader";
import useBookmark from "../hooks/useBookmark";
import AuthModal from "../components/Auth/Modal";
import { Toast } from "primereact/toast";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get("q");
  const sourceParams = searchParams.get("source");
  const { data, loading, fetchData } = useFetch("", {}, true);

  const [first, setFirst] = useState(0);

  const onPageChange = (event) => {
    setFirst(event.first);
    searchParams.set("page", event.page + 1);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      const pageNum = parseInt(searchParams.get("page"));
      setFirst((pageNum - 1) * 10);
      fetchData(
        sourceParams
          ? `/search/${sourceParams}?query=${queryParams}&page=${pageNum}`
          : `/search/multi?query=${queryParams}&page=${pageNum}`
      );
    }
  }, [searchParams]);

  const {
    handleBookmarking,
    isBookmarking,
    bookmarks,
    selectedItem,
    visible,
    setVisible,
    toast
    // refresh
  } = useBookmark(data, false);

  return (
    <div>
      <AuthModal visible={visible} setVisible={setVisible} />
      <Toast ref={toast} />
      <Search
        placeholder={
          sourceParams
            ? `Search for ${sourceParams === "tv" ? "TV series" : "movies"}`
            : `Search for movies or TV series`
        }
      />

      <h2 className="text-white font-normal text-xl md:text-3xl capitalize mb-5">
        Found {data?.total_results} results for &quot;{queryParams}&quot;
      </h2>
      {loading ? (
        <Loader height={"h-[50vh]"} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
          {data?.results
            .filter((item) => item.media_type !== "person")
            .map((item) => (
              <Card
                key={item.id}
                data={{
                  id: item.id,
                  poster:
                    item.backdrop_path || item.poster_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.poster_path
                        }`
                      : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                  title: item.original_title || item.name,
                  year: item.release_date || item.first_air_date,
                  type: item.media_type || sourceParams
                }}
                openModal={() =>
                  handleBookmarking({
                    ...item,
                    type: item.media_type || sourceParams
                  })
                }
                loading={isBookmarking && selectedItem === item.id}
                bookmarked={bookmarks.includes(String(item.id))}
              />
            ))}
        </div>
      )}

      <div className="flex justify-center my-5">
        <Paginator
          first={first}
          rows={10}
          totalRecords={data?.total_pages}
          onPageChange={onPageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          pt={{
            root: {
              className:
                "!bg-sidebar-bg !inline-flex !shadow-md !border-main-bg"
            }
          }}
        />
      </div>
    </div>
  );
}
