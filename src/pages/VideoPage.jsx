import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchContext } from "../contexts/data";
import Videopage from "../card/Videopage";

const VideoPage = () => {
  const { id } = useParams();
  const { data } = useContext(FetchContext);

  const filteredData = data.filter((item) => item.video.videoId === id);

  console.log(filteredData);

  return (
    <section>
      {filteredData.map((fetch, index) => (
        <Videopage fetch={fetch} id={id} key={index} />
      ))}
    </section>
  );
};

export default VideoPage;
