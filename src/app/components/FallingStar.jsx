'use client'
import React from "react";
import { motion } from "framer-motion";

const FallingStars = () => {
  const starImages = [
    "/Asset 2@3x.png",
    "/Asset 3@3x.png",
    "/Asset 4@3x.png",
    "/Asset 5@3x.png",
    "/Asset 6@3x.png",
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {starImages.map((imageUrl, index) => (
        <motion.img
          key={index}
          src={imageUrl}
          alt={`Star ${index + 1}`}
          initial={{
            opacity: 0,
            x: "50vw",
            y: -30, // Start above the screen
            rotate: -16,
          }}
          animate={{
            opacity: [0,0.2, 1,0.2,0 ], // Fading effect
            scale: [0.3, 1, 0.2], // Scaling effect
            x: -200, // Random horizontal position
            y: "80vh", // Move to the bottom of the screen
            transition: {
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: index * 1,
              ease: "linear",
            },
          }}
          style={{
            width: "200px",
            height: "60px",
            position: "absolute",
            top: 0,
            left: `${index * (100 / starImages.length)}%`,
          }}
          className="xl:w-[400px]"
        />
      ))}
    </div>
  );
};

export default FallingStars;
