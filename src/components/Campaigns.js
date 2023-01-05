import { useState,useEffect } from "react";
import Slider from "react-slick"; 
import Banners from "./Api/banners.json"
import Title from "./ui/Title";

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);

  }, [])


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed:3500,
    cssEase:"Linear"

  };
  return (
    <div className="container-mx-auto">
      <Title> Kampanyalar</Title>
      <h3 className="text-sm font-semibold mb-3 ">kategoriler </h3>
       <Slider {...settings}>
       {banners.length && banners.map((banner,index) => (
      <div key={banner.id}>

        {/* <img src={banner.image}/> */}

      </div>


       )) }

      </Slider>
    </div>
  )
}
