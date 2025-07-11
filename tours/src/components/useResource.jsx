import { useEffect, useState } from "react";

export default function useResource(uri) {
  const [data, setData] = useState(null); // holds fetched data
  const [loading, setLoading] = useState(true); // shows loading state
  const [error, setError] = useState(null); // holds any error
  const [refreshToggle, setRefreshToggle] = useState(false);
  const refresh = () => setRefreshToggle((prev) => !prev);

  useEffect(() => {
    if (!uri) return;

    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    fetch(uri, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // ignore abort errors
        setError(err);
        setLoading(false);
      });

    return () => controller.abort(); // cleanup on unmount or uri change
  }, [uri, refreshToggle]);

  return [data, loading, error, refresh];
}
