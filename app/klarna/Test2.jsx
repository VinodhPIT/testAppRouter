
'use client'

import React from 'react'
import ImageSlider from "@/app/components/slider/ImageSlider";

import useWindowSize from '@/utils/useWindowSize';
import {

    blurDataURL,
  } from "@/constants/constants";

export default function Test2() {


    const { isMobileView } = useWindowSize();



  return (
    <div>
      

              {isMobileView ? (
                  <ImageSlider
                    imgPath="/iPhone-192.png"
                    imgAlt="Picture of the author"
                    imgblurDataURL={blurDataURL}
                    imgWidth={215}
                    imgHeight={443}
                  ></ImageSlider>
                ) : (
                  ""
                )} 
    </div>
  )
}
