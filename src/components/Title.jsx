import React from 'react';
import { ReactComponent as Logo } from '../assets/rec.svg';
import { motion } from 'framer-motion';

const title = {
  display: 'flex',
  alignItems: 'center',
}

const name = {
  fontFamily: 'var(--fontOne)',
}

const titleVarients = {
  before : { y: 10, opacity: 0},
  after: { y: 0, opacity: 1, transition: { type: 'tween', duration: 1.5}},
  exit: { y: -10, opacity: 0, transition: { type: 'tween', duration: 1.5}}
}

const horiLineVarients = {
  before: {
    x: -200,
    opacity: 0
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 1.5
    }
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.5
    }
  } 
}

function Title(props) {
  return (
    <motion.div className="container" 
    variants={ titleVarients }
    // initial="before"
    // animate="after"
    // exit="exit"
    >
      <div style={ title }>
        <Logo />
        <h2 style={name}>{ props.children }</h2>
      </div>
      <div style={{ width: '80px', overflowX: 'hidden', marginLeft: '50px'}}>
        <motion.div className="aboutMe__line"
        variants={ horiLineVarients }
        ></motion.div>
     </div>    
    </motion.div>
  )
}

export default Title

