import DoubleCircle from "@/components/DoubleCircle";
import AccountProfile from "@/components/profile/AccountProfile";
import LastFavList from "@/components/profile/LastFavList";
import LastOrders from "@/components/profile/LastOrders";
import PersonalInfo from "@/components/profile/PersonalInfo";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <main className="w-full max-sm:overflow-hidden max-w-[1500px] mx-auto sm:p-2 xl:px-20">
      <div className="grid xl:grid-cols-[2fr_3fr_3fr] md:grid-cols-3 grid-cols-1 gap-3">
        {/* right col --md*/}
        <div className="min-h-screen">
          {/* profileInfo */}
          <section className="m-3">
            <ProfileInfo />
          </section>
          <section className="relative w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto aspect-[3/1] m-3.5">
            {/* The aspect-[3/1] means the height is always 1/3 of the width. */}
            <Image
              className="object-cover ml-3"
              src="/imgs/sidebar-banner-3.jpg"
              fill
              alt="invitation"
              priority
            />
          </section>
          {/* accountInfo */}
          <section className="sticky top-28 self-start">
            <AccountProfile />
          </section>
        </div>
        {/* left col --md*/}
        <div className="md:col-span-2">
          {/* first row (lastFav, personalInfo)--xl */}
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            <section className="m-5">
              <div className="flex mb-5">
                <DoubleCircle />
                <h1 className="mr-3 text-gray-500">اطلاعات شخصی</h1>
              </div>
              <PersonalInfo />
            </section>
            <section className="m-5">
              <div className="flex mb-5">
                <DoubleCircle />
                <h1 className="mr-3 text-gray-500">لیست آخرین علاقه‌مندی‌ها</h1>
              </div>

              <LastFavList />
            </section>
          </div>
          {/* second row (lastOrders) */}
          <div>
            <section className="m-2">
              <div className="flex mb-5">
                <DoubleCircle />
                <h1 className="mr-3 text-gray-500">آخرین سفارش ها</h1>
              </div>
              <LastOrders />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
