
'use client'

import React from 'react'
import useWindowSize from '@/utils/useWindowSize';
import Image from "next/image";
import {

    blurDataURL,
  } from "@/constants/constants";

export default function Test1() {

    const { isMobileView } = useWindowSize();


  return (
    <div>

        
{!isMobileView ? (
                  <div class="img_box_wrap">
                    <ul class="app_download_img_list mt_mb_6pc after_none">
                      <li>
                        <Image
                          priority={true}
                          src="/Style-page.png"
                          className=""
                          width={221}
                          height={447}
                          alt="Picture of the author"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          layout="responsive"
                        />
                      </li>
                      <li>
                        <Image
                          priority={true}
                          src="/Style-page.png"
                          className=""
                          width={221}
                          height={447}
                          alt="Picture of the author"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          layout="responsive"
                        />
                      </li>
                      <li>
                        <Image
                          priority={true}
                          src="/Style-page.png"
                          className=""
                          width={221}
                          height={447}
                          alt="Picture of the author"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
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
