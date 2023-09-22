'use client'

import React ,{useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import useWindowSize from '@/utils/useWindowSize';

export default function Cookies() {
    const {cookieDropdown} = useWindowSize();

    const[toggle,SetToggle]= useState(false)


const onToggle =() =>{
    SetToggle(!toggle)
}

  return (
   <div className="header_cookies">
    <div className="header_cookie_img">
      <img src="./logo-cookies.svg" alt="" />
    </div>
    <div className="header_cookie_txt">
      <p>
        <span>Get tattoo now, pay later.</span>
        <span className="header_cookie_desktop">
          That&apos;s right, there&apos;s a new way to get tattooed smoooth!{" "}
          <Link href="/klarna">Learn more</Link>
        </span>

        {toggle && (
          <span className="header_cookie_mob">
            That&apos;s right, there&apos;s a new way to get tattooed
            smoooth! <Link href="/klarna">Learn more</Link>
          </span>
        )}
      </p>
    </div>
    {cookieDropdown && (
      <Image
        onClick={() => onToggle()}
        src={"/arrowDown.svg"}
        alt="arrowDown"
        width={20}
        height={20}
        className="header_cookie_close"
      />
    )}
  </div>
      
   
  )
}
