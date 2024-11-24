import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextAPI";
import fetchDataFromApi from "../utils/api";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import { formatPublishTime, formatViewCount } from "../utils/constants";
import { MdSort } from "react-icons/md";
import VideoComment from "./VideoComment";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
  const { categoryId, videoId } = useParams();
  /*   console.log(categoryId);
    console.log(videoId) */
  const { setLoading } = useContext(Context);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState();
  const [channelData, setChannelData] = useState();
  const [commentsData, setCommentsData] = useState();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fetchVideoDetails = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromApi("videos", {
        part: "snippet,contentDetails,statistics",
        id: videoId,
      });
      setSelectedVideoDetails(data.items[0]);
      /* console.log('Selected Video Detail', data.items[0]); */
      setLoading(false);
    } catch (error) {
      console.error(error, "Error in fetching the data");
    }
  };

  useEffect(() => {
    fetchVideoDetails();
    fetchComments();
  }, [videoId]);

  const fetchChannelData = async () => {
    if (selectedVideoDetails?.snippet?.channelId) {
      setLoading(true);
      try {
        const data = await fetchDataFromApi("channels", {
          part: "snippet,contentDetails,statistics",
          id: selectedVideoDetails?.snippet?.channelId,
        });
        setChannelData(data.items[0]);
        /*   console.log('Channel Detail', data.items[0]); */
        setLoading(false);
      } catch (error) {
        console.error(error, "Error in fetching data");
      }
    }
  };

  useEffect(() => {
    fetchChannelData();
  }, [selectedVideoDetails]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const description = selectedVideoDetails?.snippet?.description;
  /*   console.log(description) */
  const truncateDescription = description?.slice(0, 240);
  /* console.log(truncateDescription) */

  const fetchComments = async () => {
    if (videoId) {
      setLoading(true);
      try {
        const data = await fetchDataFromApi("commentThreads", {
          part: "snippet,replies",
          videoId: videoId,
          maxResults: 15,
        });
     /*    console.log("Comments Data", data.items); */
        setCommentsData(data.items);
        setLoading(false);
      } catch (error) {
        console.error(error, "Error in fetching details");
      }
    }
  };

  return (
    <div className="flex justify-center flex-row  bg-black">
      <div className=" w-full max-w-[1280px] h-[calc(100%-56px)] flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
              title="YouTube video player"
              className="rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            {selectedVideoDetails && (
              <div className="flex flex-col">
                <p className="text-white text-[17px] font-semibold mt-2">
                  {selectedVideoDetails?.snippet?.title}
                </p>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                  <div className="flex justify-between md:gap-5 items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-9 w-9 rounded-3xl object-cover"
                        src={channelData?.snippet?.thumbnails?.default?.url}
                        alt="channel"
                      />
                      <div className="flex flex-col ">
                        <p className="text-white text-[14px] font-semibold">
                          {channelData?.snippet?.title}
                        </p>
                        <p className="text-gray-400 text-[12px]">
                          {formatViewCount(
                            channelData?.statistics.subscriberCount
                          )}{" "}
                          Subscribers
                        </p>
                      </div>
                    </div>

                    <button className="flex items-center justify-center bg-white px-[15px] rounded-2xl py-[6px] font-bold text-[13px]">
                      Subscribe
                    </button>
                  </div>

                  <div className="flex mt-3 justify-between md:gap-2">
                    <div className="bg-white/[0.15] text-white flex items-center px-4 py-1 rounded-2xl ">
                      <BiLike className="text-xl cursor-pointer" />
                      &nbsp;
                      <span className="font-semibold text-[13.5px]">
                        {formatViewCount(
                          selectedVideoDetails?.statistics.likeCount
                        )}
                      </span>
                      &nbsp;|&nbsp;
                      <BiDislike className="text-xl cursor-pointer" />
                    </div>
                    <div className="bg-white/[0.15] text-white flex gap-2 items-center px-4 py-1 rounded-2xl cursor-pointer  ">
                      <PiShareFatThin />
                      <p className="font-semibold text-[14px]">Share</p>
                    </div>
                    <div className="bg-white/[0.15] text-white flex gap-2 items-center px-4 py-1 rounded-2xl cursor-pointer ">
                      <HiDownload />
                      <p className="font-semibold text-[14px]">Download</p>
                    </div>
                    <div className="bg-white/[0.15] text-white flex items-center px-2 py-2 rounded-2xl cursor-pointer ">
                      <HiDotsHorizontal />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className=" bg-white/[0.15] rounded-xl p-4 text-white/[0.85] text-[13px] mt-5 font-semibold">
            <p>
              {formatViewCount(selectedVideoDetails?.statistics?.viewCount)}{" "}
              Views &bull;&nbsp;
              {formatPublishTime(selectedVideoDetails?.snippet?.publishedAt)}
            </p>
            <p>
              {showFullDescription ? description : truncateDescription}
              {description?.length > 240 && (
                <button onClick={toggleDescription} className="text-gray-500">
                  &nbsp;{showFullDescription ? " show less" : `show more`}
                </button>
              )}
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
          <div className="sm:mt-5 text-white">
              <div className="flex gap-7 ">
                <p className="text-[17px] font-bold">
                  {formatViewCount(
                    selectedVideoDetails?.statistics?.commentCount
                  )}
                  &nbsp;Comments
                </p>
                <div className="flex gap-1">
                  <MdSort className="text-xl" />
                  <p>Sort by</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 mb-4">
                <div className="flex h-8 w-8 overflow-hidden rounded-full">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg"
                    alt="user"
                  />
                </div>
                <div className="w-full">
                  <p className="text-gray-400 pb-2">Add a comment...</p>
                  <hr />
                </div>
            </div>
            {commentsData?.map((comment, i) => (
                  <VideoComment key={i} comment={comment} />
                ))}
               <div className="">
               
              </div>
            </div>
            <div className="md:hidden">
            <div className="text-white lg:w-[30%] p-4">
        <h3 className="text-xl font-bold mb-4 ">
          <SuggestionVideoCard categoryId={categoryId} />
        </h3>
      </div>
            </div>
          </div>
         
        </div>
        <div className="hidden sm:block text-white lg:w-[40%] p-4">
        <h3 className="text-xl font-bold mb-4 ">
          <SuggestionVideoCard categoryId={categoryId} />
        </h3>
      </div>
      </div>
      
    </div>
  );
};

export default VideoDetails;
