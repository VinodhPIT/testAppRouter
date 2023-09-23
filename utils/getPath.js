'use client'
import React from "react";
import { usePathname } from "next/navigation";

export default function ShouldHideHeader() {
  const pathName = usePathname();

  const hideHeaderRoutes = [
    "/search",
    "/",
    "/tattoo/[detail]",
    "/flash/[detail]",
    "/artist/[detail]",
    "/contactus",
    "/joinartist",
    "/all/[detail]",
  ];

  return hideHeaderRoutes.includes(pathName);
}






