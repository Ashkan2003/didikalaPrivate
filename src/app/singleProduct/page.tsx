import ImgSlider from "@/components/singleProduct/ImgSlider";
import { ProductInfo } from "@/components/singleProduct/ProductInfo";
import Image from "next/image";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";


const SingleProductPage = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 my-4 mx-4 lg:mx-48 md:mx-8 sm:mx-8 xs:mx-4">
        <div className="mx-6 lg:mx-4 md:mx-3 sm:mx-2">
          <div className="my-2">
            <div className="relative flex items-center justify-center border-b py-2 border-mainRed">
              <IoHeart className="absolute right-4" />
              <h1 className="text-mainRed text-lg font-bold">فروش ویژه</h1>
            </div>
            <div className="py-5">
              <div data-date="" className="flex items-center justify-center">
                <span data-days className="px-7">
                  0
                </span>
                :
                <span data-hours className="px-7">
                  0
                </span>
                :
                <span data-minutes className="px-7">
                  0
                </span>
                :
                <span data-seconds className="px-7">
                  0
                </span>
              </div>
              <div className="flex items-center justify-center text-sm">
                <span className="px-4">روز </span>
                <span className="px-4">ساعت </span>
                <span className="px-4">دقیقه </span>
                <span className="px-4">ثانیه </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ImgSlider />
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-1 mx-8 lg:mx-6 md:mx-4 sm:mx-2">
          <>
            <div className="border-b border-[]#f2f2f2] m-2 my-8">
              <h1 className="text-[#666] text-lg pb-5">
                گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو سیم کارت ظرفیت
                128گیگابایت
              </h1>
            </div>
            <div className="m-3">
              <div>
                <Image
                  className="inline ml-3"
                  src="/imgs/title-circles.png"
                  width={30}
                  height={30}
                  alt="Circle Decoration"
                  priority // Ensures faster LCP by preloading the image
                />
                <span className="h-8 text-[#6f7479] leading-8">
                  انتخاب رنگ:
                </span>
              </div>
              <ul className="flex my-3 mb-6">
                <li className="flex items-center shadow-md w-20 h-8 rounded-lg ml-2">
                  <label htmlFor="" className="relative">
                    <span className="w-4 h-4 absolute right-2 top-2 border border-black rounded-[50%] bg-[#2196f3]"></span>
                    <input type="radio" className="absolute hidden" />
                    <span className="pr-9 text-[#6f6f6f]">آبی</span>
                  </label>
                </li>
                <li className="flex items-center shadow-md w-20 h-8 rounded-lg ml-2">
                  <label htmlFor="" className="relative">
                    <span className="w-4 h-4 absolute right-2 top-2 border border-black rounded-[50%] bg-[#ff0000]"></span>
                    <input type="radio" className="absolute hidden" />
                    <span className="pr-9 text-[#6f6f6f]">قرمز</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="m-3">
              <h3 className="text-[#55565a] text-sm font-bold">
                ویژگی های محصول
              </h3>
              <ul className="text-[#55565a] leading-8">
                <li>
                  <span>حافظه:</span>
                  <span>20 گیگ</span>
                </li>
              </ul>
            </div>
            <div className="m-3">
              <Image
                className="inline ml-3"
                src="/imgs/title-circles.png"
                width={30}
                height={30}
                alt="Circle Decoration"
                priority // Ensures faster LCP by preloading the image
              />
              <h2 className="inline">کد محصول:225566</h2>
            </div>
            <div className="m-3">
              <Image
                className="inline ml-3"
                src="/imgs/title-circles.png"
                width={30}
                height={30}
                alt="Circle Decoration"
                priority // Ensures faster LCP by preloading the image
              />
              <h2 className="inline">
                قیمت :{" "}
                <span className="font-bold text-lg">۳,۵۶۰,۰۰۰ تومان</span>
              </h2>
            </div>

            <button className="w-48 h-10 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group">
              {/* Expanding Light Red Background */}
              <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

              {/* Cart Icon (Positioned on top of background) */}
              <div className="absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
                <BsCart3 className="text-xl" />
              </div>

              {/* Button Text */}
              <div className="flex-grow flex justify-center items-center text-white pr-8 z-10">
                افزودن به سبد خرید
              </div>
            </button>
          </>
        </div>
      </div>
      <div className="max-w-[1300] max-lg:max-w-7xl max-md:max-w-2xl mx-auto">
        <ProductInfo />
      </div>
    </>
  );
};

export default SingleProductPage;
