import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Section from "../components/Media/Section";
import useBookmark from "../hooks/useBookmark";

export default function Bookmarks() {
  const { fetchBookmarks, bookmarks, loading } = useBookmark({}, true);
  const auth = getAuth();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchBookmarks(user.uid);
        setAuthUser(user);
      }
    });

    return () => unsubscribe(); // cleanup the listener
  }, []);

  return (
    <div>
      <Section
        title="Bookmarked Movies"
        data={{
          results: bookmarks.filter((item) => item.type === "movie")
        }}
        loading={loading}
        type="movie"
        refreshPage={true}
        setRefresh={() => (authUser?.uid ? fetchBookmarks(authUser?.uid) : "")}
      />
      <Section
        title="Bookmarked TV shows"
        data={{
          results: bookmarks.filter((item) => item.type === "tv")
        }}
        loading={loading}
        type="tv"
        refreshPage={true}
        setRefresh={() => (authUser?.uid ? fetchBookmarks(authUser?.uid) : "")}
      />
    </div>
  );
}
