'use client'
import React from 'react'
import useWindowSize from '@/utils/useWindowSize';
import {

    blurDataURL,
  } from "@/constants/constants";
import ImageSlider from "@/app/components/slider/ImageSlider";




export default function Test2() {

    const { isMobileView } = useWindowSize();
  return (
    <div>
           {isMobileView ? (
                <ImageSlider
                  imgPath="/Style-page.png"
                  imgAlt="Picture of the author"
                  imgblurDataURL={blurDataURL}
                  imgWidth={221}
                  imgHeight={447}
                ></ImageSlider>
              ) : (
                ""
              )}
    </div>
  )
}
