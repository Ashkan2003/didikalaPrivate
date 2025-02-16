import Image from "next/image";
import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

type brandLogo = {
  brandName: string;
  brandlogoImg: string;
};

const LogoList: brandLogo[] = [
  {
    brandName: "تحویل اکسپرس",
    brandlogoImg: "/imgs/footer1.svg",
  },
  {
    brandName: "پشتیبانی 24 ساعته",
    brandlogoImg: "/imgs/footer2svg.svg",
  },
  {
    brandName: "پرداخت درمحل",
    brandlogoImg: "/imgs/footer3svg.svg",
  },
  {
    brandName: "۷ روز ضمانت بازگشت",
    brandlogoImg: "/imgs/delivery.svg",
  },
  {
    brandName: "ضمانت اصل بودن کالا",
    brandlogoImg: "/imgs/contact-us.svg",
  },
];

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-100 py-3 mt-24 space-y-9 sm:px-24">
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-32">
          <span>بازگشت به بالا</span>
          <div className=" rounded-full ">
            <IoIosArrowDropup className="text-[30px] rounded-full bg-[#EDF0F5]  text-red-500 " />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {LogoList.map((item, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div className="h-24 w-16 relative">
              <Image src={item.brandlogoImg} alt={item.brandName} fill />
            </div>
            <p>{item.brandName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
