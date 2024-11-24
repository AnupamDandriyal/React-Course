/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatViewCount, formatDuration,formatPublishTime } from "../utils/constants";
import fetchDataFromApi from "../utils/api";
const VideoCard = ({ video }) => {
  const [channelData, setChannelData] = useState();

  const fetchChannelData = async () => {
    const data = await fetchDataFromApi("channels", {
      part: "snippet,contentDetails,statistics",
      id: video?.snippet?.channelId,
    });
    /* console.log(data.items[0]); */
    setChannelData(data.items[0]);
  };

  useEffect(() => {
    fetchChannelData();
  }, [video]);
  return (
    <Link to={`video/${video?.snippet?.categoryId}/${video?.id}`}>
      <div className="flex flex-col mb-8 justify-center">
        <div className=" h-48 relative md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover "
            src={video?.snippet?.thumbnails?.medium?.url}
            alt="video"
          />
          <span
            className="text-white/[0.85] text-[15px] absolute bg-black px-1.5 rounded bottom-3
           right-3"
          >
            {formatDuration(video?.contentDetails?.duration)}
          </span>
        </div>

        <div className="flex mt-3">
          <div className="flex items-start">
            <div className="flex h-7 w-7 rounded-full overflow-hidden mt-1 mr-2">
              <img
                src={channelData?.snippet?.thumbnails?.medium?.url}
                alt="channel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-white text-[16px] font-semibold line-clamp-2">
              {video?.snippet?.title}
            </p>
            <p className="text-gray-500 text-[13px] font-semibold">{video?.snippet?.channelTitle}</p>
            <p className="text-gray-500 font-semibold text-[13px]">
              {formatViewCount(video?.statistics?.viewCount)} Views &bull;&nbsp;
              {formatPublishTime(video?.snippet?.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
