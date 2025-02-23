import { ProductType } from "@/types/GlobalTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductById = (productId: string) => {
  //   const accesstToken = localStorage.getItem("accessToken");

  const {
    status: productStatus,
    data: product,
    isLoading: isLoadingProduct,
    error: productError,
  } = useQuery<ProductType>({
    queryKey: ["product", productId],
    queryFn: async () =>
      await axios
        .get(`http://dshop.somee.com/api/Product/GetProductById/${productId}`, {
          // headers: {
          //   Authorization: `Bearer ${accesstToken}`,
          // },
        })
        .then((res) => res.data),
  });
  return { product, isLoadingProduct, productStatus, productError };
};
