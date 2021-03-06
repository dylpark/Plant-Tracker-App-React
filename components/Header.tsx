//
//

import Image from "next/image";
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

const Header: React.FC = () => { 
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between h-auto">
      <div className="flex flex-grow self-center justify-start max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} href="/" />
        <HeaderItem title="Add" Icon={PlusCircleIcon} href="/add-plant" />
      </div>
      <div className="flex flex-grow justify-end max-w-2xl">
        <h1 className="tracking-widest self-center mr-5 text-3xl font-thin text-gray-900">
          Plant Tracker
        </h1>
        <Image
          alt="fern"
          className="object-contain"
          src={require("/public/fern.png")}
          width={64}
          height={64}
        />
      </div>
    </header>
  );
}

export default Header;
