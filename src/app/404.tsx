import React from "react";
import Image from "next/image";


const NotFound = () => {
    return(
        <>
            <div className="text-center">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-9">
                    <p className="text-[#4a5f73] text-[2.5rem] font-bold mb-8 ">صفحه‌ای که دنبال آن بودید پیدا نشد!</p>
                    <button className="text-[#fff] bg-mainRed p-[10px] rounded-xl text-base  ">ادامه خرید در دیدیکالا</button>
                    <Image width={900} height={900} className="block my-4 mx-auto max-w-full " src={'/imgs/404.png'} alt="404"/>
                </div>
            </div>
            
        </>
    )
}

export default NotFound