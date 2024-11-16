import { abbreviateNumber } from 'js-abbreviation-number';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import VideoLenghth from '../shared/VideoLenghth';
const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8 justify-center">
        <div className="relative  h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img className='h-full w-full object-cover' src={video?.thumbnails[0]?.url} alt="video" />
          {video?.lengthSeconds && (<VideoLenghth time={video?.lengthSeconds} />)}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-7 w-7 rounded-full overflow-hidden">
              <img src={video?.author?.avatar[0]?.url} alt="channel" className='w-full h-full object-cover' />
            </div>
          </div>

          <div className='flex flex-col overflow-hidden ml-3'>
            <span className='font-bold text-sm line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold text-white/[0.7] mt-2 flex items-center'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
              )}
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden items-start">
              {video.stats.views ? <>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <div className="text-xl leading-[15px] font-bold text-white/[0.7]  mx-1">&bull;</div>
                <span className='truncate'>
                  {video?.publishedTimeText}
                </span>
              </>
                : <span className='bg-red-600 px-[5px] mt-[3px] rounded text-white'>Live</span>}
             
             
              
            </div>
          </div>
          
        </div>
      </div>
    </Link>
  )
}

VideoCard.propTypes = {
  video:PropTypes.object.isRequired,
}
export default VideoCard