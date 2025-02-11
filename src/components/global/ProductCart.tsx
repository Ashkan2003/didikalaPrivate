import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import { ProductCartType } from "@/types/GlobalTypes";

interface Props {
  productCart: ProductCartType;
}

const ProductCart = ({ productCart }: Props) => {
  return (
    <div className="bg-white rounded-xl w- h-96 px-5 py-4 space-y-2">
      <StarRating
        defaultRating={productCart.cartRate}
        maxRating={5}
        size={18}
        color="#FFD800"
      />
      <div className="relative w-full h-48">
        <Image alt="amazing" fill src={productCart.cartImg} />
      </div>
      <p className="text-lg font-semibold text-[#607D8B] pb-6">
        {productCart.cartTitle}
      </p>
      <div className="space-y-2">
        <p className="text-gray-600 text-sm ">لباس مردانه</p>
        <p className="font-bold">{productCart.productPrice} تومان</p>
      </div>
    </div>
  );
};

export default ProductCart;
