import { useState, useEffect } from 'react'

const useWindowWidth = () => {

  if (typeof window === "undefined") return {isMobile: false}

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return {
    isMobile: width <= 768
  }
}

export default useWindowWidth