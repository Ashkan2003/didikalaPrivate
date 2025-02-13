import AmazingOfferSection from "@/components/main-page/AmazingOfferSection";
import BestSellingProductsSection from "@/components/main-page/BestSellingProductsSection";
import BigBannersSection from "@/components/main-page/BigBannersSection";

export default function Home() {
  return (
    <div className="space-y-16 pt-6">
      <BigBannersSection />
      <AmazingOfferSection />
      <BestSellingProductsSection />
    </div>
  );
}
