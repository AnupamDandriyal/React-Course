/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextAPI";
import { Link, useParams } from "react-router-dom";
import fetchDataFromApi from "../utils/api";
import LeftNav from "./LeftNav";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { formatPublishTime, formatViewCount } from "../utils/constants";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState();
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();
  const fetchSearchVideos = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromApi("search", {
        part: "snippet",
        regionCode: "IN",
        q: searchQuery,
        type: "video",
        maxResults: 10,
      });
      /*  console.log(data.items) */
      const videoIds = data.items.map((item) => item.id.videoId).join(",");
      /*  console.log(videoIds) */
      const videoDetailsResponse = await fetchDataFromApi("videos", {
        part: "snippet,contentDetails,statistics",
        id: videoIds,
      });
      console.log("Searched Video Details", videoDetailsResponse.items);
      setSearchResult(videoDetailsResponse.items);
     /*  console.log(searchResult); */
    } catch (error) {
      console.error(error, "Error in fetching the data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchVideos();
  }, [searchQuery]);
  return (
    <div className="flex w-full h-full bg-black ">
      <div className="flex-shrink-0 overflow-y-auto">
        <LeftNav />
      </div>
      <div className="searchResults flex-grow overflow-y-auto p-2">
        <div className=" mt-5">
          {searchResult?.map((item, i) => (
            <Link
              key={i}
              to={`/video/${item?.snippet?.categoryId}/${item?.id}`}
            >
              <div className=" mb-2 p-3">
                <div className="flex flex-col md:flex-row">
                <img
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt={item?.snippet?.title}
                  className="object-cover rounded-md"
                  />
                  
                  <div className="md:ml-4 mt-2 sm:mt-0 md:w-2/3 flex justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className=" text-white text-[17px] font-semibold">{item?.snippet?.title}</h3>
                      <div className="text-sm text-gray-400">{item?.snippet?.channelTitle}</div>
                      <div className="text-[13px] text-gray-400">{formatViewCount(item?.statistics?.viewCount)}&nbsp; Views &bull;&nbsp;{formatPublishTime(item?.snippet?.publishedAt)}</div>
                      <p className="hidden sm:block text-sm text-gray-400">
                        {item?.snippet?.description.slice(0,250)}
                      </p>
                    </div>
                    <HiOutlineDotsVertical className="text-white text-2xl font-bold" />
                </div>
                </div>
               
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
