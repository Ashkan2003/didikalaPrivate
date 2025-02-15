"use client";
import React, { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import Image from "next/image";
import EmptyShoppingCart from "./EmptyShoppingCart";

const ShoppingCart = () => {

    const productsInfo = [
        {
            title:'گوشی موبایل سامسونگ مدل Galaxy A70 SM-A705FN/DS دوسیم‌کارت ظرفیت 128 گیگابایت',
            seller:'فروشنده: ایرانیان قائم همراه(کاوش تیم)',
            guarantee:'گارانتی 18 ماهه کاوش تیم',
            color:'رنگ : مشکی',
            price:'4,497,000',
            img:'/imgs/shoppingCart1.jpg',
        },
    ]
   

    // const colors = [
    //   {
    //     color:'black',
    //     hex:'#000000'
    //   },
    //   {
    //     color:'blue',
    //     hex:'#0000FF'
    //   },
    //   {
    //     color:'red',
    //     hex:'#FF0000'
    //   },
    //   {
    //     color:'pink',
    //     hex:'#FFC0CB'
    //   },
    // ]


    
    
    
    
      const[counter , setCounter] = useState(0)

      const incHandler = () => setCounter(counter+1)
      const decHandler = () => {
        if(counter > 0){
          setCounter(counter-1)
        }
      } 
    
      // if(productsInfo.length === 0){
      //   return(
      //     <EmptyShoppingCart/>
      //   )
      // }

      const deleteHandler = () => {
        console.log('product deleted!!!!!!!!');
      }
    
  return (
    <>
      <div className="flex justify-between items-center border-b-[1px] border-mainRed py-4">
        <div className="flex items-center">
          <FaTruckFast className="text-mainRed ml-4 text-sm " />
          <p className="text-[#858585]">
            ارسال عادی
            <span className="text-[#a1a3a8] mr-1 text-xs ">(2 کالا)</span>
          </p>
        </div>
      </div>
      <div className="flex border-b-[1px] border-[#dee2e6]">
        {
          
          productsInfo.map((product)=>{
            
              return(
                <>
                <div className="flex max-sm:block">
                <div className=" flex items-center justify-center p-5 ">
                  <button onClick={deleteHandler} className=" flex justify-center items-center text-[#999] bg-[#f5f5f5] text-lg w-6 h-6 rounded-xl text-center ">×</button>
                  <div className="relative my-3 w-32 h-32 max-sm:w-60 max-sm:h-60">
                    <Image fill src={product.img} alt="mobile" />
                  </div>
                </div>
                <div className="p-5 ">
              <a href="#">
                  <h3 className="text-base overflow-hidden max-w-xs font-bold text-[#656565]  whitespace-nowrap mt-3 mb-8 ">
                   {product.title} 
                  </h3>
              </a>
              <p className="text-[13px] my-2 text-[#212529] ">
                 {product.seller}
              </p>
              <p className="text-xs my-2 text-[#212529] ">
                {product.guarantee}
              </p>
              <div className="flex items-center my-2">
                  <p className="text-[13px] text-[#212529] ">
                       { product.color}
                  </p>
                  <span className="text-[13px] w-4 h-4 rounded-md inline-block bg-black mr-2" ></span>
              </div>
              <a href="#" className="text-mainBlue text-xs ">
                  انتقال به لیست خرید بعدی    
              </a>
          </div>
                </div>
               
                </>
                
              )
            }
            
)
        }
        
        <div className=" mr-32 mt-16 ">
                <p className="text-center text-sm text-[#212529] ">تعداد</p>
                <div className="flex items-center justify-center">
                    <button onClick={decHandler} className="flex justify-center items-center pt-1  text-gray-400 text-4xl w-8 h-8 border border-gray-400  rounded-tr-md rounded-br-md border-l-0 ">-</button>
                    <button className={`flex justify-center items-center text-xl border pt-1 border-gray-400 w-8 h-8 ${
                      counter > 99 && 'px-5'
                    } `} >
                      {counter}
                    </button>
                    <button onClick={incHandler} className="flex justify-center items-center pt-1  text-gray-400 text-4xl w-8 h-8 border border-gray-400 rounded-tl-md rounded-bl-md border-r-0 ">+</button>
                </div>
        </div>
        <div className=" text-[#212529] text-sm mr-12 mt-[88px]">
            <strong>{productsInfo[0].price} تومان</strong>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
