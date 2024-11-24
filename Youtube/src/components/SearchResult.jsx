/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/contextAPI";
import { useParams } from "react-router-dom";
import fetchDataFromApi from "../utils/api";
import LeftNav from "./LeftNav";


const SearchResult = () => {
  const [searchResult, setSearchResult] = useState();
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();
  const fetchSearchVideos = async () => {
    setLoading(true);
    try {
      const data = await fetchDataFromApi('search', {
        part: 'snippet',
        regionCode: "IN",
        q: searchQuery,
        type: 'video',
        maxResults: 10
      })
     /*  console.log(data.items) */
      const videoIds = data.items.map((item) => item.id.videoId).join(',');
     /*  console.log(videoIds) */
      const videoDetailsResponse = await fetchDataFromApi('videos', {
        part: 'snippet,contentDetails,statistics',
        id:videoIds,
      })
      console.log("Searched Video Details", videoDetailsResponse.items)
      setSearchResult(videoDetailsResponse.items);
     
    } catch (error) {
      console.error(error,'Error in fetching the data')
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSearchVideos()
  },[searchQuery])
  return (
    <div className="flex w-full h-full bg-black ">
      <div className='flex-shrink-0 overflow-y-auto'>
        <LeftNav />
      </div>
      <div className='flex-grow overflow-y-auto'></div>
    </div>
  )
}

export default SearchResult