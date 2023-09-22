'use client'

import React from 'react'
import useWindowSize from '@/utils/useWindowSize';

import styles from "./custom.module.css";


export default function Test1() {


    const { isMobileView } = useWindowSize();



  return (<>
  {!isMobileView ? (
                <div class="img_box_wrap">
                  <ul class="app_download_img_list img_box_img_m20pc justify_content_center">
                    <li>
                      <img
                        src="./mockup-iPhone-download.png"
                        alt="Download the App & Explore more!"
                      />
                    </li>
                    <li>
                      <img
                        src="./mockup-iPhone-download.png"
                        alt="Download the App & Explore more!"
                      />
                    </li>
                  </ul>
                </div>):""}</>
    
  )
}
