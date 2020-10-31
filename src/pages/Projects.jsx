import React, { useState } from 'react';
import './Projects.css';
import Title from '../components/Title';
import ProjectsPanel from '../components/ProjectsPanel';
import { motion } from 'framer-motion';


const projectsVarients = {
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



function Projects() {
  const [ openProject, setOpenProject ] = useState(false);
  const [ projectName, setProjectName ] = useState({name: ""});

  const handleCloseAll = (e) => {
    if(e.target.className !== "projectDetails" && e.target.className !== "projectName" && e.target.className !== "projectMenu") {
      setOpenProject(false);
      setProjectName({name: ""})
    }
  }

  return (
    <motion.div className="projects"
    variants={projectsVarients}
    initial="before"
    animate="after"
    exit="exit"
    onClick={ (e) => { handleCloseAll(e) } }
    >
      <Title>
        Projects
      </Title>
      <ProjectsPanel open={{openProject, setOpenProject}} name={{ projectName, setProjectName }}/>
    </motion.div>
  )
}

export default Projects
