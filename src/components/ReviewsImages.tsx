"use client"

import { motion } from "framer-motion";
import React from "react";

const staggerDuration = 0.2;
const initialDelay = 2;

const images = [
  { id: 1, left: "574px", top: "42px", src: "review-1.png" },
  { id: 2, left: "70px", top: "26px", src: "review-2.png" },
  { id: 3, left: "312px", top: "127px", src: "review-3.png" },
  { id: 4, left: "1024px", top: "70px", src: "review-4.png" },
  { id: 5, left: "1296px", top: "178px", src: "review-5.png" },
  { id: 6, left: "1296px", top: "585px", src: "review-6.png" },
  { id: 7, left: "713px", top: "672px", src: "review-7.png" },
  { id: 8, left: "70px", top: "582px", src: "review-8.png" },
  { id: 9, left: "296px", top: "753px", src: "review-9.png" },
  { id: 10, left: "1166px", top: "794px", src: "review-10.png" },
];

interface ImageAnimationsProps {
  children: React.ReactNode;
}

const ImageAnimations: React.FC<ImageAnimationsProps> = ({ children }) => {
  return (
    <div className="relative w-full h-[900px]">
      {children}
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="absolute w-[57px] h-[57px] bg-cover bg-center motion-div"
          style={{ left: image.left, top: image.top, backgroundImage: `url('../../assets/${image.src}')` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0, 1, 1.1, 1],
          }}
          transition={{
            delay: initialDelay + index * staggerDuration,
            duration: 0.8,
            ease: "easeInOut",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default ImageAnimations;

