import React, { useState } from 'react';
import { motion} from 'framer-motion';
import Title from '../components/Title';
import './AboutMe.css';
import AmazingSoftwareEngineer from '../assets/pier.jpg';
// component
import Download from '../components/Download';
// icons
import { DiGithubBadge } from 'react-icons/di';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const myImg = {
  background: `url(${AmazingSoftwareEngineer})`,
  width: '300px',
  height: '350px',
  backgroundPosition: 'cover',
  backgroundSize: 'cover',
  objectFit: 'contain',
  position: 'absolute',
  left: 25,
  top: 25
}

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
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: 'easeOut',
      // delay: 1,
    }
  }
}

const VertiLineVarients = {
  before: {
    y: -200,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.8,
      duration: 1.3
    }
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      type: 'tween',
      // delay: 0.8,
      duration: 1.5,
    }
  }
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
      // delay: 0.5,
      duration: 1.5
    }
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.3
    }
  }
}

const textVarients = {
  before: {
    y: 10,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.2
    }
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 1.2
    }
  }
}



function AboutMe( ) {
  const [ openDownload, setOpenDownload ] = useState(false);
       

  const close = (e) => {
    if(e.target.className !== "slider") {
      setOpenDownload(false);
    };
  }

  return (
    <motion.div className="about container" onClick={(e) => {close(e)}} 
    variants={ parents }
    initial="before"
    animate="after"
    exit="exit"
    >
     <Title>About Me</Title>
    
     <section className="hero">
        <div style={{ height: '200px', width: '3px', overflowY: 'hidden', position: 'relative'}}>
          <motion.div className="hero__line"
          variants={ VertiLineVarients }></motion.div>
        </div>
        <main className="heroInfo">
          <motion.p className="hero__title"
          variants={ textVarients }>Ohaiyo ~</motion.p>
          <motion.p className="hero__des"
           variants={textVarients}
           >My name is Sai, a designer 
          who can code, expertise in
          modern Javascript Development stacks,
          critical thinker, Music and <span role="img" aria-labelledby="a cute puppy">🐶 </span> lover, 
          allow me to turn your wishes into 
          reality.</motion.p>
          <motion.p className="hero__location"
           variants={ textVarients }>This awesome developer is Located in SF Bay Area</motion.p>
          <Download download={ {openDownload, setOpenDownload} }/>
        </main>
        <main className="heroImg">
          <div className="imgContainer">
            <motion.div style={myImg}
            initial={{ scale: 0.8, opacity: 0}}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1.3, delay: 0.5}}}
            exit={{ scale: 0, opacity: 0, transition: { duration: 1.3}}}></motion.div>
            <motion.div className="greenSquare"
            initial={{ x: 50, opacity: 0}}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.3}}}
            exit={{ x: 50, opacity: 0, transition: { duration: 1.3}}}></motion.div>
            <motion.div className="blueSquare"
            initial={{ x: -50, opacity: 0}}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.3}}}
            exit={{ x: -50, opacity: 0, transition: { duration: 1.3}}}></motion.div>
          </div>
        </main>
     </section>
     <footer className="aboutMe__footer">
        <motion.div className="icons"
        variants={textVarients}>
          <DiGithubBadge className="icon github" />
          <AiFillFacebook className="icon fb"/>
          <AiFillLinkedin className="icon li" />
          <AiFillTwitterSquare className="icon tt" />
          <div style={{ width: '100px', overflowX: 'hidden'}}>
            <motion.div className="footer__line"
            variants={ horiLineVarients }></motion.div>
          </div>
        </motion.div>
     </footer>
    </motion.div>
  )
}

export default AboutMe

