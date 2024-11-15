import { abbreviateNumber } from 'js-abbreviation-number';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import VideoLenghth from '../shared/VideoLenghth';
const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative mr-3 h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img className='h-full w-full object-cover' src={video?.thumbnails[0]?.url} alt="video" />
          {video.lengthSeconds && (<VideoLenghth />)}
        </div>
      </div>
    </Link>
  )
}

VideoCard.propTypes = {
  video:PropTypes.object.isRequired,
}
export default VideoCard