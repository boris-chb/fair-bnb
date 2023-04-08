"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((val) => !val), []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hover:bg-neutral-10 hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition md:block"
        >
          Book your stay
        </div>
        <div
          onClick={toggleMenu}
          className="p4 flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={() => {}} label="Sign In" />
              <MenuItem onClick={() => {}} label="Sign Out" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
