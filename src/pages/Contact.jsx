import React from 'react';
import Title from '../components/Title';
import './Contact.css';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import email from '../assets/email.png';
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

const infoVarients = {
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
      ease: 'easeIn'
    }
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

function Contact() {
  return (
    <motion.div className="contact "
    variants={ parents }
    initial="before"
    animate="after"
    exit="exit">
      <Title>
        Contact
      </Title>
      <motion.div className="contact__container"
         variants={ infoVarients }
      >
        <div className="contact__info">
          <a href="mailto:saihtun1430@gmail.com" style={{ color: 'white'}}>
            <img src={email} alt="email"/>
          </a>
          <h3>saihtun1430@gmail.com</h3>
          <p>This awesome developer is located at SF Bay Area, CA, USA.</p>
          <small>email me maybe ! <span role='img' aria-labelledby="astronaut">👨🏽‍🚀</span></small>
          <div className="contact__icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <DiGithubBadge className="icon github" />
            </a>
            <a href="https://www.facebook.com/saihtun1430/" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook className="icon fb"/>
            </a>
            <a href="https://www.linkedin.com/in/sai-htun-b20a0611a/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="icon li" />
            </a>
            <a href="https://twitter.com/SaiHtun19428970" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterSquare className="icon tt" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact;
