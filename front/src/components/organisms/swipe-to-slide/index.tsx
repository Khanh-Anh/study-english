import NextArrow from "@/components/atoms/next-arrow";
import PrevArrow from "@/components/atoms/prev-arrow";
import React from "react";
import Slider from "react-slick";

const settings = {
    className: "center",
    slidesToShow: 3,
    swipeToSlide: true,
    centerPadding: "60px",
    infinite: false,
    nextArrow: <NextArrow className="next-arrow text-red-500" onClick={() => { }} />,
    prevArrow: <PrevArrow className="prev-arrow text-red-500" onClick={() => { }} />
} as const;

function SwipeToSlide({ children }: { children: React.ReactNode }) {
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default SwipeToSlide;
