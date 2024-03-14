import React from "react";
import "./AlbumPhotos.css";
import { motion, Variants } from "framer-motion";
import brittanyBeach from "./../assets/brittanyBeach.webp";
import sunset from "./../assets/sunset.webp";

const cardVariantsPair: Variants = {
  offscreen: {
    y: 500
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const cardVariantsImpair: Variants = {
    offscreen: {
      y: 500
    },
    onscreen: {
      y: 50,
      rotate: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


const Card = ({index, photoPath}) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={index % 2 === 0 ? cardVariantsPair : cardVariantsImpair }>
        <img src={photoPath} alt="test" />
      </motion.div>
    </motion.div>
  );
}

const photos = [
  brittanyBeach,
  sunset,
];

const AlbumPhotos = () => {
  return photos.map((photo, index) => (
    <Card key={index} index={index} photoPath={photo} />
  ));
}

export default AlbumPhotos;
