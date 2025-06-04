import React, {useEffect, useState} from "react";
//import * as Avatar from "@radix-ui/react-avatar";
import Avatar from "@mui/material/Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import profile from "/Users/Pranjal Singh/Desktop/Vidstream/src/images/profile.png";
import logo from "/Users/Pranjal Singh/Desktop/Vidstream/src/images/Vidstream logo2.png";
import { useUtils } from "../context/UtilsContext";

function navbar() {
   const [searchQuery, setSearchQuery] = useState("");
  const {setIsSidebar, isSidebar, mobileShow, setmobileShow}= useUtils();
  

  useEffect(()=> {
    console.log((isSidebar, mobileShow));
  }, [isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  /*const handleSidebar = () => {
    if(window.innerWidth<=1280){
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };*/

  return (
    <div className="flex justify-between fixed top-0 w-[100%] px-6  bg-white z-40">
      <div className="flex items-center space-x-4 ">
        <AiOutlineMenu className="text-xl cursor-pointer" /*onClick={handleSidebar}*/ />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border border-grey-400 rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none"
           onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
             />
        </div>

        <button className="px-4 py-2 border-gray-400 bg-gray-100 rounded-r-full"
        onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center ">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar
          src="/profile.png"
          alt="Profile"
          sx={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}

export default navbar;
