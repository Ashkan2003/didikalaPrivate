import React from "react";
import CartTabs from "@/components/CartTabs";
import CostCart from "@/components/CostCart";
import Image from "next/image";

const UserShoppingCartPage = () => {
  return (
    <>
      <div className="grid grid-cols-7 max-sm:grid-cols-4">
        
        <div className=" mr-20 col-span-5 mt-36 max-sm:col-span-4">
        <CartTabs />
        </div>


        <div className=" col-span-2 mt-36 ">
         {/* <CostCart/>  */}
         <div className="mr-11 mt-9">
          <div className="flex mb-3 items-center">

            <div>
              <Image width={25} height={25} src={'/imgs/return-policy.svg'} alt="return"/>
            </div>
            <p className="mr-2 font-bold text-[13px]">هفت روز ضمانت تعویض</p>

          </div>
          <div className="flex mb-3 items-center">
          <div>
              <Image width={25} height={25} src={'/imgs/payment-terms.svg'} alt="payment" />
            </div>
            <p className="mr-2 font-bold text-[13px]"> پرداخت در محل با کارت بانکی</p>
          </div>
          <div className="flex mb-3 items-center">
          <div>
              <Image width={25} height={25} src={'/imgs/delivery.svg'} alt="delivery"/>
            </div>
            <p className="mr-2 font-bold text-[13px] "> تحویل اکسپرس</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UserShoppingCartPage;
