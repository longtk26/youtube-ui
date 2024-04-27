import { navigationList } from "@/constants/navigationList";
import Link from "next/link";

const Aside = () => {
  const navList = Object.keys(navigationList);

  return (
    <aside>
      <nav>
        {navList.map((nav) => (
          <ul key={nav}>
            {navigationList[nav].map((nav) => (
              <Link key={nav.name} href={nav.path}>
                <li>
                  <nav.icon />
                  <span className="text-white">{nav.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
