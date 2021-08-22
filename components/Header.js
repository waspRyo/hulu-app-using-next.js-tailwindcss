import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="image"
      />
    </header>
  );
};

export default Header;
