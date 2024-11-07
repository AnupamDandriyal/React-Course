import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AlbumItems = ({ image, name, desc, id }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-3 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img src={image} className='rounded' alt="image" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
       <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

AlbumItems.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
};


export default AlbumItems