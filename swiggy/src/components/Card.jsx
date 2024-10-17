import PropTypes from 'prop-types';

import { MdStars } from "react-icons/md";

const Card = ({ item, md }) => {
  return (
    <div className={`${md} md:w-[300px] hover:scale-105 duration-150 md:h-[350px] flex-col mx-0 my-auto`}>
                <div className="h-[65%] w-full relative">
                  <div className="relative h-full w-full rounded-[15px] overflow-hidden">
                    <img
                      src={item.image}
                      alt="category"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute flex top-0 left-0 h-full w-full bg-gradient-to-b from-white/5 to-black/60">
                    <p className=" absolute bottom-3 left-5 text-white font-bold text-[25px] ">{item.offer}</p>
                    </div>
                  </div>
                </div>

                <div id="details" className="p-[10px]">
                  <p className="font-bold text-[19px]">{item.title}</p>
                  <div className="flex items-center text-[18px] font-semibold">
                    <MdStars className="text-green-600" /> &nbsp; {item.rating}{" "}
                    &bull; {item.minTime} - {item.maxTime} mins
                  </div>
                  <p className="text-gray-500">{item.name}</p>
                  <p className="text-gray-500">{item.place}</p>
                </div>
              </div>
  )
}

Card.propTypes = {
  item: PropTypes.object,
  md:PropTypes.string
}
export default Card