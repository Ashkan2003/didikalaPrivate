import { FiInfo } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

const CostCart = () => {
  return (
    <>
      <div className="text-sm w-[20rem]  border border-[#eee]  rounded-lg  ">

        <div className="flex gap-14 pt-5">
          <div className="flex flex-col text-justify pr-7 text-[#515151] font-bold ">
            <p className="pb-3">مبلغ کل (۲ کالا)</p>
            <p className="text-mainBlue pb-3">سود شما از خرید</p>
            <div className="flex items-center pb-4">
              <p className="">هزینه ارسال</p>
              <div className="relative group max-md:hidden">
                <FiInfo className="mr-2 cursor-pointer text-lg text-[#a0a0a0]" />
                <span className="hidden group-hover:block border border-gray-300 absolute z-20 w-64 p-3 text-right bg-white text-[#a0a0a0] text-sm font-thin shadow-md mt-2 ">
                  هزینه ارسال مرسولات می تواند وابسته به شهر و آدرس گیرنده متفاوت باشد. در صورتی که هر یک از مرسولات حداقل ارزشی برابر با 150 هزار تومان داشته باشد، آن مرسوله به صورت رایگان ارسال می شود. حداقل ارزش هر مرسوله برای ارسال رایگان، می تواند متغیر باشد.
                </span>
              </div>
            </div>
            
          </div>
          <div dir="ltr" className="flex flex-col text-justify pr-4 text-[#515151] ">
            <p className="pb-3">۱۶,۸۹۷,۰۰۰ تومان</p>
            <p className="text-mainBlue pb-3">(۱٪)۲۰۰,۰۰۰ تومان</p>
            <p className="pb-3">وابسته به آدرس</p>
          </div>
        </div>
        <hr className="w-72 mx-4" />
        <div className=" flex gap-32 pt-2 pb-7 text-[#515151] ">
            <div className="flex pr-7 items-center ">
                <p className=" font-bold ">دیدیکلاب</p>
                <div className="relative group max-md:hidden">
                  <FiInfo className="mr-2 cursor-pointer text-lg text-[#a0a0a0]" />
                  <span className="hidden group-hover:block border border-gray-300 absolute z-20 w-64 p-3 text-right bg-white text-[#a0a0a0] text-sm font-thin shadow-md mt-2 ">
                      با امتیاز های خود در باشگاه مشتریان دیجی کالا دیجی کلاب از بین جوایز متنوع انتخاب کنید.
                  </span>
              </div>
            </div>
            <div className="">
            <p className="">۱۵۰+ امتیاز</p>
            </div>
        </div>
        <hr className="w-72 mx-4" />
        <hr className="w-72 mx-4 mt-[2px]" />
        <div className="pt-4">
            <h3 className="text-[#676767] text-xl flex justify-center items-center font-semibold ">مبلغ قابل پرداخت:</h3>
            <h3 className="text-mainRed text-xl my-3 flex justify-center items-center font-semibold">۱۶,۶۹۷,۰۰۰ تومان</h3>
            <button className="w-11/12 h-14 mx-4 my-3 relative flex items-center justify-center rounded-[10px] bg-mainRed overflow-hidden md:flex group">
                  {/* Expanding Light Red Background */}
                  <div className="absolute right-0 top-0 h-full w-14 bg-red-300 rounded-l-2xl group-hover:rounded-l-[10px] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          
                  {/* Cart Icon (Positioned on top of background) */}
                  <div className="absolute right-2 top-0 h-full w-10 grid place-items-center text-white z-10">
                    <FaArrowLeft  className="text-xl" />
                  </div>
          
                  {/* Button Text */}
                  <div className="flex-grow flex justify-center items-center text-[#fff] text-base px-11  z-10">
                    ادامه ثبت سفارش
                  </div>
                </button>
            
            <div className=" text-[#a0a0a0] pr-3 pb-7">
                <p className="text-sm inline   ">
                کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل بعدی را تکمیل کنید. 
                
                </p>
                <div className="relative group max-md:hidden">
                  <FiInfo className="mr-2 cursor-pointer text-lg text-[#a0a0a0]" />
                  <span className="hidden group-hover:block border border-gray-300 absolute z-20 w-64 p-3 text-right bg-white text-[#a0a0a0] text-sm font-thin shadow-md mt-2  ">
                    محصولات موجود در سبد خرید شما تنها در صورت ثبت و پرداخت سفارش برای شما رزرو می شوند. در صورت عدم ثبت سفارش، دیجی کالا هیچگونه مسئولیتی در قبال تغییر قیمت یا موجودی این کالا ها ندارد.
                  </span>
              </div>
                
            
            </div>
        </div>
      </div>
    </>
  );
};

export default CostCart;
