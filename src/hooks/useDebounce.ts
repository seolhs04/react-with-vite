import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [data, setData] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return data;
};

export default useDebounce;
