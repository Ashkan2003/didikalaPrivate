"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import moment from "jalali-moment";
import { useForm, SubmitHandler } from "react-hook-form";
import Swiper from "swiper";
import "swiper/css";
import NewAddressModal from "@/components/Shopping/NewAddressModal";
import DeleteAddressModal from "@/components/Shopping/DeleteAddressModal";
import CustomerAddressBox from "@/components/Shopping/CustomerAddressBox";
import EditCustomerAddressModal from "@/components/Shopping/EditCustomerAddressModal";
import PostDateSelection from "@/components/Shopping/PostDateSelectionTable";

const ShoppingPage = () => {
  //   // get jalali date
  //   const today = moment().locale("fa");
  //   const persianDayOfMonth = moment().format("jDD");
  //   const dayOfWeekToday = today.format("dddd");
  //   const persianMonthName = today.jMonth();

  //   const persianMonthsOfYear = [
  //     "فروردین",
  //     "اردیبهشت",
  //     "خرداد",
  //     "تیر",
  //     "مرداد",
  //     "شهریور",
  //     "مهر",
  //     "آبان",
  //     "آذر",
  //     "دی",
  //     "بهمن",
  //     "اسفند",
  //   ];

  //   const persianFormattedDate = `${dayOfWeekToday}،  ${persianDayOfMonth}  ${persianMonthsOfYear[persianMonthName]}`;
  //   console.log(persianFormattedDate);

  const [deliveryMethod, setDeliveryMethod] =
    useState<string>("normalDelivery");
  const [isCustomerEditAddressField, setIsCustomerEditAddressField] =
    useState<boolean>(false);
  const [isNewAddressModalOpen, setIsNewAddressModalOpen] =
    useState<boolean>(false);
  const [isDeleteAddressModal, setIsDeleteAddressModal] =
    useState<boolean>(false);
  const [isEditCustomerAddressModal, setIsEditCustomerAddressModal] =
    useState<boolean>(false);

  return (
    <>
      <main className="relative grid grid-rows-1 overflow-hidden ">
        {isNewAddressModalOpen && (
          <NewAddressModal
            isOpen={isNewAddressModalOpen}
            setIsOpen={setIsNewAddressModalOpen}
          />
        )}

        {isDeleteAddressModal && (
          <DeleteAddressModal
            isOpen={isDeleteAddressModal}
            setIsOpen={setIsDeleteAddressModal}
          />
        )}

        {isEditCustomerAddressModal && (
          <EditCustomerAddressModal
            isOpen={isEditCustomerAddressModal}
            setIsOpen={setIsEditCustomerAddressModal}
          />
        )}

        <header className="h-32 w-full shadow-md relative flex justify-center items-center">
          <div className="flex h-2 w-[50%] absolute bottom-0">
            <div className="w-1/2 h-full bg-gray-200 relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -right-4 -bottom-3"></div>
              <h1 className="absolute -right-10 bottom-10 text-mainRed font-medium text-sm">
                اطلاعات ارسال
              </h1>
            </div>

            <div className="w-1/2 h-full bg-gray-200 relative">
              <div className="w-8 h-8 bg-mainRed rounded-full absolute -bottom-3 -right-4"></div>
              <h1 className="absolute -right-5 bottom-10 text-gray-600 font-medium text-sm">
                پرداخت
              </h1>

              <div className="w-8 h-8 bg-gray-300 rounded-full absolute -left-4 -bottom-3"></div>
              <h1 className="absolute -left-16 bottom-10 text-gray-600 font-medium text-sm">
                اتمام خرید و ارسال
              </h1>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-[3fr_1fr] max-lg:grid-cols-1">
          <section>
            <section>
              {/* Flex container for Image and H1 */}
              <div className="flex items-center gap-5 mt-8">
                <Image
                  src="/imgs/title-circles.png"
                  alt="O"
                  width={30}
                  height={30}
                />
                <h1 className="text-md text-gray-500 font-medium mb-5">
                  انتخاب آدرس تحویل سفارش
                </h1>
              </div>
              <div className="w-full ml-4 border rounded-xl">
                {isCustomerEditAddressField && (
                  <div className="h-44 relative grid grid-cols-[1fr_20fr]">
                    <div className=" grid justify-center items-center">
                      <div className="bg-mainRed w-1 h-full grid justify-center items-center">
                        <div className="border-mainRed border-2 w-12 h-12 rounded-full bg-[#f3feff] grid items-center justify-center">
                          <span className="text-mainRed text-2xl">
                            <GoCheck />
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="text-gray-500 p-8 pr-5">
                      <li className="text-sm flex items-center gap-x-2 pb-3">
                        گیرنده: جلال بهرامی راد
                        <button className="text-mainRed border-b text-xs border-dashed border-mainRed">
                          اصلاح این آدرس
                        </button>
                        <button
                          className="bg-gray-100 px-3 py-2 rounded-xl text-sm mr-auto"
                          onClick={() => setIsCustomerEditAddressField(false)}
                        >
                          تغییر آدرس ارسال
                        </button>
                      </li>
                      <li className="text-md p-1">
                        شماره تماس: ۰۹۰۳۰۸۱۳۷۴۲ | کد پستی: ۹۹۹۹۹۹۹۹۹۹
                      </li>
                      <li className="text-sm p-1">
                        استان خراسان شمالی ، ‌شهر بجنورد ، خراسان شمالی-بجنورد
                      </li>
                    </ul>
                  </div>
                )}

                {!isCustomerEditAddressField && (
                  <section className="grid grid-rows-3 pb-6">
                    <section>
                      <section className="grid grid-rows-1 grid-cols-[10fr_1fr] m-9 max-sm:m-5">
                        <h1 className="font-bold">
                          آدرس مورد نظر خود را جهت تحویل انتخاب فرمایید:
                        </h1>
                        <button
                          className="w-7 h-7 border-2 border-gray-500 rounded-full grid justify-self-end justify-center items-center text-gray-500"
                          onClick={() => setIsCustomerEditAddressField(true)}
                        >
                          <RxCross1 />
                        </button>
                      </section>
                      <button
                        className="w-[94%] max-sm:w-[98%] rounded-2xl h-24 border-4 border-dashed border-gray-400 grid items-center justify-self-center justify-center"
                        onClick={() => {
                          setIsNewAddressModalOpen(true);
                        }}
                      >
                        <h1 className="text-gray-400 font-extrabold text-3xl">
                          ایجاد آدرس جدید
                        </h1>
                      </button>
                    </section>
                    <CustomerAddressBox
                      isDeleteOpen={isDeleteAddressModal}
                      setIsDeleteOpen={setIsDeleteAddressModal}
                      isEditAddressOpen={isEditCustomerAddressModal}
                      setIsEditAddressOpen={setIsEditCustomerAddressModal}
                    />
                  </section>
                )}
              </div>
            </section>

            <section>
              {/* Flex container for Image and H1 */}
              <div className="flex items-center gap-5 mt-8">
                <Image
                  src="/imgs/title-circles.png"
                  alt="O"
                  width={30}
                  height={30}
                />
                <h1 className="text-md text-gray-500 font-medium mb-5">
                  انتخاب نحوه ارسال
                </h1>
              </div>

              <div className="w-full h-20 ml-4 border-b-2 relative">
                <div className="flex items-center mb-2 mr-8">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="normalDelivery"
                    name="delivery-method"
                    className="w-4 h-4 text-mainRed bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    checked={deliveryMethod === "normalDelivery"}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <label htmlFor="default-radio-1" className="ms-2 text-sm">
                    عادی
                  </label>
                </div>
                <div className="flex items-center mr-8">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value="fastDelivery"
                    name="delivery-method"
                    className="w-4 h-4 text-mainRed bg-gray-100 border-gray-300focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={deliveryMethod === "fastDelivery"}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <label htmlFor="default-radio-2" className="ms-2 text-sm">
                    سریع‌ (مرسوله‌ها در سریع‌ترین زمان ممکن ارسال می‌شوند)
                  </label>
                </div>
              </div>
            </section>

            <div className="flex items-center gap-5 mt-8">
              <Image
                src="/imgs/title-circles.png"
                alt="O"
                width={30}
                height={30}
              />
              <h1 className="text-md text-gray-500 font-medium mb-5">
                مرسوله ۱ از ۱
              </h1>
            </div>
            <div className="w-full h-72 ml-4 border-b-2 relative"></div>
            <PostDateSelection></PostDateSelection>

            <div className="w-full h-20 ml-4 border-b-2 relative">
              <div className="flex items-center mb-2 mr-8">
                <input
                  id="default-radio-0"
                  type="radio"
                  value=""
                  name="delivery-time"
                  className="w-4 h-4 text-mainRed bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="default-radio-1" className="ms-2 text-sm">
                  عادی
                </label>
              </div>
              <div className="flex items-center mr-8">
                <input
                  checked
                  id="default-radio-3"
                  type="radio"
                  value=""
                  name="delivery-time"
                  className="w-4 h-4 text-mainRed bg-gray-100 border-gray-300focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="default-radio-3" className="ms-2 text-sm">
                  سریع‌ (مرسوله‌ها در سریع‌ترین زمان ممکن ارسال می‌شوند)
                </label>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-8">
              <Image
                src="/imgs/title-circles.png"
                alt="O"
                width={30}
                height={30}
              />
              <h1 className="text-md text-gray-500 font-medium mb-5">
                صدور فاکتور
              </h1>
            </div>

            <div className="w-full h-72 ml-4 border">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 peer-checked:bg-red-900 peer-checked:border-blue-900 bg-gray-100 border-gray-300 rounded"
                />
                <span className="text-gray-700">Check me</span>
              </label>
            </div>

            {/* <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-md peer-checked:bg-red-600 peer-checked:border-red-600 transition-all">
                <svg
                  className="hidden w-4 h-4 text-white peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.707 5.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 14.586l9.293-9.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>npm
              </div>
              <span className="text-gray-700">Custom Checkbox</span>
            </label> */}
          </section>

          <section className="grid ">
            <div className="w-[80%] min-w-[300px] h-[30rem] m-4 border rounded-3xl">
              dtable
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ShoppingPage;
