import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../contexts/data";
import { SearchContexts } from "../contexts/search";

import CardPage from "./CardPage";

import "../css/card.css";

const Card = () => {
  const { data } = useContext(FetchContext);
  const { searchContext } = useContext(SearchContexts);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter((item) => {
      if (searchContext === true) {
        return item;
      } else if (
        typeof searchContext === "string" &&
        item.video.title.toLowerCase().includes(searchContext.toLowerCase())
      ) {
        return item;
      }
    });
    setSearchResults(results);
  }, [data, searchContext]);

  return (
    <section className="cards">
      <div className="cards-item ">
        {searchResults.map((fetch, index) => (
          <CardPage fetch={fetch} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Card;
