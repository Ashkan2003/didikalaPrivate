export type ProductsCategoryType = {
  categoryTitle: string;
  subCategories: {
    subCategoryTitle: string;
    linkHref: string;
  }[];
};

export type ProductCartType = {
  cartRate: number;
  cartImg: string;
  cartTitle: string;
  productPrice: number;
};
