/* eslint-disable react-hooks/exhaustive-deps */
/* import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";

import SuggestionVideoCard from "./SuggestionVideoCard";
import { Context } from "../context/contextAPI";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState();
    const { id } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [id]);

    const fetchVideoDetails = () => {
        setLoading(true);
        fetchDataFromApi(`video/details/?id=${id}`).then((contents) => {
            console.log(contents);
            setVideo(contents);
            setLoading(false);
        });
    };

    const fetchRelatedVideos = () => {
        setLoading(true);
        fetchDataFromApi(`video/related-contents/?id=${id}`).then(({contents}) => {
            console.log(contents);
            setRelatedVideos(contents);
            setLoading(false);
        });
    };

    return (
        <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
                    </div>
                    <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {video?.title}
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                  <div className="flex overflow-hidden">
                    {video?.author?.avatar[0]?.url ? <img
                                        className="h-full w-full object-cover"
                                        src={video?.author?.avatar[0]?.url}
                    /> :
                      <p className="text-white border rounded-3xl h-8 w-8 flex items-center justify-center">C</p>
                                  }
                                    
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type ===
                                        "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                    )}
                                </div>
                                <div className="text-white/[0.7] text-sm">
                                    {video?.author?.stats?.subscribersText}
                                </div>
                            </div>
                        </div>
                        <div className="flex text-white mt-4 md:mt-0">
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                <AiOutlineLike className="text-xl text-white mr-2" />
                                {`${abbreviateNumber(
                                    video?.stats?.likes,
                                    2
                                )} Likes`}
                            </div>
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                {`${abbreviateNumber(
                                    video?.stats?.views,
                                    2
                                )} Views`}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                    {relatedVideos?.contents?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        return (
                            <SuggestionVideoCard
                                key={index}
                                video={item?.video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
      
    );
};

export default VideoDetails; */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextAPI";
import fetchDataFromApi from "../utils/api";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import { formatViewCount } from "../utils/constants";

const VideoDetails = () => {
  const { categoryId, videoId } = useParams();
  /*   console.log(categoryId);
    console.log(videoId) */
  const { setLoading } = useContext(Context);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState();
  const [channelData, setChannelData] = useState();
  const [comments, setComments] = useState();

  const fetchVideoDetails = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromApi("videos", {
        part: "snippet,contentDetails,statistics",
        id: videoId,
      });
      setSelectedVideoDetails(data.items[0]);
        console.log('Selected Video Detail', data.items[0]);
      setLoading(false);
    } catch (error) {
      console.error(error, "Error in fetching the data");
    }
  };

  useEffect(() => {
    fetchVideoDetails();
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

 /*  const fetchComments = async () => {
    console.log("inside fetch comments functions");
    if (videoId) {
      setLoading(true);
      try {
        console.log("inside try block of fetch comments");
        const data = await fetchDataFromApi("commentThreads", {
          part: "snippet,replies",
          id: videoId,
        });
        console.log("Comments Data", data);
        setLoading(false);
      } catch (error) {
        console.error(error, "Error in fetching details");
      }
    }
  };
  useEffect(() => {
    fetchComments();
  }, [videoId]); */

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
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
          {selectedVideoDetails && (
            <div className="flex flex-col">
              <p className="text-white text-[17px] font-semibold mt-2">{selectedVideoDetails?.snippet?.title}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-5 items-center">
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
                      <p className="text-gray-400 text-[12px]">{formatViewCount(channelData?.statistics.subscriberCount)} Subscribers</p>
                    </div>
                  </div>

                  <button className="flex items-center justify-center bg-white px-[15px] rounded-2xl py-[6px] font-semibold text-[13px]">
                    Subscribe
                  </button>
                </div>

                <div className="flex gap-2">
                  <div className="bg-gray-700 text-white flex items-center px-4 py-1 rounded-2xl ">
                    <BiLike className="text-xl cursor-pointer" />
                    &nbsp;<span className="font-semibold text-[13.5px]">
                    {formatViewCount(selectedVideoDetails?.statistics.likeCount)}
                    </span>
                    &nbsp;|&nbsp;
                    <BiDislike className="text-xl cursor-pointer" />
                  </div>
                  <div className="bg-gray-700 text-white flex gap-2 items-center px-4 py-1 rounded-2xl cursor-pointer  ">
                    <PiShareFatThin />
                    <p className="font-semibold text-[14px]">Share</p>
                  </div>
                  <div className="bg-gray-700 text-white flex gap-2 items-center px-4 py-1 rounded-2xl cursor-pointer ">
                    <HiDownload />
                    <p className="font-semibold text-[14px]">Download</p>
                  </div>
                  <div className="bg-gray-700 text-white flex items-center px-2 py-2 rounded-2xl cursor-pointer ">
                    <HiDotsHorizontal />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
