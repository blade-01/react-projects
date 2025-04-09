import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";

export default (data?: any, isData: boolean = false) => {
  const auth = getAuth();
  const [isBookmarking, setIsBookmarking] = useState(false);
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const toast = useRef<any>(null);

  const handleBookmarking = async (item: any) => {
    if (!auth.currentUser) {
      setVisible(true);
      return;
    }
    setSelectedItem(item.id);
    setIsBookmarking(true);

    const bookmarkRef = doc(db, "bookmarks", String(item.id));
    if (bookmarks.includes(String(item.id))) {
      // Already bookmarked, so remove it
      await deleteDoc(bookmarkRef);
      setBookmarks((prev) => prev.filter((id) => id !== String(item.id)));
      setRefresh((v) => v + 1);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Removed from bookmark successfully 🎉"
      });
    } else {
      // Not bookmarked, so add it
      await setDoc(bookmarkRef, {
        ...item,
        userID: auth.currentUser.uid
      });
      setBookmarks((prev) => [...prev, String(item.id)]);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Bookmarked successfully 🎉"
      });
    }

    setIsBookmarking(false);
  };

  const fetchBookmarks = async (uid: string) => {
    setLoading(true);
    try {
      const q = query(collection(db, "bookmarks"), where("userID", "==", uid));
      const snapshot = await getDocs(q);
      const ids = snapshot.docs.map((doc) => doc.id);
      const data = snapshot.docs.map((doc) => doc.data());
      setBookmarks(isData ? data : ids);
    } catch (err) {
      console.error("Error fetching bookmarks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && data?.results?.length) {
        fetchBookmarks(user.uid);
      }
    });

    return () => unsubscribe(); // cleanup the listener
  }, [data]);

  return {
    handleBookmarking,
    fetchBookmarks,
    isBookmarking,
    setIsBookmarking,
    bookmarks,
    setBookmarks,
    selectedItem,
    setSelectedItem,
    visible,
    setVisible,
    loading,
    toast,
    refresh
  };
};
