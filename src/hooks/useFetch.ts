import { useEffect, useRef, useState } from "react";

function useFetch(url: string, options?: any, noFetch: boolean = false) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const fetchedRef = useRef(false);
  const BASE_URL = (import.meta as any).env.VITE_BASE_URL;
  const API_KEY = (import.meta as any).env.VITE_API_KEY;
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${url}`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`
        }
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (fetchedRef.current) return; // ✅ If already fetched, stop execution
    fetchedRef.current = true; // ✅ Mark as fetched
    if (noFetch) return; // ✅ If noFetch is true, stop execution
    fetchData(); // ✅ Fetch data
  }, []);

  return {
    error,
    loading,
    data,
    fetchData
  };
}

export default useFetch;
