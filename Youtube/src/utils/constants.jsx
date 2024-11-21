import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdScience, MdSchool, MdFlight, MdLibraryBooks } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { IoGameControllerSharp, IoCarSport } from "react-icons/io5";
import { GiCat, GiSoccerBall } from "react-icons/gi";
import { FaUserFriends, FaRegLaughBeam, FaTheaterMasks } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";
import { formatDistanceToNow } from 'date-fns';
import { BsFillCameraReelsFill } from "react-icons/bs";

export const categories = [
    { id: "0", name: "Home", icon: <AiFillHome/>, type: "category" },
    { id: "1", name: "Film & Animation", icon: <FiFilm/>, type: "category" },
    { id: "2", name: "Autos & Vehicles", icon: <IoCarSport/>, type: "category" },
    { id: "10", name: "Music", icon: <CgMusicNote/>, type: "category" },
    { id: "15", name: "Pets & Animals", icon: <GiCat/>, type: "category" },
    { id: "17", name: "Sports", icon: <GiSoccerBall/>, type: "category" },
    { id: "19", name: "Travel & Events", icon: <MdFlight/>, type: "category" },
    { id: "20", name: "Gaming", icon: <IoGameControllerSharp/>, type: "category" },
    { id: "22", name: "People & Blogs", icon: <FaUserFriends/>, type: "category" },
    { id: "23", name: "Comedy", icon: <FaRegLaughBeam/>, type: "category" },
    { id: "24", name: "Entertainment", icon: <FaTheaterMasks/>, type: "category", divider: true },
    { id: "25", name: "News & Politics", icon: <MdLibraryBooks/>, type: "category" },
    { id: "35", name: "Documentary", icon: <BsFillCameraReelsFill/>, type: "category" },
    { id: "27", name: "Education", icon: <MdSchool/>, type: "category" },
    { id: "28", name: "Science & Technology", icon: <MdScience/>, type: "category" }
];

export const menuItems = [
    { name: "Settings", icon: <FiSettings/>, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag/>, type: "menu" },
    { name: "Help", icon: <FiHelpCircle/>, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine/>, type: "menu" },
];

export const formatViewCount = (count) => {
  if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
  } else {
      return count?.toString();
  }
};

export const formatPublishTime = (publishTime) => {
        const publishedTime = new Date(publishTime);
        const currentTime = new Date();
        const differenceInSeconds = Math.floor((currentTime - publishedTime) / 1000);
    
        const units = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
            { label: "second", seconds: 1 },
        ];
    
        for (const unit of units) {
            const interval = Math.floor(differenceInSeconds / unit.seconds);
            if (interval > 0) {
                return `${interval} ${unit.label}${interval > 1 ? "s" : ""} ago`;
            }
        }
    
        return "just now";
    
};

export const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (parseInt(match[1]) || 0);
  const minutes = (parseInt(match[2]) || 0);
  const seconds = (parseInt(match[3]) || 0);
  return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
};
