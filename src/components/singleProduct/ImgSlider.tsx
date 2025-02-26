"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { useGetProductAllImgsById } from "@/reactQuery/product/useGetProductAllImgsById";

interface Props {
  productId: string;
}

const ImgSlider = ({ productId }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const { productAllImg, isLoadingProductImgs, productImgError } =
    useGetProductAllImgsById(productId);

  if (isLoadingProductImgs) return null;

  if (productImgError) {
    console.log(productImgError);
  }
  return (
    <div className="w-full flex flex-col items-center">
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <Image
            src={`data:image/png;base64,${fullscreenImage}`}
            layout="fill"
            objectFit="contain"
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Swiper
        style={
          {
            "--swiper-navigation-color": "#6a6a6a",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "20px",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper2 w-full max-w-[400px] h-auto sm:h-[250px] !pb-8 mb-3 border-b border-gray-200`}
      >
        {productAllImg?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`data:image/png;base64,${image?.imageFile}`}
              layout="responsive"
              width={200}
              height={150}
              alt={image.imageName}
              className="w-full h-auto object-cover lg:h-72 xl:h-72"
              onClick={() => setFullscreenImage(image.imageFile)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full mt-2 max-w-lg h-auto"
      >
        {productAllImg?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`data:image/png;base64,${image?.imageFile}`}
              layout="responsive"
              width={400}
              height={200}
              alt={image.imageName}
              className="w-full h-20 object-cover cursor-pointer lg:h-24 xl:h-28"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgSlider;
