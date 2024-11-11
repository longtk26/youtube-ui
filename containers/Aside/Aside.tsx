"use client"

import { navigationList } from "@/containers/Aside/navigationList";
import Link from "next/link";
import { useEffect, useState } from "react";

const Aside = () => {
  const [activeMenu, setActiveMenu] = useState("")
  const navList = Object.keys(navigationList);

  useEffect(() => {
    const activeMenu = localStorage.getItem("activeMenu") ?? ""
    setActiveMenu(activeMenu)
  }, [activeMenu])
  

  return (
    <aside className="w-[240px] px-4 mt-4">
      <nav className="space-y-4">
        {navList.map((nav) => (
          <ul key={nav} className="border-b space-y-2 border-white/20 pb-4">
            {navigationList[nav].map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.path}
                  className={`
                    flex items-center px-2 py-2 rounded-lg hover:bg-white/20
                    ${nav.path === activeMenu ? 'bg-white/20 font-bold' : ''}
                  `}
                  onClick={() => {
                    setActiveMenu(nav.path);
                    localStorage.setItem("activeMenu", nav.path)
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

export default Aside;
