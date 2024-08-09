import React from "react";
import Carousel from "../components/Carousel";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"

function Home() {
  const pic =" https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693594200562";
  const slides = [
    "https://i.gadgets360cdn.com/large/redmi_note_13_series_1695100764617.jpg",
    "https://i.gadgets360cdn.com/large/motorola_edge_30_fusion_moto_1710494156432.jpg",
    "https://cdn.mos.cms.futurecdn.net/e55bbc7d8620a465ba16f337071156cc.jpg",
  ];
  return (
    <div className="h-screen flex flex-col justify-between">
     
      <Navbar1 />
      <Carousel slides={slides} />
      <div className="flex flex-col w-[100%]">
        <Card img={pic} phoneName={"Iphone 15 pro"} price={"1,50,000"} brand={"iphone"}/>
 
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
