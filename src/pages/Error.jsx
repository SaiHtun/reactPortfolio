import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';
import { motion } from 'framer-motion';

const parents = {
  before: {
    y: 20,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.3,
      ease: 'easeOut',
    }
  }
}

function Error() {
  return (
    <motion.div className="error"
    variants={ parents }
    initial="before"
    animate="after"
    exit="exit">
      <div className="error__info">
        <h1>404 not found..</h1>
        <p>Oh nooo, are you looking for the badass developer <Link to="/about" style={{ color: '#63D187', fontWeight: 'bold'}}>"Sai Htun"</Link> ? <span role="img" aria-labelledby="sai" > 👨🏽‍🚀 </span></p>
      </div>
    </motion.div>
  )
}

export default Error
