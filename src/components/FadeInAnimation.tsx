import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "fadeIn",
      bounce: 0.8,
      duration: 1,
      damping: 8,
      delay: 0.1,
      stiffness: 100,
    },
  },
};

const FadeInText = ({ children }) => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      className="d-flex flex-column align-items-center"
    >
      {children}
    </motion.div>
  );
};

export default FadeInText;
