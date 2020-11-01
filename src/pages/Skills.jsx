import React from 'react';
import Title from '../components/Title';
import SkillsPanel from '../components/SkillsPanel';
import { motion } from 'framer-motion';
import { FaVuejs, FaReact, FaJsSquare, FaNodeJs} from 'react-icons/fa'
//  css
import './Skills.css';

const skillsVarients = {
  before: {
    y: 20,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1,
  },
  exit: {
     y: -20,
     opacity: 0,
     transition: {
       type: 'tween',
       duration: 1.3,
      //  childrenStaggers: 1.3
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
      <div className="skills__icons container" >
        <div>
          <FaJsSquare className="js icon"/>
        </div>
        <div>
          <FaReact className="react icon"/>
        </div>
        <div>
          <FaVuejs className="vue icon"/>
        </div>
        <div>
          <FaNodeJs className="node icon"/>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
