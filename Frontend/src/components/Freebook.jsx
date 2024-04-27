import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from "./Cards";

function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-xl font-semibold">Free Offered Courses</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            excepturi repudiandae voluptatem sed. Repudiandae aliquam hic
            adipisci expedita eligendi. In voluptates aliquid maiores dolore
            enim rem voluptate ipsa aliquam sunt.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
