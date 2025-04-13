import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Section from "../components/Media/Section";
import useBookmark from "../hooks/useBookmark";
import { FiSearch } from "react-icons/fi";
import AuthModal from "../components/Auth/Modal";

export default function Bookmarks() {
  const [visible, setVisible] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);
  const { fetchBookmarks, bookmarks, loading } = useBookmark({}, true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchBookmarks(user.uid);
        setAuthUser(user);
      } else {
        setVisible(true);
      }
    });

    return () => unsubscribe(); // cleanup the listener
  }, []);

  function handleFiltering() {
    const filtered = bookmarks.filter((bookmark) => {
      const title = bookmark.title || bookmark.name || "";
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredBookmarks(filtered);
  }

  useEffect(() => {
    handleFiltering();
  }, [bookmarks]);

  return (
    <div>
      <AuthModal visible={visible} setVisible={setVisible} />

      <div className="relative bg-transparent py-2 flex items-center gap-2 mb-4 basis-[80%]">
        <FiSearch className="text-white text-[25px] md:text-3xl" />

        <input
          type="text"
          className="bg-transparent text-white placeholder:text-placeholder placeholder:text-[15px] md:placeholder:text-2xl h-8 py-2 w-full outline-none caret-caret focus:border-b focus:border-b-main-text"
          placeholder={"Search for bookmarked movies or TV series"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleFiltering();
            }
          }}
        />

        <button
          className="bg-sidebar-bg text-white py-2 w-24 flex justify-center gap-2.5 items-center rounded-md cursor-pointer"
          onClick={handleFiltering}
          aria-label="Filter bookmarks"
        >
          <span>Search</span>
        </button>
      </div>
      <Section
        title="Bookmarked Movies"
        data={{
          results: filteredBookmarks.filter((item) => item.type === "movie")
        }}
        loading={loading}
        type="movie"
        refreshPage={true}
        setRefresh={() => (authUser?.uid ? fetchBookmarks(authUser?.uid) : "")}
      />
      <Section
        title="Bookmarked TV shows"
        data={{
          results: filteredBookmarks.filter((item) => item.type === "tv")
        }}
        loading={loading}
        type="tv"
        refreshPage={true}
        setRefresh={() => (authUser?.uid ? fetchBookmarks(authUser?.uid) : "")}
      />
    </div>
  );
}
