import NextArrow from "@/components/atoms/next-arrow";
import PrevArrow from "@/components/atoms/prev-arrow";
import React from "react";
import Slider from "react-slick";

const settings = (settings:any) => ({
    className: "center",
    slidesToShow: 3,
    swipeToSlide: true,
    centerPadding: "60px",
    infinite: true,
    nextArrow: <NextArrow className="next-arrow text-red-500" />,
    prevArrow: <PrevArrow className="prev-arrow text-red-500" />,
    responsive: [
        {
            breakpoint: 2560,
            settings: {
              slidesToShow: 4,
            }
          },
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 665,
          settings: {
            slidesToShow: 1,
          }
        }
      ],
    ...settings
    
})

function SwipeToSlide({ children, setting }: { children: React.ReactNode, setting?: any }) {
    return (
        <div className="slider-container p-4">
            <Slider {...setting}>
                {children}
            </Slider>
        </div>
    );
}

export default SwipeToSlide;
