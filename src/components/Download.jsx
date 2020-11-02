import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { motion } from 'framer-motion';
import mycv from '../assets/sai.pdf';
//  css
import './Download.css';


const sliderVariants = {
  animate: {
    x: 45
  },
  null: {
    x: 0
  },
  // exit: {
  //   y: -30,
  //   transition: {
  //     type: 'tween',
  //     duration: 1.5
  //   }
  // }
}


function Download( {download} ) {
  const { openDownload, setOpenDownload } = download;

  return (
    <motion.div className="downloadContainer" onClick={() => setOpenDownload(!openDownload)}
    initial={{ y: 20, opacity: 0}}
    animate={{ y: 0, opacity: 1, transition: { type: 'tween', duration: 1.5}}}
    exit={{ y: -20, opacity: 0, transition: { type: 'tween', duration: 1.5}}}>
      <a href={mycv} download="sai resume" style={{ color: 'white'}}>
        <AiOutlineDownload style={{ margin: '6px 10px', fontWeight: 'bold'}}/>
      </a>
      <motion.div className="slider" variants={ sliderVariants } animate={ openDownload? 'animate': 'null'}>Download CV</motion.div>
    </motion.div>
  )
}

export default Download
