"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigationList } from "./navigationList";

const AsideStudio = () => {
  const [activeMenu, setActiveMenu] = useState(
    () => localStorage.getItem("activeMenu") ?? "/"
  );
  const navList = Object.keys(navigationList);

  return (
    <aside className="w-[240px] px-4 mt-4 border-r-secondary border-r-[1px] h-screen">
      <div className="text-white w-full flex-col flex justify-between items-center text-center h-[208px] mb-4">
        <Image
          src="https://th.bing.com/th/id/R.3bcb9885029ffb81f58fb4a46c6d854f?rik=caTmTHH%2bNuWv1w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2fd%2f1%2f798741-download-free-awesome-nature-backgrounds-1920x1080-for-tablet.jpg&ehk=%2fu8xawhlqhlABfauhjBvJm3YUpEq5Vjqj2FfHAGm%2bj8%3d&risl=&pid=ImgRaw&r=0"
          width={112}
          height={112}
          className="rounded-[50%] w-[112px] h-[112px] mt-4"
          alt="Logo"
        />
        <div>
          <p className="font-bold">Kênh của bạn</p>
          <p className="text-secondary text-sm">Ngọc Long</p>
        </div>
      </div>
      <nav className="space-y-4">
        {navList.map((nav) => (
          <ul key={nav} className="border-b space-y-2 border-white/20 pb-4 h-[300px] overflow-scroll">
            {navigationList[nav].map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.path}
                  className={`
                    flex items-center px-2 py-2 rounded-lg hover:bg-white/20
                    ${nav.path === activeMenu ? "bg-white/20 font-bold" : ""}
                  `}
                  onClick={() => {
                    setActiveMenu(nav.path);
                    localStorage.setItem("activeMenu", nav.path);
                  }}
                >
                  <nav.icon className="mr-6" />
                  <span className="text-white text-[15px]">{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </aside>
  );
};

export default AsideStudio;
