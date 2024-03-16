import React from "react";
import "./PhotosStack.css";
import { motion, Variants } from "framer-motion";

type AlbumPhotosProps = {
  photos: string[];
  gap: "xs" | "lg";
};

const Card = ({ index, photoPath, gap }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 500,
      opacity: 0,
    },
    onscreen: {
      y: 50,
      rotate: index % 2 === 0 ? -10 : 10,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.2,
      },
    },
  };
  return (
    <motion.div
      className={`card-container ${gap}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <img src={photoPath} alt="photos" />
      </motion.div>
    </motion.div>
  );
};

const AlbumPhotos = ({ photos, gap }: AlbumPhotosProps) => {
  console.log(photos);
  return photos?.map((photo, index) => (
    <Card key={index} index={index} photoPath={photo} gap={gap} />
  ));
};

export default AlbumPhotos;
