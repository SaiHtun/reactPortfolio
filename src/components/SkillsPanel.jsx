import React from 'react';
import './SkillsPanel.css';
import SkillCard from './SkillCard';
import { AiOutlineCloud } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { VscBeaker } from "react-icons/vsc";
import { motion } from 'framer-motion';


// const skills = [ 
//   { AiOutlineCloud : [ 'AWS', 'Netlify', 'Heroku', 'Vercel', 'GCP ( Firebase )'] },
//   { "</>" : [ 'HTML/CSS', 'JavaScript', 'React/Vue', 'Any CSS utility library'] },
//   { "{ }" : [ 'Node.Js', 'Express' ]},
//   { VscBeaker : [ 'Jest', 'Supertest', 'Mocha', 'Chai']},
//   { FaDatabase : [ 'SQL/NoSQL', 'MySQL/Postgresql', 'MongoDB/FirebaseDB']}
// ]
const cloud = [ 'AWS', 'Netlify', 'Heroku', 'Vercel', 'GCP ( Firebase )'];
const web = [ 'HTML/CSS', 'JavaScript', 'React/Vue', 'Any CSS utility library'];
const backend = [ 'Node.Js', 'Express' ]
const testing = [ 'Jest', 'Supertest', 'Mocha', 'Chai'];
const db = [ 'SQL/NoSQL', 'MySQL/Postgresql', 'MongoDB/FirebaseDB'];

const panelVarients = {
  before: {
    x: 50,
    opacity: 0
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.3,
      staggerChildren: 0.3
    }
  }
}

function SkillsPanel() {
  return (
    <motion.div className="skillsPanel"
    variants={ panelVarients }
    // initial="before"
    // animate="after"
    // exit="exit"
    >
      {/* Cloud skills */}
      <SkillCard>
        < AiOutlineCloud className="skill__title cloud"/>
        <ul className="skillsList">
        { cloud.map((skill, index) => {
          return (
            <motion.li key={index}
            whileHover={{ x: 20, scale: 1.2, color: `var(--green)` }}>{ skill }</motion.li>
          )
        })}
        </ul>
      </SkillCard>
       {/* Web skills */}
       <SkillCard>
        <p className="skill__title">{ `</>` }</p>
        <ul className="skillsList">
        { web.map((skill, index) => {
          return (
            <motion.li key={index}
            whileHover={{ x: 20, scale: 1.2, color: `var(--green)` }}>{ skill }</motion.li>
          )
        })}
        </ul>
      </SkillCard>
       {/* Backend skills */}
       <SkillCard>
        <p className="skill__title">{ `{ }` }</p>
        <ul className="skillsList">
        { backend.map((skill, index) => {
          return (
            <motion.li key={index}
            whileHover={{ x: 20, scale: 1.2, color: `var(--green)` }}>{ skill }</motion.li>
          )
        })}
        </ul>
      </SkillCard>
       {/* testing skills */}
       <SkillCard>
        <VscBeaker className="skill__title"/>
        <ul className="skillsList">
        { testing.map((skill, index) => {
          return (
            <motion.li key={index}
            whileHover={{ x: 20, scale: 1.2, color: `var(--green)` }}>{ skill }</motion.li>
          )
        })}
        </ul>
      </SkillCard>
       {/* DB skills */}
       <SkillCard>
        <FaDatabase className="skill__title"/>
        <ul className="skillsList">
        { db.map((skill, index) => {
          return (
            <motion.li key={index}
            whileHover={{ x: 20, scale: 1.2, color: `var(--green)` }}>{ skill }</motion.li>
          )
        })}
        </ul>
      </SkillCard>
    </motion.div>
  )
}
 
export default SkillsPanel
