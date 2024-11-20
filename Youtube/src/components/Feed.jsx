import { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextAPI";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  /* console.log("Feed is uploaded", searchResults); */

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)] overflow-hidden">
      <LeftNav />
      <div className={` grow w-[calc(100%-240px)] overflow-y-auto bg-black`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-x-4">
          {!loading &&
            searchResults.map((item, i) => (
              <VideoCard key={i} video={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
