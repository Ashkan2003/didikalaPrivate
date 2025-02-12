import AmazingOfferSection from "@/components/main-page/AmazingOfferSection";
import BigBannersSection from "@/components/main-page/BigBannersSection";

export default function Home() {
  return (
    <div className="space-y-16 pt-6">
      <BigBannersSection />
      <AmazingOfferSection />
    </div>
  );
}
