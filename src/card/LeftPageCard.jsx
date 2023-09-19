/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LeftPageCard = ({ fetch }) => {
  return (
    <div className="left__page">
      <div className="left__page-content">
        <div className="my-2 d-flex flex-column">
          <Link
            className="left__page-link"
            to={`/video/${fetch.video.videoId}`}
          >
            <div className="left-img">
              <img
                className="left__page-thumbnail"
                src={`${fetch.video.thumbnails[0].url}`}
                alt="video thumbnail"
              />
            </div>
            <div className="let-title">
              <h5 className="left-page-title">{fetch.video.title}</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPageCard;
