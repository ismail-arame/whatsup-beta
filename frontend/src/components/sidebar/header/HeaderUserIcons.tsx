"use client";

import { ChatIcon, CommunityIcon, DotsIcon, StoryIcon } from "@/app/svg";
import { useState } from "react";
import Menu from "./Menu";

type Props = {
  isTablet: boolean;
};

export default function HeaderUserIcons({ isTablet }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ul className="flex items-center gap-x-2.5">
      <li>
        <button className={`${isTablet ? "btn_tablet" : "btn"}`}>
          <CommunityIcon className="dark:fill-dark_svg_1" />
        </button>
      </li>
      <li>
        <button className={`${isTablet ? "btn_tablet" : "btn"}`}>
          <StoryIcon className="dark:fill-dark_svg_1" />
        </button>
      </li>
      <li>
        <button className={`${isTablet ? "btn_tablet" : "btn"}`}>
          <ChatIcon className="dark:fill-dark_svg_1" />
        </button>
      </li>
      <li className="relative" onClick={() => setShowMenu((prev) => !prev)}>
        <button
          className={`${isTablet ? "btn_tablet" : "btn"} ${
            showMenu ? "bg-dark_hover_1" : ""
          }`}
        >
          <DotsIcon className="dark:fill-dark_svg_1" />
        </button>
        {showMenu ? <Menu showMenu={showMenu} isTablet={isTablet} /> : null}
      </li>
    </ul>
  );
}
