import Search from "@/components/Search/Search";
import HamburgerIcon from "@/svgs/Header/HamburgerIcon";
import YoutubeLogo from "@/svgs/Header/YoutubeLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderStudio = () => {
  return (
    <header className="flex w-[100%] h-[56px] text-white bg-[#282828] px-6">
      <nav className="max-w-[1542px] mx-auto grow flex items-center justify-between">
        <div className="flex items-center">
          <div className="hover:bg-white/30 w-[36px] h-[36px] rounded-[50%] flex mr-6 hover:cursor-pointer">
            <HamburgerIcon className="m-auto" />
          </div>
          <Link href={"/"}>
            <Image 
                src="/yt_studio_logo.svg"
                alt="yt_studio_logo"
                width= {98}
                height={24}
            />
          </Link>
        </div>

        <Search />
        <button
          className="py-2 px-6 border border-white/20 rounded-full text-blue-500 font-bold
      hover:bg-blue-500/20"
        >
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default HeaderStudio;
