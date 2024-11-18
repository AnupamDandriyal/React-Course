import PropTypes from 'prop-types'

const LeftNavMenuItem = ({text,icon,className,action}) => {
  return (
    <div className={"text-white text-[14px] font-semibold cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className}
    onClick={action}
    >
      <span className=' text-[17px] mr-3'>{icon} </span>
      {text}
    </div>
  )
}
LeftNavMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  action:PropTypes.func.isRequired 
}

export default LeftNavMenuItem