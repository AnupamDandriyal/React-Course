import { useContext, useEffect, useState } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextAPI";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  const [delayedRender, setDelayedRender] = useState(false);
  console.log(searchResults);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    setTimeout(() => {
      setDelayedRender(true);
    }, 5000);
}, []);

  return (
    <div className="flex h-[calc(100%-56px)]  ">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
        {!loading &&
            delayedRender && // Delay rendering until delayedRender is true
            searchResults?.map((item, i) => {
              if (item.type !== "video") return null; // Fix the return value
              return <VideoCard key={i} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
