import { ProductImageType } from "@/types/GlobalTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductAllImgsById = (productId: string) => {
  //   const accesstToken = localStorage.getItem("accessToken");

  const {
    data: productAllImg,
    isLoading: isLoadingProductImgs,
    error: productImgError,
  } = useQuery<ProductImageType[]>({
    retry: 1,
    staleTime: Infinity,

    queryKey: ["productAllImgs", productId, ".png"],
    queryFn: async () =>
      await axios
        .get(
          `https://dshop.somee.com/api/ProductImage/GetProductAllImagesById/${productId}`,
          {
            // headers: {
            //   Authorization: `Bearer ${accesstToken}`,
            // },
          }
        )
        .then((res) => res.data),
  });
  return { productAllImg, isLoadingProductImgs, productImgError };
};
