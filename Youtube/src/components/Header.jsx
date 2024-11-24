import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { useContext, useState } from "react";
import { Context } from "../context/contextAPI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { IoMdMic } from "react-icons/io";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = () => {
    if (searchQuery?.length > 0) {
      navigate(`search/${searchQuery}`);
    }
  };

  const handleClearSearchQuery = () => {
    setSearchQuery("");
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between h-14 py-3 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            onClick={mobileMenuToggle}
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="YoutubeLogo"
          />

          <img
            className="h-full md:hidden"
            src={ytLogoMobile}
            alt="YoutubeLogo"
          />
        </Link>
      </div>
      <div className="group flex items-center">
      <div
          className={`flex h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 `}
        >
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-xl text-white" />
          </div>
          <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="search anything..."
            className={`pl-5 pr-5 text-sm bg-transparent text-white outline-none md:pl-0 w-32 sm:w-44 md:w-64 lg:w-[500px]`}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") searchQueryHandler();
            }}
            value={searchQuery}
            />
            <button
              className="mr-5"
              onClick={handleClearSearchQuery}
            >
              <CgClose className="text-lg text-white" />
            </button>
          </div>
         
        </div>

        <button
          className={`flex items-center justify-center w-[40px] md:w-[60px] h-10 rounded-r-3xl border border-[#303030]  border-l-0`}
          onClick={searchQueryHandler}
        >
          <IoIosSearch className="text-xl text-white" />
        </button>
        
        <IoMdMic className="text-white ml-6 p-2 h-[34px] w-[34px] bg-white/[0.15] cursor-pointer rounded-3xl" />
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex ">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>

          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg" alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
