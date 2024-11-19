/* eslint-disable react/prop-types */


const LeftNavMenuItem = ({item,isSelected,onclick}) => {
  return (
    <div className={`text-white text-[14px] font-semibold cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${isSelected ? "bg-white/[0.15]" : ''}`}
    onClick={item.type==='category' ? onclick : undefined}
    >
      <span className=' text-[17px] mr-3'> {item.icon} </span>
      {item.name}
    </div>
  )
}


export default LeftNavMenuItem