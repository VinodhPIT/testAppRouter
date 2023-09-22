'use client'

import { useState, useEffect } from 'react';

function useWindowSize() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [cookieDropdown, setCookieDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767.98);
      setCookieDropdown(window.innerWidth <= 699.98);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobileView, cookieDropdown };
}

export default useWindowSize;
