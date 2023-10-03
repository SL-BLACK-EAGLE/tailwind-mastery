"use client";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { MenuContext } from "./context/MenuContext";

const Header = () => {
  const {toggle} = useContext(MenuContext);
  return (
    <div className="bg-gray-100   p-2 w-full">
      <div className="flex w-full justify-between rounded-md items-center bg-white p-2">
        <h2>Main</h2>
        <div className="border rounded-lg p-2 shadow-sm"  onClick={toggle}>
          <FaBars className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
