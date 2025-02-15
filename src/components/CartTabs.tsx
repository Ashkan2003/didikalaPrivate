"use client";
import React, { useState } from "react";
import ShoppingCart from "@/components/ShoppingCart";

const CartTabs = () => {
  const tabsData = [
    {
      label: "سبد خرید",
      index: 0,
    },
    {
      label: "لیست خرید بعدی",
      index: 1,
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div className="flex border-b border-[#dee2e6]">
        <div className="flex mt-10 items-center justify-center ">
          {tabsData.map((tab, indx) => (
            <button
              key={tab.index}
              className={`text-center p-2 h-14 font-bold text-sm max-sm:text-xs ${
                indx === activeTabIndex
                  ? "border-b-4 border-b-mainRed text-secondBlack "
                  : "border-none text-secondLightGray "
              }`}
              onClick={() => setActiveTabIndex(indx)}
            >
              {tab.label}
              <span className="font-bold bg-mainRed text-[#f8f8f8] rounded-[50%] w-5 h-5 inline-block mr-1">
                1
              </span>
            </button>
          ))}
        </div>
      </div>
      {activeTabIndex === 0 ? <ShoppingCart /> : ""}
    </>
  );
};

export default CartTabs;
