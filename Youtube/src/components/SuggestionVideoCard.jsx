/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import {  Context } from "../context/contextAPI"
import fetchDataFromApi from "../utils/api";
import { Link } from "react-router-dom";
import { formatDuration, formatPublishTime, formatViewCount } from "../utils/constants";


const SuggestionVideoCard = ({categoryId}) => {
  const [relatedVideos, setRelatedVideos] = useState()
  const { setLoading } = useContext(Context);
  const fetchRelatedVideos = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromApi('videos', {
        part: 'snippet,contentDetails,statistics',
        regionCode: 'IN',
        chart: 'mostPopular',
        videoCategoryId: categoryId,
        maxResults: 10
      });
      /* console.log(data.items); */
      setRelatedVideos(data.items)
      setLoading(false)
      
    } catch (error) {
      console.error(error, 'Error in fethcing data');
    }
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, [categoryId])
  
 /*  console.log('Related Videos Data',relatedVideos) */
  return (
    <div>
      {relatedVideos?.map((video) => (
        <Link key={video?.id} to={`/video/${video?.snippet?.categoryId}/${video?.id}`}>
        <div className="flex gap-3 flex-col mb-8 justify-center xl:flex-row hover:bg-white/[0.15] p-1 rounded-md">
          <div className=" h-[200px] lg:h-[140px] w-[400px] min-w-[230px] lg:w-60 relative md:h-40 md:rounded-xl overflow-hidden ">
            <img
              className="h-full w-full object-cover "
              src={video?.snippet?.thumbnails?.medium?.url}
              alt="video"
            />
                <span
            className="text-white/[0.85] text-[13px] absolute bg-black flex items-center justify-center rounded bottom-3
           right-3 h-5 w-10 font-semibold"
          >
            {formatDuration(video?.contentDetails?.duration)}
          </span>
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
      </Link>
      ))}
    </div>
  )
}

export default SuggestionVideoCard