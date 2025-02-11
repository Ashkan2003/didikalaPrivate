import AmazingOfferSection from "@/components/main-page/AmazingOfferSection";
import BigBannersSection from "@/components/main-page/BigBannersSection";

export default function Home() {
  return (
    <div className="relative h-[100rem] space-y-16">
      <BigBannersSection />
      <AmazingOfferSection />
    </div>
  );
}
