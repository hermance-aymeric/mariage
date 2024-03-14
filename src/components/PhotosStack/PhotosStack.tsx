import React from "react";
import "./PhotosStack.css";
import { motion, Variants } from "framer-motion";

type AlbumPhotosProps = {
  photos: string[];
};

const Card = ({ index, photoPath }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 50,
      rotate: index % 2 === 0 ? -10 : 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="card-container"
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

const AlbumPhotos = ({ photos }: AlbumPhotosProps) => {
  console.log(photos);
  return photos?.map((photo, index) => (
    <Card key={index} index={index} photoPath={photo} />
  ));
};

export default AlbumPhotos;
