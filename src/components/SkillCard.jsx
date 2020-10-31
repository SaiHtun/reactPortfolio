import React from 'react';
import './SkillCard.css';
import { motion } from 'framer-motion';

const cardVarients = {
  before: {
    x: 100,
    opacity: 0
  },
  after: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.3
    }
  }
}

function SkillCard( props ) {
  return (
    <motion.div className="skillCard"
    whileHover={{ scale: 1.1}}
    variants={ cardVarients }
    exit="exit">
      { props.children }
    </motion.div>
  )
}

export default SkillCard
