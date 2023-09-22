'use client'


import React ,{useState ,useEffect} from 'react'


const imagePaths = [
    "./Group 82674.svg",
    "./Group 82675.svg",
    "./Group 82677.svg",
    "./Group 82678.svg",
    "./path14.svg",
    "./path430.svg",
    "./path466.svg",
    "./path428.svg",
  ];


export default function ImageFader() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // styleCollection();
    
        const timer = setInterval(changeImage, 2000);
        return () => clearInterval(timer);
    
      }, []);
    
      const changeImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      };

      



  return (
<div class="bg_overlay_img">
          {imagePaths.map((imagePath, index) => (
                      <img
                        key={index}
                        style={{
                          height: "474px",
                          width: "400px",
                          zIndex: "2",
                          position: "absolute",
                        }}
                        id={`image${index}`}
                        className={`imageFader ${
                          index === currentIndex ? "active" : ""
                        }`}
                        src={imagePath}
                        alt={`Image ${index + 1}`}
                      />
                    ))}

    </div>
  )
}
