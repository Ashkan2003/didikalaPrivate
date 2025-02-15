import AmazingOfferSection from "@/components/main-page/AmazingOfferSection";
import BestSellingProductsSection from "@/components/main-page/BestSellingProductsSection";
import BigBannersSection from "@/components/main-page/BigBannersSection";
import { MediumBanner } from "@/components/main-page/MediumBannerSection";
import SmallBannerSection from "@/components/main-page/SmallBannerSection";

export default function Home() {
  return (
    <div className="space-y-16 pt-6">
      <BigBannersSection />
      <AmazingOfferSection bgColor="red" />
      <BestSellingProductsSection />
      <MediumBanner />
      <AmazingOfferSection bgColor="blue" />
      <SmallBannerSection />
    </div>
  );
}
