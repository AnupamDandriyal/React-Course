/* eslint-disable react/prop-types */
import { BiDislike, BiLike } from "react-icons/bi";
import { formatPublishTime, formatViewCount } from "../utils/constants";
import { HiOutlineDotsVertical } from "react-icons/hi";

const VideoComment = ({comment}) => {
  return (
    <div className="flex items-start overflow-y-auto videoDetails mb-4 p-4 hover:bg-white/[0.15] rounded-lg justify-between">
      <div className="flex gap-2">
      <div className="h-8 w-8 mb-2 lg:mb-0 lg:mr-3">
        {comment.snippet.topLevelComment.snippet.authorProfileImageUrl ? 
          <img className="overflow-hidden h-full w-full rounded-2xl " src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="userProfile" />
          :
          <div className="overflow-hidden flex justify-center items-center h-8 w-8  rounded-2xl bg-blue-500 text-white">U</div>
        }
      </div>
      <div className="flex-1">
          <div className="flex gap-2 items-center justify-start">
          <h3 className="text-sm lg:text-[14px] font-semibold">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h3>
          <p className="text-sm lg:text-[13px] text-white/[0.45]">
          {formatPublishTime(comment?.snippet?.topLevelComment?.snippet?.publishedAt)}
          </p>
        </div>
        <p className="text-sm lg:text-[14px] mt-1">
        {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
        <div className="flex gap-4 items-center mt-2">
          <div className="flex items-center">
          <BiLike className="text-xs lg:text-sm  cursor-pointer" />
                      &nbsp;
                      <span className="font-semibold text-[13.5px]">
                        {formatViewCount(
                          comment?.snippet?.topLevelComment?.snippet?.likeCount
                        )}
          </span>
          </div>
          <div>
          <BiDislike className="text-xs lg:text-sm cursor-pointer" />
          </div>
          <p className="text-white font-semibold text-[13px]">Reply</p>
          
        </div>
        </div>
      </div>
      <HiOutlineDotsVertical className="text-sm cursor-pointer"  />
      
    </div>
  )
}

export default VideoComment