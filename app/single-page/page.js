import Header from "@/components/Header/navbar";
import HeaderMobile from "@/components/Header/mobileNavbar";
import Footer from "@/components/Footer/component";
import Gallery from "@/components/Gallery/lightboxGallery";
import GalleryMob from "@/components/Gallery/lightboxGalleryMob";
import VehicleDetails from "@/components/VehicleDetails/component";
import AuctionCars from "@/components/AuctionCars/component";

import "./style.scss";

export default function AllCars() {
  return (
    <>
      <HeaderMobile />
      <Header />
      <div className="page-container single-page">
        <GalleryMob />
        <Gallery />
        <div className="details">
          <VehicleDetails />
          <AuctionCars />
        </div>
      </div>
      <Footer />
    </>
  );
}