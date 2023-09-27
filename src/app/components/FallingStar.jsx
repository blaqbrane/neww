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
        position: "fixed", // Use fixed positioning
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none", // Prevent stars from capturing clicks
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
            x: `${index % 2 === 0 ? "-" : ""}${Math.random() * 100}%`,
            y: -100,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: "100vh",

            transition: {
              duration: 5,
              repeat: Infinity,
              delay: index * 1,
            },
          }}
          style={{
            width: "200px",
            height: "60px",
            position: "absolute",
            top: 0,
            left: `${index * (100 / starImages.length)}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingStars;
