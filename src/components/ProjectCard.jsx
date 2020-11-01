import React from 'react';
import './ProjectCard.css';
import { DiGithubBadge } from 'react-icons/di';
import { FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';


function ProjectCard( {project, open, name} ) {
  // const [ openDetail, setOpenDetail ] = useState(false);
  const { openProject, setOpenProject } = open;
  const { projectName, setProjectName } = name;

  const handleOpen = () => {
     setOpenProject(!openProject);
     setProjectName({ name: project.name });
  }


  const projectCard = {
    minWidth: '290px',
    height: `${project.view === 'mobile'? '330px': '230px'}`,
    backgroundImage: `${project.img}`,
    borderRadius: "5px",
    marginRight: "30px",
    textAlign: "center",
    gridArea: `${ project.area }`,
    boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.30), 0 0 0 1px rgba(10,10,10,.02)",
    overflowY: 'hidden',
    position: 'relative'
  }

  const projectDetails = {
    width: '100%',
    height: '100%',
    padding: "10px 20px",
    backgroundColor: `var(--grey)`,
    color: 'white',
    borderRadius: '10px 10px 0 0 ',
    zIndex: '10',
  }
  

  const projectVarients = {
    before: {
      x: 100,
      opacity: 0
    },
    after: {
      x: 0,
      opacity: 1,
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

 

  return (
    <motion.div style={ projectCard }
      className="projectCard"
      variants={ projectVarients }
    >
      <img src={ project.img } alt="gg" className="projectImg"/>
      <motion.div style={ projectDetails }
      className="projectDetails"
      onClick={() => { handleOpen()}}
      animate={ openProject && projectName.name === project.name ? {y: 20, transition: { type: 'tween', duration: 0.5 } } : { y: project.view === 'mobile'? 290: 190 }}
      whileHover={{ y: 20, transition: { type: 'tween', duration: 0.5 }}}
      >
        <div className="projectMenu">
          <p className="projectName">{ project.name }</p>
          <div className="projectLinks">
            <a href={ project.git } target="_blank" rel="noopener noreferrer">
              < DiGithubBadge style={{ fontSize: '1.5em', marginRight: '5px', color: 'white'}}/>
            </a>
            <a href={ project.web } target="_blank" rel="noopener noreferrer">
              < FaGlobe style={{ fontSize: '1.2em', color: 'white'}}/>
            </a>
          </div>
        </div>
        <div className="projectDescriptions">
          { project.fe && <div><p>Frontend:</p><span>{ project.fe }</span></div> }
          { project.be && <div><p>Backend: </p><span>{ project.be }</span></div> }
          { project.API && <div><p>API: </p><span>{ project.API }</span></div> }
          { project.npm && <div><p>NPM: </p><span>{ project.npm }</span></div> }
          { project.css && <div><p>CSS: </p><span>{ project.css }</span></div> }
          { project.StateMgmt && <div><p>State:</p><span>{ project.StateMgmt }</span></div> }
          { project.responsiveness && <div><p>Responsiveness: <span>{ project.responsiveness }</span></p></div> }
          <p className="descriptions">
            { project.des }
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
