import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fn = async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await cb(...args);
      setData(response);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error, fn, setData };
};

export default useFetch;
