import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdQuestionMark } from "react-icons/md";

export const FAQ = () => {
  type FormValuesType = {
    productDescription: string;
    checkboxNotification: boolean;
  };

  const { register, handleSubmit } = useForm<FormValuesType>();

  const onSubmit: SubmitHandler<FormValuesType> = async (data) => {
    console.log(data, "form-data...");
  };
  return (
    <>
      <div>
        <div className="m-8 mb-4">
          <Image
            className="inline ml-3"
            src="/imgs/title-circles.png"
            width={30}
            height={30}
            alt="Circle Decoration"
            priority // Ensures faster LCP by preloading the image
          />
          <h2 className="inline text-md text-[#6f7479] font-bold">
            پرسش و پاسخ
          </h2>
          <p className="text-lg text-[#000] font-bold py-2 m-2">
            پرسش خود را در مورد محصول مطرح نمایید
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl">
            <textarea
              className="border border-gray-300 rounded-lg w-full h-20 py-1 px-2"
              {...register("productDescription")}
            />

            <button
              type="submit"
              className="mt-3 bg-gray-500 text-white p-2 rounded-lg ml-4 hover:bg-[#495057] transition-all duration-150 ease-in-out"
            >
              ثبت پرسش
            </button>
            <label htmlFor="notificationCheckbox">
              <input
                id="notificationCheckbox"
                type="checkbox"
                {...register("checkboxNotification")}
              />
              <p className="inline mr-4">
                اولین پاسخی که به پرسش من داده شد، از طریق ایمیل به من اطلاع
                دهید.
              </p>
            </label>
          </form>
        </div>
        {/* questions and answer */}
        <div>
          <p className="font-bold mr-16 text-lg">123 پرسش</p>
          <ul>
            <li>
              <div className="border border-slate-100 m-10 p-8 relative">
                <div className="bg-[#4ae3f3] w-12 h-12 rounded-md flex items-center justify-center absolute -top-8 -right-5">
                  <MdQuestionMark className="text-white text-2xl" />
                </div>
                <div className="pb-4 flex justify-between border-b border-gray-100">
                  <div>
                    <span className="text-black font-bold">حسن </span>
                    <span className="text-gray-400">گفت:</span>
                  </div>
                  <div className="text-blue-400">
                    اسفند ۲۰, ۱۳۹۶ در ۹:۴۱ ب.ظ
                  </div>
                </div>
                <div className="py-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </div>
                <span className="text-mainBlue border-b border-dashed border-mainBlue">پاسخ</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
