/* eslint-disable react/prop-types */
import moment from 'moment'

const VideoLenghth = ({ time }) => {
  const videoLengthInSeconds = moment().startOf('day').seconds(time).format('H:mm:ss')
  return (
    <div className="absolute bottom-2 right-2 py-1 bg-black px-2 text-white text-xs rounded-md">{videoLengthInSeconds}</div>
  )
}

export default VideoLenghth