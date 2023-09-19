/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FetchContext } from "../contexts/data";
import { SearchContexts } from "../contexts/search";
import LeftPageCard from "./LeftPageCard";
import HeaderBottom from "../components/header/HeaderBottom";

import "../css/videopage.css";

const Videopage = ({ fetch, id }) => {
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

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [subscribed, setSubscribed] = useState(0);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  const handleShareSubscribe = () => {
    if (subscribe == false) {
      setSubscribe(true);
      setSubscribed(subscribed - 1);
    } else {
      setSubscribe(false);
      setSubscribed(subscribed + 1);
    }
  };

  return (
    <>
      <HeaderBottom />
      <div className="video-page">
        <section className="one__page mt-5">
          <div className="one__page-content ">
            <iframe
              className="one-page-iframe mt-3"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <div className="one__page-details p-0 mt-2 d-flex flex-column">
              <h5 className="one__page-title">{fetch.video.title}</h5>
              <div className="one__page-info ms-3 d-flex gap-3">
                <div className="one__page-box d-flex">
                  <ul className="one__page-author-info d-flex align-items-center gap-md-4 justify-content-between">
                    <li>
                      {/* <img
                        className="one__page-thumbnail"
                        src={`${fetch.video.thumbnails[0].url}`}
                        alt=""
                      /> */}
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a
                            className="one__page-link"
                            href={`https://www.youtube.com/${fetch.video.author.canonicalBaseUrl}`}
                          >
                            {fetch.video.author.title}
                          </a>
                        </li>
                        <li>
                          <p className="one__page-text">
                            {subscribed} subscribes
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button
                        className="one-page-subscribe-button"
                        onClick={handleShareSubscribe}
                        style={{ backgroundColor: subscribe ? "" : "grey" }}
                      >
                        {subscribe ? "Subscribe" : "Subscribed"}
                      </button>
                    </li>
                  </ul>
                  <ul className="one__page-actions d-flex gap-3 align-items-center justify-content-between">
                    <sli>
                      <ul className="one__page-like-dislike d-flex align-items-center">
                        <li>
                          <button
                            className="one__page-like-button btn btn-link d-flex align-items-center me-2"
                            onClick={handleLikeClick}
                            style={{ backgroundColor: liked ? "red" : "grey", color: 'white' }}
                          >
                            <AiOutlineLike className="one__page-like-icon me-1" />{" "}
                            {likes}
                          </button>
                        </li>
                        <li>
                          <button
                            className="one__page-dislike-button ms-2 btn btn-link d-flex align-items-center"
                            onClick={handleDislikeClick}
                            style={{ backgroundColor: disliked ? "black" : "grey", color: 'white' }}
                          >
                            <AiOutlineDislike className="one__page-dislike-icon me-1" />{" "}
                            {dislikes}
                          </button>
                        </li>
                      </ul>
                    </sli>
                    <li>
                      <button className="one-page-share-button">Share</button>
                    </li>
                    <li>
                      <button className="one-page-download-button">
                        Downloaded
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="box-card">
            {searchResults.map((fetch, index) => (
              <LeftPageCard fetch={fetch} key={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Videopage;
