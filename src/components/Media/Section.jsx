import PropTypes from "prop-types";
import { NavLink, useSearchParams } from "react-router";
import Card from "./Card";
import Trending from "./Trending";
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";
import AuthModal from "../Auth/Modal";
import useBookmark from "../../hooks/useBookmark";
import { Toast } from "primereact/toast";
import Loader from "../Ui/Loader";

export default function Section({
  title,
  data,
  loading,
  type,
  isTrending = false,
  isPaginated = false,
  link,
  setPage,
  setRefresh,
  refreshPage
}) {
  const [searchParams, setSearchParams] = useSearchParams();
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
      setPage(pageNum);
    }
  }, [searchParams]);

  const {
    handleBookmarking,
    isBookmarking,
    bookmarks,
    selectedItem,
    visible,
    setVisible,
    toast,
    refresh
  } = useBookmark(data, false);

  useEffect(() => {
    if (refreshPage) {
      setRefresh();
    }
  }, [refresh]);

  return (
    <>
      <AuthModal visible={visible} setVisible={setVisible} />
      <Toast ref={toast} />
      <div className="mb-10">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-1.5">
            <h2 className="text-white font-normal text-xl md:text-3xl capitalize">
              {title}
            </h2>
            {!isPaginated && (
              <p
                className={`text-xs uppercase text-white border border-white rounded-md font-semibold px-1.5 mt-1.5 ${
                  type === "tv" ? "bg-white !text-main-bg " : "bg-transparent"
                }`}
              >
                {type}
              </p>
            )}
          </div>
          {link && (
            <NavLink to={link} className="uppercase font-semibold text-sm">
              See more
            </NavLink>
          )}
        </div>
        {loading ? (
          <Loader />
        ) : !loading && data?.results?.length === 0 ? (
          <div className="text-center text-white py-10">
            <p className="text-lg md:text-xl font-light">
              No {type === "movie" ? "movies" : "TV shows"} found.
            </p>
          </div>
        ) : (
          <div
            className={`${
              isTrending
                ? "flex gap-5 md:gap-7 w-full overflow-auto no-scrollbar relative"
                : "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7"
            }`}
          >
            {data?.results
              ?.slice(0, isPaginated ? data.results.length : 8)
              .map((item) =>
                isTrending ? (
                  <Trending
                    key={item.id}
                    data={{
                      id: item.id,
                      poster: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                      title: item.original_title || item.name,
                      year:
                        type === "movie"
                          ? item.release_date
                          : item.first_air_date,
                      type
                    }}
                    openModal={() => handleBookmarking({ ...item, type })}
                    loading={isBookmarking && selectedItem === item.id}
                    bookmarked={bookmarks.includes(String(item.id))}
                  />
                ) : (
                  <Card
                    key={item.id}
                    data={{
                      id: item.id,
                      poster: item.backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${
                            item.backdrop_path || ""
                          }`
                        : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                      title: item.original_title || item.name,
                      year:
                        type === "movie"
                          ? item.release_date
                          : item.first_air_date,
                      type
                    }}
                    openModal={() => handleBookmarking({ ...item, type })}
                    loading={isBookmarking && selectedItem === item.id}
                    bookmarked={bookmarks.includes(String(item.id))}
                  />
                )
              )}
          </div>
        )}
      </div>
      {isPaginated && !loading && (
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
      )}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["movie", "tv"]).isRequired,
  isTrending: PropTypes.bool,
  isPaginated: PropTypes.bool,
  link: PropTypes.string,
  setPage: PropTypes.func,
  setRefresh: PropTypes.func,
  refreshPage: PropTypes.bool,
  height: PropTypes.string
};
