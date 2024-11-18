import { abbreviateNumber } from 'js-abbreviation-number';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import VideoLenghth from '../shared/VideoLenghth';
const SuggestionVideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className="flex mb-3">
      <div className="relativen h-24 lg:h-20 xl:h-24 w-40 min-w-[160px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800  overflow-hidden">
        <img className='h-full w-full object-cover' src={video?.thumbnails[0]?.url} alt="video" />
        {video?.lengthSeconds && (<VideoLenghth time={video?.lengthSeconds} />)}
      </div>
      <div className='flex flex-col overflow-hidden ml-3'>
          <span className='text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white'>
            {video?.title}
          </span>
          <span className='text-[12px] flex items-center lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7]'>
            {video?.author?.title}
            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
              <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1'/>
            )}
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden items-start">
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
  </Link>
  )
}

SuggestionVideoCard.propTypes = {
  video:PropTypes.object.isRequired,
}

export default SuggestionVideoCard

