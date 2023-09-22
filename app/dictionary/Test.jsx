
'use client'

import React from 'react'
import useWindowSize from '@/utils/useWindowSize';
import Image from "next/image";
import {

    blurDataURL,
  } from "@/constants/constants";

export default function Test() {

    const { isMobileView } = useWindowSize();


  return (
    <div>
 {!isMobileView ? (
                  <div className="img_box_wrap">
                    <ul className="app_download_img_list mt_mb_6pc after_none justify_content_right text_center mr_0">
                      <li>
                        <Image
                          priority={true}
                          src="/iPhone-192.png"
                          width={215}
                          height={443}
                          alt="Picture of the author"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          layout="responsive"
                          className="image_shadow_bg"
                        />
                      </li>
                      <li>
                        <Image
                          priority={true}
                          src="/iPhone-192.png"
                          width={215}
                          height={443}
                          alt="Picture of the author"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          className="image_shadow_bg"
                          layout="responsive"
                        />
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )} 


      
    </div>
  )
}
