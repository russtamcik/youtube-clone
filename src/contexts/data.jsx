import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import axios from "axios";

export const FetchContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/playlist/videos/",
    params: {
      id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr",
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": "78f9a9f4eemsh3297e076fc4cd8ep1ddf99jsna3f6fd0c2652",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (res) {
        setData(res.data.contents);
        console.log(res.data.contents);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <FetchContext.Provider value={{ data }}>{children}</FetchContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.object,
};
