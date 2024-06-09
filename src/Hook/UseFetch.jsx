import React, { useEffect, useState } from 'react'


  const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (!url) return;

      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url, options]);

    return { data, loading, error };
  };

export default useFetch