'use client'

import React from 'react';
import Image from 'next/image';
import useWindowSize from '@/utils/useWindowSize';

export default function Slider2() {
  const { isMobileView } = useWindowSize();

  return (
    !isMobileView ? (
      <div className="img_box_wrap">
        <ul className="app_download_img_list img_box_img_m20pc">
          <li>
            <Image
              priority={true}
              src="/img-mobile-new-01.png"
              width={218}
              height={1446}
              alt="Picture of the author"
              placeholder="empty"
              className="image_shadow_bg"
            />
          </li>
          <li>
            <Image
              priority={true}
              src="/img-mobile-new-01.png"
              width={218}
              height={446}
              alt="Picture of the author"
              placeholder="empty"
              layout="responsive"
              className="image_shadow_bg"
            />
          </li>
          <li>
            <Image
              priority={true}
              src="/img-mobile-new-01.png"
              width={218}
              height={446}
              alt="Picture of the author"
              placeholder="empty"
              layout="responsive"
              className="image_shadow_bg"
            />
          </li>
        </ul>
      </div>
    ) : null
  );
}
