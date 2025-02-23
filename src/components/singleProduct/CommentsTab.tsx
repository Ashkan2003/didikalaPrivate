import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
import { ProductType } from "@/types/GlobalTypes";

interface Props {
  product: ProductType;
}

export const Comments = ({ product }: Props) => {
  return (
    <div className=" mx-3">
      <div className="m-8">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479] font-bold">
          امتیاز کاربران به:
        </h2>
        <h1 className="md:text-lg text-[#666] font-semibold border-b border-gray-100 py-2 m-2">
          {product.productName}
          {product.productTitle}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 place-items-center">
        {/* product-dising */}
        <div className="w-full md:w-5/6 md:m-3 p-3 bg-gray-50">
          <div className="flex justify-start items-center gap-3 p-3">
            <div className="max-md:text-xs text-sm w-1/4 ml-auto">طراحی</div>
            <div className="w-2/4 bg-gray-200 rounded-full h-1">
              <div
                className="bg-mainRed h-1 rounded-full"
                style={{ width: `${product.productDesign}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-mainRed">
              {product.productDesign}%
            </span>
          </div>
        </div>{" "}
        {/* product-productPurchaseValue*/}
        <div className="w-full md:w-5/6 md:m-3 p-3 bg-gray-50">
          <div className="flex justify-start items-center gap-3 p-3">
            <div className="max-md:text-xs text-sm w-1/4 ml-auto">
              ارزش خرید
            </div>
            <div className="w-2/4 bg-gray-200 rounded-full h-1">
              <div
                className="bg-mainRed h-1 rounded-full"
                style={{ width: `${product.productPurchaseValue}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-mainRed">
              {product.productPurchaseValue}%
            </span>
          </div>
        </div>{" "}
        {/* product-productBuildQuality */}
        <div className="w-full md:w-5/6 md:m-3 p-3 bg-gray-50">
          <div className="flex justify-start items-center gap-3 p-3">
            <div className="max-md:text-xs text-sm w-1/4 ml-auto">
              کیفیت ساخت
            </div>
            <div className="w-2/4 bg-gray-200 rounded-full h-1">
              <div
                className="bg-mainRed h-1 rounded-full"
                style={{ width: `${product.productBuildQuality}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-mainRed">
              {product.productBuildQuality}%
            </span>
          </div>
        </div>{" "}
        {/* product-productFeatures */}
        <div className="w-full md:w-5/6 md:m-3 p-3 bg-gray-50">
          <div className="flex justify-start items-center gap-3 p-3">
            <div className="max-md:text-xs text-sm w-1/4 ml-auto">
              امکانات و قابلیت ها
            </div>
            <div className="w-2/4 bg-gray-200 rounded-full h-1">
              <div
                className="bg-mainRed h-1 rounded-full"
                style={{ width: `${product.productFeatures}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-mainRed">
              {product.productFeatures}%
            </span>
          </div>
        </div>
        <div className="">
          <h2 className="md:text-lg text-[#5a5a5a] p-3">
            شما هم می‌توانید در مورد این کالا نظر بدهید.
          </h2>
          <p className="text-[#676767] p-3 max-md:text-sm max-md:leading-8">
            برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این
            محصول را قبلا از دیجی‌کالا خریده باشید، نظر شما به عنوان مالک محصول
            ثبت خواهد شد.
          </p>
          <button className="w-48 h-10 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group m-3">
            <div className="absolute right-0 top-0 h-full w-10 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>

            <div className="absolute right-0 top-0 h-full w-10 grid place-items-center text-white z-10">
              <BiCommentDetail className="text-xl" />
            </div>

            {/* Button Text */}
            <div className="flex-grow flex justify-center items-center text-white pr-8 z-10">
              افزودن نظر جدید
            </div>
          </button>
        </div>
      </div>

      <div className="m-8">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479] font-bold">
          نظرات کاربران
        </h2>
        <p className="text-lg text-[#000] font-bold py-2 m-2">
          {product.comments.length} نظر
        </p>
      </div>

      {product.comments.map((comment, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg md:p-5 md:m-5 my-8"
        >
          <div className="grid grid-cols-3 m-5 max-md:grid-cols-1 md:px-5">
            <div className="max-md:text-sm">
              <div>
                <RiShoppingCart2Line className="inline text-black text-2xl font-semibold" />
                <span className="text-[#245a1dfa] mx-5 text-sm">
                  خریدار این محصول
                </span>
              </div>
              <div className=" my-7">
                <div className="font-bold text-black my-2">
                  رنگ خریداری شده:
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 border border-gray-200 rounded-[5px] bg-[#2196f3]"></span>
                  <span className="pr-4 text-black font-bold">
                    {product.productColor}
                  </span>
                </div>
              </div>
              <div className=" my-7">
                <div className="font-bold text-black my-2">خریداری شده از:</div>
                <div className="flex items-center">
                  <BsShop className="w-4 h-4" />
                  <span className="pr-4 text-[#1ca2bd] font-bold">
                    دی دی کالا
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h1 className="md:text-lg font-bold text-[#5f5f5f]">
                {/* {comment.productName} */}
              </h1>
              <h5 className="text-[#adadad] max-sm:text-xs text-sm pb-4">
                توسط {comment.userName} در تاریخ{" "}
                <span>{comment.commentCreationDateAt}</span>
              </h5>
              <hr />
              <p className="py-5 sm:text-sm sm:leading-8 text-[13px] leading-7">
                {comment.userComment}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
