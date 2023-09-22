'use client'


import React from 'react'

import ImageSlider from "@/app/components/slider/ImageSlider";

import useWindowSize from '@/utils/useWindowSize';




export default function Slider() {

  
    const { isMobileView } = useWindowSize();



  return (
    <div>
            {isMobileView ? (
                <ImageSlider
                  imgPath="/img-mobile-new-01.png"
                  imgAlt="Picture of the author"
                  imgblurDataURL=""
                  imgWidth="218"
                  imgHeight="446"
                ></ImageSlider>
              ) : (
                ""
              )}

      
    </div>
  )
}
