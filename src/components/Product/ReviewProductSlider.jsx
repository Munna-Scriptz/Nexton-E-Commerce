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
    <div className="flex flex-row-reverse items-center gap-4 w-[804px] h-[678px]">
        {/* -------Big Image------  */}
      <div className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center">
        <img src={images[selectedImg]} alt={`Main ${selectedImg}`} className="w-full h-full object-contain transition-all duration-300 rounded-m" />
      </div>

      {/* -------SMall Image------ */}
      <div className="flex flex-col gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setSelectedImg(index)}
            className={`border-2 ${selectedImg === index ? "border-blue-600" : "border-transparent"} rounded-md overflow-hidden w-[140px] h-[148px]`}
          >
            <img src={src} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewProductSlider;

