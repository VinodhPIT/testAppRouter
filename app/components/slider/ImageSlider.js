'use client'

import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import useWindowSize from '@/utils/useWindowSize';


const ImageSlider = ({imgPath,imgAlt,imgblurDataURL,imgWidth,imgHeight}) => {

  const { isMobileView } = useWindowSize();








  let sliderSettings = {};
  if (isMobileView) {
    sliderSettings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1.5,
      slidesToScroll: 1.5,
    };
  }

  return (
    <div className="img_box_wrap slick_custom_slider">
      <Slider {...sliderSettings}>
        <div>
        <Image
            priority={true}
            src={imgPath}
            width={imgWidth}
            height={imgHeight}
            alt={imgAlt}
            placeholder="empty"
            className="responsive-image"
          />
        </div>
        <div>
        <Image
            priority={true}
            src={imgPath}
            width={imgWidth}
            height={imgHeight}
            alt={imgAlt}
            placeholder="empty"
            className="responsive-image"
          />
        </div>
        <div>
          <Image
            priority={true}
            src={imgPath}
            width={imgWidth}
            height={imgHeight}
            alt={imgAlt}
            placeholder="empty"
            className="responsive-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
