import React, { useEffect, useState } from "react";
import WatchImage1 from '../../assets/Images/WatchImage1.png'
import WatchImage2 from '../../assets/Images/WatchImage2.png'
import { useParams } from "react-router";
import axios from "axios";

const ReviewProductSlider = ({ProductMainImg , ProductSubImg}) => {
  const [selectedImg, setSelectedImg] = useState(0);
  // ---------Images---------
  const images = [
    ProductSubImg,
    ProductSubImg,
    ProductMainImg,
  ];

  return (
    <div className="flex lg:flex-row-reverse flex-col lg:items-center gap-4 lg:w-[804px] w-full lg:h-[678px] h-[470px]">
        {/* -------Big Image------  */}
      <div className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center">
        <img src={images[selectedImg]} alt={`Main ${selectedImg}`} className="w-full h-full object-contain transition-all duration-300 rounded-m" />
      </div>

      {/* -------SMall Image------ */}
      <div className="flex lg:flex-col flex-row gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setSelectedImg(index)}
            className={`border-2 ${selectedImg === index ? "border-blue-600" : "border-transparent"} rounded-md overflow-hidden lg:w-[140px] w-[100px] lg:h-[148px]`}
          >
            <img src={src} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewProductSlider;

