import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/rec.svg';
// CSS
import './Landing.css';
// library
// import { DiReact } from "react-icons/di";
import { motion, useCycle } from 'framer-motion';


const parents = {
  before: {
    y: 20,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  release: {
    y: -10,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 3,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
  }
 
}

const childs = {
  before: {
    y: 50,
    opacity: 0,
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      dumping: 300,
      stiffness: 400
    }
  }, 
  release: {
    y: -50,
    opacity: 0,
    transition: {
      type: 'spring',
      dumping: 300,
      stiffness: 400
    }
  }
 
}


const letters = Array.from('SAI, Software Engineer');

function Landing() {
  const [ jump, setJump ] = useState(false);
  const [ animations, cycleAnimations ] = useCycle("after", "release");

  useEffect(() => {
    let timeOne = setTimeout(() => {
      cycleAnimations();
    }, 5000)
  
    let timeTwo = setTimeout(() => {
      setJump(true);
    }, 8000)

    return () => {
      clearTimeout(timeOne);
      clearTimeout(timeTwo);
    }

  }, [])
  

  
  
 
  return (
  
    <>
     { jump && <Redirect to="/about"/>}
      <motion.div className="landing"
       variants={parents}
       initial="before"
       animate={ animations }
       exit="exit"   
       >
        <motion.div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
          <motion.div
          variants={childs}>
            <Logo 
            style={{ width: '60px', height: '60px', marginTop: "16px"}}></Logo>
          </motion.div>
          {letters.map((letter, index) => {
            return (
              <motion.div
              key={index}
              variants={childs}
              >{ letter === " "? "\u00A0" : letter }</motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Landing
