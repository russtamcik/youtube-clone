import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => {
        if (res.data.data.status === 404) {
          setData([]);
        } else {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;

