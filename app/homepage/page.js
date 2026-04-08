import Header from "@/components/Header/navbar";
import HeaderMobile from "@/components/Header/mobileNavbar";
import Footer from "@/components/Footer/component";
import BannerSlide from "@/components/BannerSlide/component";
import BannerSlideMob from "@/components/BannerSlide/component_mob";
import AuctionCars from "@/components/AuctionCars/component_updated";

import "./style.scss";

export default function AllCars() {
  return (
    <>
      <HeaderMobile />
      <Header />
      <div className="page-container homepage">
        <BannerSlide />
        <BannerSlideMob />
        <AuctionCars />
        <a className="btn view-auction" href="/past-auctions/">
          View auction results
        </a>
      </div>
      <Footer />
    </>
  );
}