import Input from "@/components/base/input";
import {
  House,
  MagnifyingGlass,
  Money,
  Shield,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface Data {
  title: string;
  link: string;
  icon?: React.ReactNode;
  subMenu?: Data[];
}
const SideMenu = () => {
  const data: Data[] = [
    {
      title: "Início",
      link: "/",
      icon: <House size={17} />,
    },
    {
      title: "Financeiro",
      link: "/",
      icon: <Money size={17} />,
    },
    {
      title: "Segurança",
      link: "/",
      icon: <Shield size={17} />,
    },
  ];

  return (
    <aside className="w-64 shadow-xl h-full p-1.5 bg-gray-100 border-r-2 hidden sm:block">
      <div>
        <Input
          id="search-menu"
          type="search"
          icon={<MagnifyingGlass size={20} />}
        />
      </div>
      <ul>
        {data.map((item) => (
          <li className="flex items-center gap-2 px-2" key={item.link}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
