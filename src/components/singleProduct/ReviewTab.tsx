import Image from "next/image";
import React from "react";

interface Props {
  productName?: string;
  productTitle?: string;
  productDescription?: string;
}

const Review = ({ productName, productTitle, productDescription }: Props) => {
  return (
    <>
      <div className="m-10">
        <Image
          className="inline ml-3"
          src="/imgs/title-circles.png"
          width={30}
          height={30}
          alt="Circle Decoration"
          priority // Ensures faster LCP by preloading the image
        />
        <h2 className="inline text-md text-[#6f7479]">نقد و بررسی</h2>
        <h1 className="text-lg text-[#666] font-semibold border-b border-gray-100 py-2 m-2">
          {productName} {productTitle}
        </h1>
        <div className="text-[#666] mx-24 max-md:mx-2 text-justify">
          <p className="text-sm max-sm:text-[13px] leading-8 max-sm:leading-7">
            {productDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
