import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await fetch(url);
        const resultJson = await result.json();
        setData(resultJson);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [url]);
  return { data, error, loading };
}
