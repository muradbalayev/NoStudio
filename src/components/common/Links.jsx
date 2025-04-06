import React from "react";
import "./common.scss";
import { motion } from "framer-motion";
const Links = ({text, className}) => {
  return (
    <div className={`links-container ${className}`}>
      <motion.div className="slider">
        <div className="item">
          <PerspectiveText text={text} />
        </div>
      </motion.div>
    </div>
  );
};

export default Links;

function PerspectiveText({ text }) {
  return (
    <div className="perspective-text">
      <p>{text}</p>
      <p>{text}</p>
    </div>
  );
}
