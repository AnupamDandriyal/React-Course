import PropTypes from "prop-types";

const SongItems = ({name,image,desc ,id}) => {
  return (
    <div className='min-w-[180px] p-3 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img src={image} className='rounded' alt="image" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div> 
  )
}


SongItems.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
};

export default SongItems