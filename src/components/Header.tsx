import Image from "next/image";
import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
const Header = () => {
  return (
    <div>
      <div className="relative h-[60px]">
        <Image src="/imgs/large-ads.jpg" alt="omin-net-logo" fill />
      </div>
      <div>
        <Image
          src="/imgs/logo.png"
          alt="omin-net-logo"
          className="rounded-lg"
          width={100}
          height={10}
          quality={100}
        />
        <div className="border-gray-300 border-2 flex justify-center items-center">
          <span>حساب کاربری</span>
          <RiAccountCircleLine />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
