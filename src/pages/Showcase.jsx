import React from 'react';
import Title from '../components/Title';
import './Showcase.css';
import '../components/VideoCard';
import OutstaMobile from '../assets/outstagramm_mobile.mov';
import OutstaDesk from '../assets/outstagramm_desk.mp4';
import VideoCard from '../components/VideoCard';
import { motion } from 'framer-motion';

const videos = [
  {
    name: 'outstagramm mobile',
    src: OutstaMobile,
    view: 'mobile'
  },
  {
    name: 'outstagramm desktop',
    src: OutstaDesk,
    view: 'desktop'
  },
];

const showcaseVarients = {
  before: {
    y: 20,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.3,
      staggerChildren: 1.3
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.3,
      staggerChildren: 1.3
    }
  }
}

const videoVarients = {
  before: {
    x: 100,
    opacity: 0
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.3,
    }
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

function Showcase() {
  return (
    <motion.div className="showcase"
    variants={ showcaseVarients }
    initial="before"
    animate="after"
    exit="exit"
    >
      <Title>Showcase</Title>
      <div className="showcase__videos">
        { videos.map((video, index) => {
          return (
              <VideoCard video={video} key={index}/>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Showcase
