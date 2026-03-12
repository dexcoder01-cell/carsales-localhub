import Header from "@/components/Header/navbar";
import HeaderMobile from "@/components/Header/mobileNavbar";
import Footer from "@/components/Footer/component";
import HomeSlider from "@/components/HomeSlider/component";
import AuctionCars from "@/components/AuctionCars/component";

import "./style.scss";

export default function AllCars() {
  return (
    <>
      <HeaderMobile />
      <Header />
      <div className="page-container homepage">
        <HomeSlider />
        <AuctionCars />
        <a className="btn view-auction" href="/past-auctions/">
          View auction results
        </a>
      </div>
      <Footer />
    </>
  );
}