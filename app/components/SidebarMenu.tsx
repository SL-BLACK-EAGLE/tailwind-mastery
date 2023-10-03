"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { TbUserHeart } from "react-icons/tb";
import { SiHelpscout } from "react-icons/si";
import { MdOutlineSettingsSuggest } from "react-icons/md";

const SidebarMenu = () => {
  const [isActived, setIsActived] = React.useState(false);
  const [downArrow, setDownArrow] = React.useState(FaAngleRight);
  const showIcon = () => {
    isActived ? setIsActived(false) : setIsActived(true);
  };
  React.useEffect(() => {
    isActived ? setDownArrow(FaAngleDown) : setDownArrow(FaAngleRight);
  }, [isActived]);

  return (
    <div className=" bg-white p-4 rounded-md">
      <ul>
        <li className="flex justify-start items-center hover:bg-indigo-200 hover:text-green-700 rounded-xl p-2">
          <AiOutlineHome className="mr-2" />
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li
          className="flex justify-start items-center hover:bg-indigo-200 hover:text-green-700 rounded-xl p-2"
          onMouseOver={showIcon}
        >
          <GrProjects className="mr-2" />
          <h3 className="flex-1">Projects</h3>
          <span>{downArrow}</span>
        </li>
        <li className="flex justify-start items-center hover:bg-indigo-200 hover:text-green-700 rounded-xl p-2">
          <BiDonateHeart className="mr-2" />
          <Link href="/donations">Donations</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-indigo-200 hover:text-green-700 rounded-xl p-2">
          <TbUserHeart className="mr-2" />
          <Link href="/users">Participations</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-indigo-200 hover:text-green-700 rounded-xl p-2">
          <SiHelpscout className="mr-2" />
          <Link href="/events">Events</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-indigo-200 hover:text-green-700 rounded-xl p-2">
          <MdOutlineSettingsSuggest className="mr-2" />
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
