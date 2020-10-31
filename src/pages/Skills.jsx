import React from 'react';
import Title from '../components/Title';
import SkillsPanel from '../components/SkillsPanel';
import { motion } from 'framer-motion';
//  css
import './Skills.css';

const skillsVarients = {
  before: {
    y: 20,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1
  },
  exit: {
     y: -20,
     opacity: 0,
     transition: {
       type: 'tween',
       duration: 1.2
     }
  }

}



function Skills() {
  return (
    <motion.div className="skills"
    variants={ skillsVarients }
    initial="before"
    animate="after"
    exit="exit"
    >
      <Title>
        Skills
      </Title>
      <SkillsPanel />
    </motion.div>
  )
}

export default Skills
