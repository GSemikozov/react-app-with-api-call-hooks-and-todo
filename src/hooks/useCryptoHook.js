import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from '../constants';

export const useCryptoApi = () => {
  const [data, setData] = useState({});
  const initURL = `${API}data/pricemulti?fsyms=BTC&tsyms=EUR`;
  const [url, setUrl] = useState(initURL);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await axios(url);
        const data = await res.data;
        if (data.Response === "Error") {
          throw new Error(data.Message);
        }
        const result = Object.entries(data).map(([crypto, data]) => ({
          name: crypto,
          value: data.EUR
        }));
        setData(result);
      } catch (error) {
        setIsError(true);
        setData({});
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};
